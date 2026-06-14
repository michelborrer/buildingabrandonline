export interface BlogPost {
  title: string;
  category: string;
  excerpt: string;
  image: string;
  slug: string;
  pubDate: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'SEO for Beginners: A Step-by-Step Guide to Ranking Higher on Google',
    category: 'SEO',
    excerpt: 'Get started with SEO and learn how to improve your website\'s ranking on Google with...',
    image: '/images/blog/blog-seo.jpg',
    slug: 'seo-for-beginners-a-step-by-step-guide-to-ranking-higher-on-google',
    pubDate: '2026-02-16',
  },
  {
    title: 'Email Marketing Mastery: Tips and Tricks for Higher Open Rates',
    category: 'Email Marketing',
    excerpt: 'Unlock the secrets to email marketing success with our expert tips and tricks for achieving...',
    image: '/images/blog/blog-email.jpg',
    slug: 'email-marketing-mastery-tips-and-tricks-for-higher-open-rates',
    pubDate: '2026-02-10',
  },
  {
    title: "Boost Your Brand with Influencer Marketing: A Beginner's Guide",
    category: 'Influencer Marketing',
    excerpt: 'Discover how influencer marketing can elevate your brand and reach new audiences with our beginner-friendly...',
    image: '/images/blog/blog-influencer.jpg',
    slug: 'boost-your-brand-with-influencer-marketing-a-beginners-guide',
    pubDate: '2026-02-05',
  },
];
