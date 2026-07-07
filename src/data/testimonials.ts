export interface Testimonial {
  quote: string;
  avatar: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I'd been posting for two years with nothing to show for it. The Content Strategy Blueprint made me delete half my topic list and double down on what people were actually searching for. Three months later my little boutique gets more orders from Google than from Instagram.",
    avatar: '/images/avatars/avatar-jane.jpg',
    name: 'Marisol Vega',
    role: 'Owner, Vega & Thread Boutique',
  },
  {
    quote:
      "The email course paid for itself with one campaign. I set up the welcome sequence exactly as taught, and it now books two or three consulting calls a week without me touching it. I only wish I'd stopped treating my list as an afterthought sooner.",
    avatar: '/images/avatars/avatar-john.jpg',
    name: 'Darnell Okafor',
    role: 'Founder, Okafor Growth Consulting',
  },
];
