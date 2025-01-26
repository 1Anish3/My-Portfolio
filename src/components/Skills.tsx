import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Brain, Layout } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['Java', 'Python', 'C', 'C++', 'JavaScript', 'SQL', 'PowerBI'],
  },
  {
    title: 'Technologies',
    icon: <Database className="w-6 h-6" />,
    skills: [
      'React.js',
      'HTML5',
      'CSS3',
      'Spring Boot',
      'REST APIs',
      'MongoDB',
      'MySQL',
      'Flask',
      'TensorFlow',
      'Scikit-learn',
      'Tableau',
    ],
  },
  {
    title: 'Core Skills',
    icon: <Brain className="w-6 h-6" />,
    skills: [
      'AI',
      'ML',
      'Deep Learning',
      'Data Science',
      'Web Development',
      'Statistical Modeling',
    ],
  },
];

const Skills = () => {
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
          Skills
        </motion.h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-primary-300 hover:bg-primary-500/20 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;