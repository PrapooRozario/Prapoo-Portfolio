import About from "@/components/About";
import Header from "../components/Header";
import Skills from "@/components/Skills";
import MyProjects from "@/components/MyProjects";
import Educations from "@/components/Educations";
import Contact from "@/components/Contact";
import { Toaster } from "@/components/ui/toaster";
import * as Lenis from "@studio-freight/lenis";

const Home = () => {
const lenis = new Lenis.default({duration: 2});
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  return (
    <div>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <MyProjects></MyProjects>
      <Educations></Educations>
      <Contact></Contact>
      <Toaster></Toaster>
    </div>
  );
};

export default Home;
