import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Oracle Cloud Data Management Certified Foundations Associate",
    link: "https://drive.google.com/file/d/1EAyYdz6sS4Zi1dYitRoR_4w6H38LTclE/view?usp=sharing",
  },
  {
    title: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
    link: "https://drive.google.com/file/d/1JjJuDt7rRop8I16qW1IF6cm7OvWYIIB2/view?usp=sharing",
  },
  {
    title: "Oracle Cloud Infrastructure Certified Foundations Associate",
    link: "https://drive.google.com/file/d/1Yr8VGRmTE9noTcft2E5GHP-8Ds-Mmluv/view?usp=sharing",
  },
  {
    title: "Google Analytics Certification",
    link: "https://drive.google.com/file/d/1VtiMwDKyUrJK2Dc_HLsjrThECWqyMxtd/view?usp=sharing",
  },
];

const Certifications = () => {
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
          Certifications
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm group-hover:transform group-hover:-translate-y-2 transition-transform duration-300">
                <Award className="w-12 h-12 text-primary-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-4">
                  {cert.title}
                </h3>
                <a
                  href={cert.link}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
