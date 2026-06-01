import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight"
            variants={fadeUp}
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Nethusara</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-400 font-medium"
            variants={fadeUp}
          >
            Full-Stack Developer · CS Graduate · Based in Colombo
          </motion.p>
          
          <motion.p 
            className="text-lg text-slate-400 max-w-2xl leading-relaxed"
            variants={fadeUp}
          >
            I build exceptional and accessible digital experiences for the web. 
            Currently looking for a software engineering internship where I can 
            contribute to meaningful projects.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            variants={fadeUp}
          >
            <a 
              href="#projects" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/30"
            >
              View My Work
            </a>
            <a 
              href="/cv.pdf" 
              download="cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors border border-slate-700"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
