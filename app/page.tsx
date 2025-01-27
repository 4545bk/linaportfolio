import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Payment from "@/components/Payment";


 
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
       <Intro />
      <SectionDivider />
      <Projects />

      <Skills />
      <Experience />
      <About />
      <Payment/>
      <Contact />
     </main>
  );
}
