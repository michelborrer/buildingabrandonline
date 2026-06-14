export interface Course {
  title: string;
  description: string;
  image: string;
}

export const courses: Course[] = [
  {
    title: 'SEO Fundamentals Course',
    description: "Master the basics of SEO to improve your website's ranking and drive organic traffic. Start building your online presence today.",
    image: '/images/courses/course-seo.jpg',
  },
  {
    title: 'Social Media Domination',
    description: 'Learn how to create engaging content and build a strong social media presence. Connect with your audience effectively.',
    image: '/images/courses/course-social.jpg',
  },
  {
    title: 'Email Marketing Mastery',
    description: 'Craft compelling email campaigns that convert subscribers into loyal customers. Boost your sales with targeted email strategies.',
    image: '/images/courses/course-email.jpg',
  },
  {
    title: 'Content Strategy Blueprint',
    description: 'Develop a content strategy that attracts, engages, and converts your target audience. Create valuable content that resonates.',
    image: '/images/courses/course-content.jpg',
  },
];
