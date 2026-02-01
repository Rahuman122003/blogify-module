import { Link } from 'react-router-dom';
import { Search, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BlogHeader() {
  return (
    <header className="bg-blog-header text-blog-header-foreground sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/blogs" className="flex items-center">
          <span className="font-serif text-xl font-bold text-blog-header-foreground italic">
            Blog Spot.
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/blogs"
            className="text-sm text-blog-header-foreground/80 hover:text-blog-header-foreground transition-colors"
          >
            Articles
          </Link>
          <Link 
            to="/blogs"
            className="text-sm text-blog-header-foreground/80 hover:text-blog-header-foreground transition-colors"
          >
            Be a writer
          </Link>
          <Link 
            to="/admin"
            className="text-sm text-blog-header-foreground/80 hover:text-blog-header-foreground transition-colors underline underline-offset-2"
          >
            Admin
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-blog-header-foreground/10 flex items-center justify-center hover:bg-blog-header-foreground/20 transition-colors">
            <Search className="w-4 h-4 text-blog-header-foreground" />
          </button>
          <Button 
            variant="outline" 
            size="sm"
            className="rounded-full border-blog-header-foreground/30 text-blog-header-foreground bg-transparent hover:bg-blog-header-foreground/10"
          >
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}
