import Hero from "@/components/Hero";
import Visionary from "@/components/Visionary";
import Expertise from "@/components/Expertise";
import Standard from "@/components/Standard";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full bg-background min-h-screen">
      <Hero />
      <Visionary />
      <Expertise />
      <Standard />
      <Portfolio />
      <Contact />
    </main>
  );
}
