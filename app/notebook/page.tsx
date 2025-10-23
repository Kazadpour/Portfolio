import AmbientLights from "@/components/AmbientLights";
import Notebook from "@/components/Notebook";
import Footer from "@/components/Footer";

export default function NotebookPage() {
  return (
    <main className="relative pt-24">
      <AmbientLights />
      <Notebook />
      <Footer />
    </main>
  );
}
