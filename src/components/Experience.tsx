import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'AI Intern',
    company: 'TechSaksham',
    description: 'Delivered 3 transformative AI solutions through Microsoft and SAP\'s TechSaksham initiative.',
    link: 'https://drive.google.com/file/d/1COc2br0b5NnJTi1q5tvZBHQYVZPISz9C/view?usp=sharing',
  },
  {
    title: 'Data Analytics Intern',
    company: 'AWS',
    description: 'Processed 5+ large datasets and leveraged AWS tools to extract actionable insights.',
    link: 'https://drive.google.com/file/d/1a6yUvpRp2W6LdZy7sfYtahMvupPDmAVY/view?usp=sharing',
  },
  {
    title: 'AI-ML Intern',
    company: 'Google',
    description: 'Built and deployed 4 machine learning models using TensorFlow and Scikit-learn for real-world applications.',
    link: 'https://drive.google.com/file/d/1alBYXyTQTqmrhjhrt60808rybJ-HrT4I/view?usp=sharing',
  },
  {
    title: 'Intern',
    company: 'MathWorks',
    description: 'Conducted 10+ MATLAB simulations to optimize data models and build AI-driven solutions.',
    link: 'https://drive.google.com/file/d/1T0GcXR8t1Dt3RY1Nst_8HxTptVDP-5w0/view?usp=sharing',
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text"
        >
          Experience
        </motion.h2>

        <div ref={ref} className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:shadow-lg hover:shadow-primary-500/10 transition-shadow">
                    <h3 className="text-xl font-semibold text-primary-400">{exp.title}</h3>
                    <h4 className="text-lg text-secondary-400 mb-2">{exp.company}</h4>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <a
                      href={exp.link}
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
                <div className="relative flex items-center justify-center w-8">
                  <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;