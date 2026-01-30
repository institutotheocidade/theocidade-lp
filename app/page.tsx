import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { Methodology } from "@/components/sections/Methodology";
import { SubjectsCarousel } from "@/components/sections/SubjectsCarousel";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { OtherOptions } from "@/components/sections/OtherOptions";
import { RectorWord } from "@/components/sections/RectorWord";
import { FacultyTeaser } from "@/components/sections/FacultyTeaser";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero with Headline */}
      <Hero />

      {/* 2. Introduction */}
      <Introduction />

      {/* 3. Methodology */}
      <Methodology />

      {/* 4. Subjects Carousel */}
      <SubjectsCarousel />

      {/* 5. Why Choose Theocidade? */}
      <WhyChoose />

      {/* 6. Bacharelado Highlight */}
      <FeaturedCourses />

      {/* 7. Other Options (EAD / Livres) */}
      <OtherOptions />

      {/* 8. Rector's Word */}
      <RectorWord />

      {/* 9. Mentors/Faculty */}
      <FacultyTeaser />

      {/* 10. Blog (Pensando a Fé) */}
      <BlogTeaser />

      {/* 11. FAQ */}
      <FAQ />
    </div>
  );
}
