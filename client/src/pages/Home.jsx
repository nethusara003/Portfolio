import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Blog />
      <Contact />
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>Built with React + Node.js · Deployed on Vercel + Render</p>
        <p className="mt-2">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
