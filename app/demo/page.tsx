import AboutFeatures from "@/components/ui/about-features";
import AboutDemo from "@/components/ui/about-demo";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      {/* About Demo Section */}
      <div className="mb-32">
        <AboutDemo />
      </div>

      {/* About Features Section */}
      <div className="mb-20">
        <AboutFeatures />
      </div>
    </main>
  );
}
