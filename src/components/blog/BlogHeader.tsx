import { Link } from 'react-router-dom';

export function BlogHeader() {
  return (
    <header className="border-b border-blog-divider bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/blogs" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-foreground">
            The Blog
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link 
            to="/blogs"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            All Posts
          </Link>
          <Link 
            to="/admin"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
