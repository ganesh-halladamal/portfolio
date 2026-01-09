import AboutDemo from "@/components/ui/about-demo";
import AboutFeatures from "@/components/ui/about-features";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { ExperienceSection } from "@/components/ui/experience-section";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-40 sm:pt-48 pb-20">
      {/* About Demo Section */}
      <div className="mb-16">
        <AboutDemo />
      </div>

      {/* Tech Stack Grid Section */}
      <div className="mb-16 px-4">
        <section className="relative mx-auto grid max-w-5xl">
          <h2 className="mb-8 text-center font-semibold text-2xl text-slate-700 dark:text-slate-200 tracking-tight md:text-3xl">
            Tech Stack & Skills
          </h2>
          <LogoCloud />
        </section>
      </div>

      {/* Experience Section */}
      <div className="mb-32">
        <ExperienceSection />
      </div>

      {/* About Features Section */}
      <div className="mb-20">
        <AboutFeatures />
      </div>
    </main>
  );
}
