export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  service: string;
}