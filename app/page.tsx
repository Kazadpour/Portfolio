import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import GetToKnowMe from "@/components/GetToKnowMe";
import WorkTogether from "@/components/WorkTogether";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <SelectedWorks />
      <GetToKnowMe />
      <WorkTogether />
      <Footer />
    </main>
  );
}
