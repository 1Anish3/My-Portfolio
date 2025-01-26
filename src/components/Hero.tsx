import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Brain, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-32 pb-20 relative z-10"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="w-32 h-32 mb-8 relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Brain className="w-full h-full text-primary-300" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">
              Anish Sarkar
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 h-20 mb-8">
            <TypeAnimation
              sequence={[
                "AI Enthusiast",
                2000,
                "Full-Stack Developer",
                2000,
                "Machine Learning Engineer",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <div className="flex gap-4 mb-12">
            <motion.a
              href="https://github.com/1Anish3"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/i-am-anish-sarkar/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href="mailto:sarkaranish295@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Mail className="w-6 h-6 text-white" />
            </motion.a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-shadow"
            >
              <a
                href="https://drive.google.com/file/d/137dirOBDeFC0nkJiPgfWrd62WbClCY-P/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-secondary-500 to-secondary-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-secondary-500/50 transition-shadow"
            >
              <a
                href="https://github.com/1Anish3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Github Projects
              </a>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
