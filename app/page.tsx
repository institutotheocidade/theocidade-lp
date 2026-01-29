import { Hero } from "@/components/sections/Hero";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { RectorWord } from "@/components/sections/RectorWord";
import { FacultyTeaser } from "@/components/sections/FacultyTeaser";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <WhyChoose />

      <FeaturedCourses />

      <RectorWord />

      <FacultyTeaser />

      <BlogTeaser />

      <Newsletter />
    </div>
  );
}
