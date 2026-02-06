import React, { createContext, useContext, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { BlogPost, BlogContent } from "@/types/blog";

/* ================================
   DB TYPES (Supabase Row Types)
================================ */

interface DBBlogContent {
  id: string;
  blog_id: string;
  type: "paragraph" | "heading2" | "heading3" | "image";
  content: string;
  alt: string | null;
  position: number;
}

interface DBBlog {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  cover_image: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
  blog_content?: DBBlogContent[];
}

/* ================================
   CONTEXT TYPES
================================ */

interface BlogContextType {
  getPublishedBlogs: () => Promise<BlogPost[]>;
  getAllBlogs: () => Promise<BlogPost[]>;
  getBlogBySlug: (slug: string) => Promise<BlogPost | null>;
  getBlogById: (id: string) => Promise<BlogPost | null>;
  createBlog: (blog: BlogPost) => Promise<BlogPost>;
  updateBlog: (id: string, blog: Partial<BlogPost>) => Promise<void>;
  deleteBlog: (id: string) => Promise<void>;
  togglePublish: (id: string, value: boolean) => Promise<void>;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

/* ================================
   MAP DB → APP TYPE
================================ */

const mapBlog = (row: DBBlog): BlogPost => ({
  id: row.id,
  title: row.title,
  slug: row.slug,
  description: row.description ?? "",
  coverImage: row.cover_image ?? "",
  published: row.published,
  createdAt: new Date(row.created_at),
  updatedAt: new Date(row.updated_at),

  content: (row.blog_content ?? [])
    .sort((a, b) => a.position - b.position)
    .map((c) => ({
      id: c.id,
      type: c.type,
      content: c.content,
      alt: c.alt ?? "",
    })),
});

/* ================================
   PROVIDER
================================ */

export function BlogProvider({ children }: { children: React.ReactNode }) {
  /* ================================
     FETCH PUBLISHED BLOGS
  ================================ */
  const getPublishedBlogs = useCallback(async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*, blog_content(*)")
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return (data ?? []).map(mapBlog);
  }, []);

  /* ================================
     FETCH ALL BLOGS (ADMIN)
  ================================ */
  const getAllBlogs = useCallback(async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*, blog_content(*)")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return (data ?? []).map(mapBlog);
  }, []);

  /* ================================
     FETCH BLOG BY SLUG
  ================================ */
  const getBlogBySlug = useCallback(async (slug: string) => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*, blog_content(*)")
      .eq("slug", slug)
      .single();

    if (error) return null;
    return mapBlog(data);
  }, []);

  /* ================================
     FETCH BLOG BY ID
  ================================ */
  const getBlogById = useCallback(async (id: string) => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*, blog_content(*)")
      .eq("id", id)
      .single();

    if (error) return null;
    return mapBlog(data);
  }, []);

  /* ================================
     CREATE BLOG
  ================================ */
  const createBlog = useCallback(async (blog: BlogPost) => {
    const { data: created, error } = await supabase
      .from("blogs")
      .insert({
        title: blog.title,
        slug: blog.slug,
        description: blog.description,
        cover_image: blog.coverImage,
        published: blog.published,
      })
      .select()
      .single();

    if (error) throw error;

    if (blog.content?.length) {
      const blocks = blog.content.map((b, i) => ({
        blog_id: created.id,
        type: b.type,
        content: b.content,
        alt: b.alt || null,
        position: i,
      }));

      const { error: blockError } = await supabase
        .from("blog_content")
        .insert(blocks);

      if (blockError) throw blockError;
    }

    return mapBlog({ ...created, blog_content: [] });
  }, []);

  /* ================================
     UPDATE BLOG
  ================================ */
  const updateBlog = useCallback(
    async (id: string, blog: Partial<BlogPost>) => {
      const { error } = await supabase
        .from("blogs")
        .update({
          title: blog.title,
          slug: blog.slug,
          description: blog.description,
          cover_image: blog.coverImage,
          published: blog.published,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id);

      if (error) throw error;

      if (blog.content) {
        await supabase.from("blog_content").delete().eq("blog_id", id);

        const blocks = blog.content.map((b, i) => ({
          blog_id: id,
          type: b.type,
          content: b.content,
          alt: b.alt || null,
          position: i,
        }));

        const { error: blockError } = await supabase
          .from("blog_content")
          .insert(blocks);

        if (blockError) throw blockError;
      }
    },
    []
  );

  /* ================================
     DELETE BLOG
  ================================ */
  const deleteBlog = useCallback(async (id: string) => {
    const { error } = await supabase.from("blogs").delete().eq("id", id);
    if (error) throw error;
  }, []);

  /* ================================
     TOGGLE PUBLISH
  ================================ */
  const togglePublish = useCallback(async (id: string, value: boolean) => {
    const { error } = await supabase
      .from("blogs")
      .update({
        published: value,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) throw error;
  }, []);

  return (
    <BlogContext.Provider
      value={{
        getPublishedBlogs,
        getAllBlogs,
        getBlogBySlug,
        getBlogById,
        createBlog,
        updateBlog,
        deleteBlog,
        togglePublish,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

/* ================================
   HOOK
================================ */

export function useBlog() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used inside BlogProvider");
  }
  return context;
}
