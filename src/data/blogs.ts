import Blog1 from "../assets/blog.jpeg";

export interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  cover_image: string;
  created_at: string;
  updated_at: string;
  language: string;
}

export const blogs: Blog[] = [
  {
    id: 5,
    title: "Understanding Medical Tourism",
    content:
      "Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.Medical tourism has become an increasingly popular option for patients seeking affordable healthcare abroad.v",
    author: "Aaqil Shaikh",
    cover_image: Blog1,
    created_at: "2026-07-29",
    updated_at: "2026-07-29",
    language: "en",
  },
  {
    id: 4,
    title: "Top 5 Cardiac Procedures",
    content:
      "Heart disease remains one of the leading causes of death worldwide. Learn about the most common procedures.",
    author: "Aaqil Shaikh",
    cover_image: Blog1,
    created_at: "2026-07-28",
    updated_at: "2026-07-28",
    language: "en",
  },
  {
    id: 3,
    title: "Robotic Surgery Benefits",
    content:
      "Robotic surgery allows surgeons to perform minimally invasive procedures with greater precision.",
    author: "Aaqil Shaikh",
    cover_image: Blog1,
    created_at: "2026-07-27",
    updated_at: "2026-07-27",
    language: "en",
  },
  {
    id: 2,
    title: "Preparing for Medical Journey",
    content:
      "Traveling abroad for treatment requires planning. Here are the important things to prepare before departure.",
    author: "Aaqil Shaikh",
    cover_image: Blog1,
    created_at: "2026-07-26",
    updated_at: "2026-07-26",
    language: "en",
  },
];
