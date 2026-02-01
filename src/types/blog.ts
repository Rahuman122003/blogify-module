export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  content: BlogContent[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  author?: string;
  readingTime?: string;
}

export type BlogContentType = 'paragraph' | 'heading2' | 'heading3' | 'image';

export interface BlogContent {
  id: string;
  type: BlogContentType;
  content: string;
  alt?: string; // For images
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
}
