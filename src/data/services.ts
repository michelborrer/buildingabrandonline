export interface Service {
  title: string;
  description: string;
  details: string[];
  image: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: 'Branding Strategy Development',
    description:
      'A focused engagement that ends with a brand strategy you can actually execute: who you serve, why they should pick you, and how to say it everywhere.',
    details: [
      'Positioning workshop and competitor teardown',
      'Messaging guide: value proposition, taglines, and tone of voice',
      '90-day rollout plan for your website, content, and social channels',
    ],
    image: '/images/services/service-strategy.jpg',
    icon: 'strategy',
  },
  {
    title: 'AI-Powered Branding Tools',
    description:
      'Free, browser-based tools that take the blank-page pain out of naming and messaging. Generate options in seconds, then refine the best ones.',
    details: [
      'AI brand name generator with domain-friendly suggestions',
      'AI slogan generator tuned for taglines, not word salad',
      'No signup required — use them as often as you like',
    ],
    image: '/images/services/service-ai.jpg',
    icon: 'ai',
  },
  {
    title: 'Branding Courses & Guides',
    description:
      'Self-paced courses covering SEO, email, content, and social — the same material we use with strategy clients, at a fraction of the cost.',
    details: [
      'Four core courses from beginner to advanced',
      'Templates and worksheets included with every module',
      'Lifetime access with free updates when tactics change',
    ],
    image: '/images/services/service-courses.jpg',
    icon: 'courses',
  },
  {
    title: 'Collaborative Brand Workshops',
    description:
      "Half-day or full-day working sessions for teams that need everyone rowing in the same direction before a launch, rebrand, or new campaign.",
    details: [
      'Live facilitation, remote or on-site',
      'Core values and unique selling proposition, agreed in the room',
      'Written summary and action list delivered within 48 hours',
    ],
    image: '/images/services/service-workshops.jpg',
    icon: 'workshops',
  },
];
