import TechStack from "@/components/TechStack";
import AmbientLights from "@/components/AmbientLights";
import Footer from "@/components/Footer";

export default function TechStackPage() {
  return (
    <main className="relative pt-24">
      <AmbientLights />
      <TechStack />
      <Footer />
    </main>
  );
}
