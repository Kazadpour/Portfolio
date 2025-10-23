import About from "@/components/About";
import AmbientLights from "@/components/AmbientLights";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="relative pt-24">
      <AmbientLights />
      <About />
      <Footer />
    </main>
  );
}
