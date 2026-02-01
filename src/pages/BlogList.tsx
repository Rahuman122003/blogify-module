import { useBlog } from '@/contexts/BlogContext';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { BlogFooter } from '@/components/blog/BlogFooter';

export default function BlogList() {
  const { getPublishedBlogs } = useBlog();
  const blogs = getPublishedBlogs();
  const [featuredBlog, ...restBlogs] = blogs;

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12 fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest Articles
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughtful insights on design, technology, and living intentionally.
          </p>
        </div>

        {/* Featured Post */}
        {featuredBlog && (
          <section className="mb-16">
            <BlogCard blog={featuredBlog} featured />
          </section>
        )}

        {/* Divider */}
        {restBlogs.length > 0 && (
          <div className="border-t border-blog-divider my-12" />
        )}

        {/* Blog Grid */}
        {restBlogs.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">
              More Stories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restBlogs.map((blog, index) => (
                <div key={blog.id} style={{ animationDelay: `${index * 100}ms` }}>
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {blogs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No articles published yet.</p>
            <p className="text-muted-foreground mt-2">Check back soon!</p>
          </div>
        )}
      </main>

      <BlogFooter />
    </div>
  );
}
