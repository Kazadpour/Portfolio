import Projects from "@/components/Projects";
import AmbientLights from "@/components/AmbientLights";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="relative pt-24">
      <AmbientLights />
      <Projects />
      <Footer />
    </main>
  );
}
