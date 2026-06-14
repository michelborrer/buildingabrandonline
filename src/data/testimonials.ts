export interface Testimonial {
  initials: string;
  quote: string;
  avatar: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    initials: "Jane's Boutique",
    quote: "Jane successfully launched her online store within three months, increasing her sales by 150%. Her story exemplifies how our training modules empower entrepreneurs to achieve rapid growth and build sustainable brands.",
    avatar: '/images/avatars/avatar-jane.jpg',
    name: 'Jane Doe',
    role: "E-commerce Entrepreneur, Jane's Boutique",
  },
  {
    initials: 'SC',
    quote: "John's digital marketing journey led to a 200% increase in client engagement and a thriving consulting business. His success underscores the effectiveness of our comprehensive training and community support.",
    avatar: '/images/avatars/avatar-john.jpg',
    name: 'John Smith',
    role: 'Digital Marketer, Smith Consulting',
  },
];
