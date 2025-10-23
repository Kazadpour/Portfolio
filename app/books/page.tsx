import Books from "@/components/Books";
import AmbientLights from "@/components/AmbientLights";
import Footer from "@/components/Footer";

export default function BooksPage() {
  return (
    <main className="relative pt-24">
      <AmbientLights />
      <Books />
      <Footer />
    </main>
  );
}
