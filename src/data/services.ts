export interface Service {
  title: string;
  description: string;
  image: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: 'Branding Strategy Development',
    description: 'Craft a compelling brand strategy that resonates with your audience. We combine market research, positioning, and messaging to build a strong brand foundation.',
    image: '/images/services/service-strategy.jpg',
    icon: 'strategy',
  },
  {
    title: 'AI-Powered Branding Tools',
    description: 'Streamline your branding process with our cutting-edge AI tools. From logo creation to content generation, make branding faster, more efficient, and personalized.',
    image: '/images/services/service-ai.jpg',
    icon: 'ai',
  },
  {
    title: 'Branding Courses & Guides',
    description: 'Learn practical branding skills with our comprehensive courses and guides. From beginner to advanced levels, implement effective strategies and grow your brand confidently.',
    image: '/images/services/service-courses.jpg',
    icon: 'courses',
  },
  {
    title: 'Collaborative Brand Workshops',
    description: "Participate in interactive workshops to define your brand's core values and unique selling proposition. Perfect for teams seeking a unified brand vision.",
    image: '/images/services/service-workshops.jpg',
    icon: 'workshops',
  },
];
