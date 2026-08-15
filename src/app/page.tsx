import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ThreeWorlds } from "@/components/ThreeWorlds";
import { OurStory } from "@/components/OurStory";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent">
      <Header />
      <main className="flex flex-1 flex-col justify-start">
        <Hero />
        <ThreeWorlds />
        <OurStory />
      </main>
      <Footer />
    </div>
  );
}
