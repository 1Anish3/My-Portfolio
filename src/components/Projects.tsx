import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Database, GitBranch, PenTool as Tool } from "lucide-react";

const projects = [
  {
    title: "Leakage Detection in Smart Water Distribution Systems",
    tools: ["Keras", "TensorFlow", "Scikit-learn"],
    link: "https://github.com/1Anish3/Leak-Detection-in-Smart-Water-Distribution-System-Using-ANNs/tree/main",
    image:
      "https://cdn.ai-forall.com/ifa_dev_media/Water_Leak_Detection_with_Io_T_Based_Solutions_023ad65a1d.jpg",
  },
  {
    title: "IPL Winning Team Prediction Model",
    tools: ["Python", "Machine Learning", "Streamlit"],
    link: "https://github.com/1Anish3/IPL-match-winning-team-prediction-model",
    image:
      "https://m.economictimes.com/thumb/height-450,width-600,imgsize-81594,msid-98144302/ipl-2023.jpg",
  },
  {
    title: "Instagram Reach Analysis",
    tools: ["Python", "scikit-learn", "Streamlit"],
    link: "https://github.com/1Anish3/Instagram-Reach-Analysis",
    image:
      "https://i.pinimg.com/736x/05/c8/f5/05c8f5fc36d262d9ace0b2b922852465.jpg",
  },
  {
    title: "Predictive Analysis for Manufacturing Operations",
    tools: ["Python", "Flask", "Scikit-learn"],
    link: "https://github.com/1Anish3/Predictive-Analysis-for-Manufacturing-Operations",
    image:
      "https://www.apexon.com/wp-content/uploads/2022/12/predictive-analytics-in-manufacturing.png",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text"
        >
          Projects
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm group-hover:transform group-hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-primary-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <Tool className="w-5 h-5 text-primary-400" />
                    <Database className="w-5 h-5 text-primary-400" />
                    <GitBranch className="w-5 h-5 text-primary-400" />
                  </div>
                  <a
                    href={project.link}
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
