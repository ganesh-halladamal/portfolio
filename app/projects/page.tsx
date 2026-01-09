import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/project-card";

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
