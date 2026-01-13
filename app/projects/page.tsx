import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/sections/projects/card";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Projects",
  description:
    "Explore Ganesh Halladamal's portfolio of web development projects including DevTinder, AI-Powered Travel Advisor, Smart Attendance Management, and more. Built with React, Next.js, Node.js, and modern technologies.",
  url: "/projects",
  keywords: [
    "projects",
    "portfolio projects",
    "web applications",
    "react projects",
    "next.js projects",
    "full stack projects",
    "DevTinder",
    "AI Travel Advisor",
  ],
});

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-40 sm:pt-48 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
