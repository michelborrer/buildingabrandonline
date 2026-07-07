export interface Course {
  title: string;
  description: string;
  image: string;
}

export const courses: Course[] = [
  {
    title: 'SEO Fundamentals',
    description: 'Learn how search engines actually decide who ranks, then apply it: keyword research, on-page basics, and the technical checks that matter.',
    image: '/images/courses/course-seo.jpg',
  },
  {
    title: 'Social Media That Converts',
    description: 'Stop posting into the void. Build a repeatable content system for the one or two platforms where your audience actually spends time.',
    image: '/images/courses/course-social.jpg',
  },
  {
    title: 'Email Marketing Mastery',
    description: 'Grow a list you own, write emails people open, and set up the automations that quietly sell while you work on everything else.',
    image: '/images/courses/course-email.jpg',
  },
  {
    title: 'Content Strategy Blueprint',
    description: 'Plan six months of content in one sitting. Map topics to what your audience searches for, so every post pulls its weight.',
    image: '/images/courses/course-content.jpg',
  },
];
