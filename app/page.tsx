import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import { Sidebar } from "@/components/Sidebar";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ScrollProgress />
      <Sidebar />
      <main className="md:ml-20 lg:ml-24">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
