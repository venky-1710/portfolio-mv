import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1964",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#"
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses and language translation",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=1780",
    tech: ["Next.js", "OpenAI", "WebSocket", "Redis"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates",
    image: "https://images.unsplash.com/photo-1584433305355-9cb73387fc24?q=80&w=1930",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    github: "#",
    live: "#"
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.4 }
  }
};

const linkVariants = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.6 }
  }
};

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="projects">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden group">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.a
                    href={project.github}
                    className="p-2 bg-white dark:bg-gray-800 rounded-full"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <Github className="w-6 h-6 text-gray-900 dark:text-white" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="p-2 bg-white dark:bg-gray-800 rounded-full"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <ExternalLink className="w-6 h-6 text-gray-900 dark:text-white" />
                  </motion.a>
                </motion.div>
              </div>

              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600 dark:bg-blue-500 text-sm rounded-full text-white"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}