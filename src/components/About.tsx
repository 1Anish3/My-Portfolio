import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Building2, Award, GraduationCap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin className="w-6 h-6 text-primary-400" />
              <span>Potheri village, Kattankulathur Nandivaram Guduvancheri</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <Mail className="w-6 h-6 text-primary-400" />
              <a href="mailto:sarkaranish295@gmail.com" className="hover:text-primary-400 transition-colors">
                sarkaranish295@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <Phone className="w-6 h-6 text-primary-400" />
              <span>9073350749</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <Building2 className="w-6 h-6 text-primary-400" />
              <span>SRM Institute of Science and Technology</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <GraduationCap className="w-6 h-6 text-primary-400" />
              <span>B.Tech in Computer Science (Data Science)</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <Award className="w-6 h-6 text-primary-400" />
              <span>CGPA: 9.24/10.0 | GPA: 3.7/4</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4 text-primary-400">Profile Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              Enthusiastic and results-driven student with a strong foundation in Artificial Intelligence, 
              Machine Learning, and Deep Learning, proficient in Python, JavaScript, and web technologies. 
              Experienced in data processing, problem-solving, and algorithm design, with a focus on developing 
              machine learning models and artificial intelligence solutions.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Proficient in Big Data and Not Only SQL databases, leveraging technical expertise to solve 
              complex challenges. Demonstrates exceptional analytical thinking, adaptability, and teamwork. 
              Passionate about utilizing artificial intelligence and machine learning techniques to drive 
              innovation and deliver impactful solutions.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;