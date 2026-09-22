export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  header: string;
  published: string;
  readTime: string;
  markdownPath: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "shipping-small-learning-fast",
    title: "Shipping Small, Learning Fast",
    header: "A practical rhythm for turning side-project ideas into momentum.",
    published: "January 2025",
    readTime: "4 min read",
    markdownPath: "/blogs/shipping-small-learning-fast.md",
  },
  {
    id: 2,
    slug: "offline-first-is-a-product-decision",
    title: "Offline-First Is a Product Decision",
    header:
      "Reliable software respects the environments where people actually work.",
    published: "December 2024",
    readTime: "5 min read",
    markdownPath: "/blogs/offline-first-is-a-product-decision.md",
  },
  {
    id: 3,
    slug: "interfaces-should-explain-themselves",
    title: "Interfaces Should Explain Themselves",
    header:
      "How small interaction cues help people move through complex systems.",
    published: "November 2024",
    readTime: "3 min read",
    markdownPath: "/blogs/interfaces-should-explain-themselves.md",
  },
];

export const getBlogPostById = (id?: number) =>
  blogPosts.find((post) => post.id === id);

export const getBlogPostBySlug = (slug?: string) =>
  blogPosts.find((post) => post.slug === slug);
