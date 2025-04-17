import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from './config/portfolio';

const iconMap = {
  Github,
  Linkedin,
  Twitter,
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  const { name, title, about, avatar, contact, socials, skills, projects, experiences } = portfolioData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <motion.header 
        className="bg-white shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-8"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={avatar}
              alt={name}
              className="w-32 h-32 rounded-full object-cover shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <div className="text-center md:text-left">
              <motion.h1 
                className="text-4xl font-bold text-gray-900"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {name}
              </motion.h1>
              <motion.p 
                className="mt-2 text-xl text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {title}
              </motion.p>
              <motion.div 
                className="mt-4 flex gap-4 justify-center md:justify-start"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {socials.map((social) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap];
                  return (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      variants={fadeIn}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </motion.div>
              <motion.div 
                className="mt-4 flex gap-6 text-gray-600 justify-center md:justify-start"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <motion.a 
                  href={`mailto:${contact.email}`} 
                  className="flex items-center gap-2 hover:text-gray-900 transition-colors"
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail size={18} />
                  {contact.email}
                </motion.a>
                <motion.div 
                  className="flex items-center gap-2"
                  variants={fadeIn}
                >
                  <MapPin size={18} />
                  {contact.location}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8"
            variants={fadeIn}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {about}
          </motion.p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8"
            variants={fadeIn}
          >
            Skills
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <motion.span
                      key={item}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8"
            variants={fadeIn}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <motion.img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div 
                    className="mt-4 flex gap-4"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                        whileHover={{ scale: 1.05 }}
                        variants={fadeIn}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                        whileHover={{ scale: 1.05 }}
                        variants={fadeIn}
                      >
                        <Github size={18} />
                        Code
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8"
            variants={fadeIn}
          >
            Experience
          </motion.h2>
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {experiences.map((experience) => (
              <motion.div
                key={experience.company}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{experience.position}</h3>
                    <p className="text-gray-600">{experience.company}</p>
                  </div>
                  <p className="text-gray-500 mt-2 md:mt-0">{experience.duration}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {experience.description.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="bg-white border-t border-gray-200 py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;