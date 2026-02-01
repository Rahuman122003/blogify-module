import { useNavigate } from 'react-router-dom';
import { useBlog } from '@/contexts/BlogContext';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { BlogEditor } from '@/components/admin/BlogEditor';
import { toast } from 'sonner';

export default function AdminNewBlog() {
  const { createBlog } = useBlog();
  const navigate = useNavigate();

  const handleSave = (data: Parameters<typeof createBlog>[0]) => {
    createBlog(data);
    toast.success('Post created successfully!');
    navigate('/admin/dashboard');
  };

  return (
    <AdminLayout>
      <div className="fade-in">
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-foreground">Create New Post</h1>
          <p className="text-muted-foreground mt-1">Write and publish a new blog post</p>
        </div>
        <BlogEditor onSave={handleSave} />
      </div>
    </AdminLayout>
  );
}
