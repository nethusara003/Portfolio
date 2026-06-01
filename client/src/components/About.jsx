import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 text-slate-400 leading-relaxed"
          >
            <p>
              I am a final-year Computer Science undergraduate passionate about building scalable web applications and intuitive user interfaces.
            </p>
            <p>
              My final year project focuses on AI-driven financial insights, where I'm combining modern frontend development with intelligent backend services.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or writing technical articles on my blog.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <h3 className="text-xl font-heading font-bold text-white mb-6">Education</h3>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-blue-500/30">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <h4 className="font-bold text-slate-200">BSc (Hons) Computer Science</h4>
                <p className="text-sm text-blue-400 mb-1">University of Colombo School of Computing</p>
                <p className="text-sm text-slate-500">2021 — Expected 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
