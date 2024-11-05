import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import profileImage from '../assets/venky.jpg';

const timeline = [
  {
    year: "2023",
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    description: "Leading development of cloud-native applications and mentoring junior developers.",
    icon: Briefcase
  },
  {
    year: "2021",
    title: "Software Engineer",
    company: "Digital Solutions Ltd.",
    description: "Developed scalable microservices and modern web applications.",
    icon: Award
  },
  {
    year: "2019",
    title: "Computer Science, MSc",
    company: "Tech University",
    description: "Specialized in Artificial Intelligence and Machine Learning.",
    icon: GraduationCap
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

const cardVariants = {
  hover: {
    y: -5,
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    transition: { duration: 0.3 }
  }
};

const iconVariants = {
  hover: {
    scale: 1.2,
    transition: { duration: 0.3 }
  }
};

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="about">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div 
              className="relative overflow-hidden rounded-lg max-w-sm mx-auto"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.img 
                src={profileImage}
                alt="Profile" 
                className="w-full object-cover aspect-[3/4]"
                variants={imageVariants}
              />
              <motion.div 
                className="absolute inset-0 bg-blue-600 dark:bg-blue-500 opacity-10"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                variants={itemVariants}
              >
                Quick Bio
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-400 leading-relaxed"
                variants={itemVariants}
              >
                A cybersecurity specialist with four years of experience and a Master’s in Cybersecurity in progress. Skilled in penetration testing and cloud security, I focus on safeguarding applications and systems. Explore my work and skills here!
              </motion.p>
            </motion.div>
          </motion.div>

          <div ref={ref} className="relative">
            <motion.div 
              className="absolute top-0 bottom-0 left-8 w-0.5 bg-blue-600 dark:bg-blue-500"
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-16 pb-12 last:pb-0"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              >
                <motion.div 
                  className="absolute left-0 w-16 h-16 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.span 
                    className="text-blue-600 dark:text-blue-500 font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {item.year}
                  </motion.span>
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 dark:text-white mt-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-400 mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                  >
                    {item.company}
                  </motion.p>
                  <motion.p 
                    className="text-gray-500 dark:text-gray-500 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}