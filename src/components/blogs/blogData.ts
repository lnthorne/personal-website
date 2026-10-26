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
    id: 3,
    slug: "building-novus",
    title: "Building Novus, the AI Agent Behind Spade",
    header:
      "How a project-planning assistant turned into one of the most interesting backend systems I built.",
    published: "October 2026",
    readTime: "12 min read",
    markdownPath: "/blogs/building-novus/building-novus.md",
  },
  {
    id: 2,
    slug: "spade-the-platform-behind-the-product",
    title: "Spade, The Platform Behind the Product",
    header:
      "An architectural retrospective of the platform I designed, built, and operated as Spade's sole technical founder.",
    published: "October 2026",
    readTime: "11 min read",
    markdownPath:
      "/blogs/spade-the-platform-behind-the-product/spade-the-platform-behind-the-product.md",
  },
  {
    id: 1,
    slug: "the-one-problem-we-couldnt-solve-at-spade",
    title: "The One Problem We Couldn't Solve at Spade",
    header:
      "Lessons on demand, distribution, and the cold-start problem from building a home-services marketplace.",
    published: "September 2026",
    readTime: "10 min read",
    markdownPath:
      "/blogs/the-one-problem-we-couldnt-solve/the-one-problem-we-couldnt-solve-at-spade-v2.md",
  },
];

export const getBlogPostById = (id?: number) =>
  blogPosts.find((post) => post.id === id);

export const getBlogPostBySlug = (slug?: string) =>
  blogPosts.find((post) => post.slug === slug);
