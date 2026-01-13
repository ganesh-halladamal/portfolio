import { AboutIntro } from "@/components/sections/about/intro";
import { AboutExpertise } from "@/components/sections/about/expertise";
import { AboutSkills } from "@/components/sections/about/skills";
import { AboutExperience } from "@/components/sections/about/experience";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "About Me",
  description:
    "Learn more about Ganesh Halladamal - Full Stack Developer with expertise in React, Next.js, Node.js, MongoDB, and modern web technologies. Discover my skills, experience, and passion for building innovative web applications.",
  url: "/about",
  keywords: [
    "about",
    "skills",
    "experience",
    "expertise",
    "tech stack",
    "web development skills",
    "full stack skills",
  ],
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-40 sm:pt-48 pb-20">
      {/* About Intro Section */}
      <div className="mb-16">
        <AboutIntro />
      </div>

      {/* Tech Stack Grid Section */}
      <div className="mb-16 px-4">
        <section className="relative mx-auto grid max-w-5xl">
          <h2 className="mb-8 text-center font-semibold text-2xl text-slate-700 dark:text-slate-200 tracking-tight md:text-3xl">
            Tech Stack & Skills
          </h2>
          <AboutSkills />
        </section>
      </div>

      {/* Experience Section */}
      <div className="mb-32">
        <AboutExperience />
      </div>

      {/* About Expertise Section */}
      <div className="mb-20">
        <AboutExpertise />
      </div>
    </main>
  );
}
