import React, { createContext, useContext, useState, useCallback } from 'react';
import { BlogPost, BlogContent } from '@/types/blog';
import { mockBlogs } from '@/data/mockBlogs';

interface BlogContextType {
  blogs: BlogPost[];
  getPublishedBlogs: () => BlogPost[];
  getAllBlogs: () => BlogPost[];
  getBlogBySlug: (slug: string) => BlogPost | undefined;
  getBlogById: (id: string) => BlogPost | undefined;
  createBlog: (blog: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>) => BlogPost;
  updateBlog: (id: string, updates: Partial<BlogPost>) => BlogPost | undefined;
  deleteBlog: (id: string) => boolean;
  togglePublish: (id: string) => BlogPost | undefined;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [blogs, setBlogs] = useState<BlogPost[]>(mockBlogs);

  const getPublishedBlogs = useCallback(() => {
    return blogs.filter(blog => blog.published).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [blogs]);

  const getAllBlogs = useCallback(() => {
    return [...blogs].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [blogs]);

  const getBlogBySlug = useCallback((slug: string) => {
    return blogs.find(blog => blog.slug === slug);
  }, [blogs]);

  const getBlogById = useCallback((id: string) => {
    return blogs.find(blog => blog.id === id);
  }, [blogs]);

  const createBlog = useCallback((blogData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newBlog: BlogPost = {
      ...blogData,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setBlogs(prev => [newBlog, ...prev]);
    return newBlog;
  }, []);

  const updateBlog = useCallback((id: string, updates: Partial<BlogPost>) => {
    let updatedBlog: BlogPost | undefined;
    setBlogs(prev => prev.map(blog => {
      if (blog.id === id) {
        updatedBlog = { ...blog, ...updates, updatedAt: new Date() };
        return updatedBlog;
      }
      return blog;
    }));
    return updatedBlog;
  }, []);

  const deleteBlog = useCallback((id: string) => {
    const exists = blogs.some(blog => blog.id === id);
    if (exists) {
      setBlogs(prev => prev.filter(blog => blog.id !== id));
      return true;
    }
    return false;
  }, [blogs]);

  const togglePublish = useCallback((id: string) => {
    let updatedBlog: BlogPost | undefined;
    setBlogs(prev => prev.map(blog => {
      if (blog.id === id) {
        updatedBlog = { ...blog, published: !blog.published, updatedAt: new Date() };
        return updatedBlog;
      }
      return blog;
    }));
    return updatedBlog;
  }, []);

  return (
    <BlogContext.Provider value={{
      blogs,
      getPublishedBlogs,
      getAllBlogs,
      getBlogBySlug,
      getBlogById,
      createBlog,
      updateBlog,
      deleteBlog,
      togglePublish
    }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}
