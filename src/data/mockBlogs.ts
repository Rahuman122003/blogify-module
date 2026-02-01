import { BlogPost } from '@/types/blog';

export const mockBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Mindful Design: Creating Spaces That Breathe',
    slug: 'art-of-mindful-design',
    description: 'Exploring the principles of mindful design and how intentional spaces can transform our daily experiences and well-being.',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80',
    published: true,
    createdAt: new Date('2025-01-28'),
    updatedAt: new Date('2025-01-28'),
    author: 'Sarah Mitchell',
    readingTime: '6 min read',
    content: [
      {
        id: 'c1',
        type: 'paragraph',
        content: 'In our increasingly connected world, the spaces we inhabit have become more important than ever. Mindful design goes beyond aesthetics—it\'s about creating environments that support our mental health, productivity, and sense of peace.'
      },
      {
        id: 'c2',
        type: 'heading2',
        content: 'The Philosophy Behind Mindful Spaces'
      },
      {
        id: 'c3',
        type: 'paragraph',
        content: 'Mindful design draws from ancient principles of harmony and balance. It considers not just how a space looks, but how it feels, sounds, and even smells. Every element serves a purpose, contributing to an overall sense of tranquility and intention.'
      },
      {
        id: 'c4',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80',
        alt: 'A minimalist living space with natural light'
      },
      {
        id: 'c5',
        type: 'heading3',
        content: 'Natural Light as a Foundation'
      },
      {
        id: 'c6',
        type: 'paragraph',
        content: 'Light is perhaps the most powerful tool in mindful design. Natural light not only reduces energy consumption but has been proven to improve mood, sleep quality, and cognitive function. When designing a mindful space, consider how light moves through it throughout the day.'
      },
      {
        id: 'c7',
        type: 'heading2',
        content: 'Practical Steps to Transform Your Space'
      },
      {
        id: 'c8',
        type: 'paragraph',
        content: 'You don\'t need a complete renovation to incorporate mindful design principles. Start small: declutter one area, add a plant, or rearrange furniture to create better flow. These incremental changes can have a profound impact on how you experience your environment.'
      }
    ]
  },
  {
    id: '2',
    title: 'Digital Minimalism: Finding Focus in an Age of Distraction',
    slug: 'digital-minimalism-focus',
    description: 'How embracing digital minimalism can help reclaim your attention and lead to a more intentional relationship with technology.',
    coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80',
    published: true,
    createdAt: new Date('2025-01-25'),
    updatedAt: new Date('2025-01-25'),
    author: 'James Chen',
    readingTime: '8 min read',
    content: [
      {
        id: 'c1',
        type: 'paragraph',
        content: 'We check our phones an average of 150 times per day. Each notification, each scroll, fragments our attention into smaller and smaller pieces. Digital minimalism offers a path back to deep focus and meaningful engagement.'
      },
      {
        id: 'c2',
        type: 'heading2',
        content: 'What Is Digital Minimalism?'
      },
      {
        id: 'c3',
        type: 'paragraph',
        content: 'Digital minimalism is a philosophy of technology use in which you focus your online time on a small number of carefully selected activities that strongly support things you value, and then happily miss out on everything else.'
      },
      {
        id: 'c4',
        type: 'heading3',
        content: 'The Cost of Constant Connectivity'
      },
      {
        id: 'c5',
        type: 'paragraph',
        content: 'Research shows that even having your phone visible reduces cognitive capacity. The constant switching between tasks depletes mental energy and makes it harder to engage deeply with any single activity.'
      }
    ]
  },
  {
    id: '3',
    title: 'The Renaissance of Slow Living',
    slug: 'renaissance-slow-living',
    description: 'Rediscovering the joy of taking our time in a world obsessed with speed and efficiency.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80',
    published: true,
    createdAt: new Date('2025-01-20'),
    updatedAt: new Date('2025-01-20'),
    author: 'Emma Rodriguez',
    readingTime: '5 min read',
    content: [
      {
        id: 'c1',
        type: 'paragraph',
        content: 'The slow living movement isn\'t about doing everything at a snail\'s pace. It\'s about being present, making intentional choices, and savoring life\'s simple pleasures.'
      },
      {
        id: 'c2',
        type: 'heading2',
        content: 'Origins of the Slow Movement'
      },
      {
        id: 'c3',
        type: 'paragraph',
        content: 'What began as a protest against fast food in Italy has evolved into a global philosophy touching every aspect of life—from how we eat and travel to how we work and connect with others.'
      }
    ]
  },
  {
    id: '4',
    title: 'Building Sustainable Habits That Actually Stick',
    slug: 'sustainable-habits-stick',
    description: 'Science-backed strategies for creating lasting behavioral change without willpower burnout.',
    coverImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80',
    published: true,
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-01-15'),
    author: 'Dr. Michael Torres',
    readingTime: '10 min read',
    content: [
      {
        id: 'c1',
        type: 'paragraph',
        content: 'Most habit advice focuses on motivation and willpower—resources that are inherently limited. The key to lasting change lies in understanding how habits actually form in the brain.'
      },
      {
        id: 'c2',
        type: 'heading2',
        content: 'The Habit Loop Explained'
      },
      {
        id: 'c3',
        type: 'paragraph',
        content: 'Every habit consists of three components: a cue, a routine, and a reward. By understanding this loop, you can engineer new habits and modify existing ones with precision.'
      }
    ]
  }
];
