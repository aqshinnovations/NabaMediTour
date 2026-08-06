import Testimonial1 from "../../../../assets/Testimony.jpeg";
import Testimonial2 from "../../../../assets/Testimony.jpeg";
import Testimonial3 from "../../../../assets/Testimony.jpeg";
import Testimonial4 from "../../../../assets/Testimony.jpeg";

export interface Testimonial {
  id: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    image: Testimonial1,
  },
  {
    id: 2,
    image: Testimonial2,
  },
  {
    id: 3,
    image: Testimonial3,
  },
  {
    id: 2,
    image: Testimonial2,
  },
  {
    id: 2,
    image: Testimonial2,
  },
  {
    id: 4,
    image: Testimonial4,
  },
];
