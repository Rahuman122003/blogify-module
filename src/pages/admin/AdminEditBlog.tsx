import { useParams, useNavigate } from 'react-router-dom';
import { useBlog } from '@/contexts/BlogContext';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { BlogEditor } from '@/components/admin/BlogEditor';
import { toast } from 'sonner';

export default function AdminEditBlog() {
  const { id } = useParams<{ id: string }>();
  const { getBlogById, updateBlog } = useBlog();
  const navigate = useNavigate();

  const blog = getBlogById(id || '');

  if (!blog) {
    return (
      <AdminLayout>
        <div className="text-center py-16">
          <h1 className="font-serif text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground">The post you're looking for doesn't exist.</p>
        </div>
      </AdminLayout>
    );
  }

  const handleSave = (data: Parameters<typeof updateBlog>[1]) => {
    updateBlog(blog.id, data);
    toast.success('Post updated successfully!');
    navigate('/admin/dashboard');
  };

  return (
    <AdminLayout>
      <div className="fade-in">
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-foreground">Edit Post</h1>
          <p className="text-muted-foreground mt-1">Update your blog post</p>
        </div>
        <BlogEditor initialData={blog} onSave={handleSave} />
      </div>
    </AdminLayout>
  );
}
