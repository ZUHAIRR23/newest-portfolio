import Navbar from "@/components/Layout/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import TechStack from "@/components/TechStack/TechStack";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import SpinningCard from "@/components/SpinningCard/SpinningCard";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <Hero />
      <SpinningCard />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
