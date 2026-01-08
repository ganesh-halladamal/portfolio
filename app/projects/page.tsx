export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Projects</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Here are some of my recent projects showcasing my skills and experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-3">Student Attendance Management System</h3>
            <p className="text-muted-foreground mb-4">
              A web-based system that automates student attendance tracking with PHP, MySQL, and Bootstrap.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">PHP</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">MySQL</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Bootstrap</span>
            </div>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-3">Portfolio Website</h3>
            <p className="text-muted-foreground mb-4">
              A modern, responsive portfolio built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tailwind</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
