import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { format } from 'date-fns';

interface BlogCardProps {
  blog: BlogPost;
  featured?: boolean;
}

export function BlogCard({ blog, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link 
        to={`/blogs/${blog.slug}`}
        className="group block blog-card fade-in"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-lg">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="blog-card-image h-64 md:h-80"
            />
          </div>
          <div className="flex flex-col justify-center p-4 md:p-6">
            <p className="blog-meta mb-3">
              {format(new Date(blog.createdAt), 'MMMM d, yyyy')} • {blog.readingTime}
            </p>
            <h2 className="blog-heading text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors">
              {blog.title}
            </h2>
            <p className="blog-body text-lg mb-4 line-clamp-3">
              {blog.description}
            </p>
            {blog.author && (
              <p className="text-sm text-muted-foreground">
                By <span className="font-medium text-foreground">{blog.author}</span>
              </p>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/blogs/${blog.slug}`}
      className="group block blog-card fade-in"
    >
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="blog-card-image h-48"
        />
      </div>
      <div className="p-5">
        <p className="blog-meta mb-2">
          {format(new Date(blog.createdAt), 'MMM d, yyyy')} • {blog.readingTime}
        </p>
        <h3 className="blog-heading text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="blog-body text-base line-clamp-2 mb-3">
          {blog.description}
        </p>
        {blog.author && (
          <p className="text-sm text-muted-foreground">
            {blog.author}
          </p>
        )}
      </div>
    </Link>
  );
}
