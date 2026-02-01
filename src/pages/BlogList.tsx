import { useBlog } from '@/contexts/BlogContext';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { BlogFooter } from '@/components/blog/BlogFooter';


export default function BlogList() {
  const { getPublishedBlogs } = useBlog();
  const blogs = getPublishedBlogs();
  const [firstBlog, secondBlog, thirdBlog, ...restBlogs] = blogs;

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      <main className="container mx-auto px-6 py-16">
        {/* Page Title */}
        <div className="text-center mb-16 fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-foreground">
            <span className="italic">All</span> Posts
          </h1>
        </div>

        {/* Featured Grid - 3 columns masonry style */}
        {blogs.length > 0 && (
          <section id="latest" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Left column - tall card */}
            {firstBlog && (
              <div className="fade-in">
                <BlogCard blog={firstBlog} />
              </div>
            )}

            {/* Middle column - featured large card */}
            {secondBlog && (
              <div className="fade-in" style={{ animationDelay: '100ms' }}>
                <BlogCard blog={secondBlog} featured />
              </div>
            )}

            {/* Right column - card with title beside */}
            {thirdBlog && (
              <div className="fade-in" style={{ animationDelay: '200ms' }}>
                <BlogCard blog={thirdBlog} size="large" />
              </div>
            )}
          </section>
        )}

        {/* More Stories Grid */}
        {restBlogs.length > 0 && (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {restBlogs.map((blog, index) => (
                <div 
                  key={blog.id} 
                  className="fade-in"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {blogs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No posts published yet.</p>
            <p className="text-muted-foreground mt-2">Check back soon!</p>
          </div>
        )}
      </main>

      <BlogFooter />
    </div>
  );
}
