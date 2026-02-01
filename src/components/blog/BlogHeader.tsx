import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function BlogHeader() {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/blogs" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-foreground text-lg leading-tight">
              <span className="text-primary">Probiz</span> Connect
            </span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
              Digitise. Automate. Optimise
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/blogs"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Blogs
          </Link>
        </nav>

        {/* Admin Button */}
        <Link to="/admin">
          <Button 
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6"
          >
            Admin
          </Button>
        </Link>
      </div>
    </header>
  );
}
