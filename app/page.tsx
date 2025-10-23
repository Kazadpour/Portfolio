import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import GetToKnowMe from "@/components/GetToKnowMe";
import WorkTogether from "@/components/WorkTogether";
import Footer from "@/components/Footer";
import AmbientLights from "@/components/AmbientLights";

export default function Home() {
  return (
    <main className="relative">
      <AmbientLights />
      <div id="hero">
        <Hero />
      </div>
      <div id="selected-works">
        <SelectedWorks />
      </div>
      <div id="get-to-know-me">
        <GetToKnowMe />
      </div>
      <div id="work-together">
        <WorkTogether />
        <Footer />
      </div>
    </main>
  );
}
