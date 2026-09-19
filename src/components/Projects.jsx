import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import todoImg from '../assets/projects/todo-preview.jpg';
import weatherImg from '../assets/projects/weather-preview.jpg';
import portfolioImg from '../assets/projects/portfolio-preview.jpg';
import bookingSysImg from '../assets/projects/bookingSys.jpg';

export default function Projects() {
  const projects = [
    {
      title: 'Booking System',
      description:
        'A comprehensive full-stack booking and reservation management web application built with React, Tailwind CSS, and ASP.NET Core with PostgreSQL. Features intuitive scheduling, real-time availability tracking, interactive reservation flows, and robust backend data persistence.',
      image: bookingSysImg,
      liveUrl: 'https://yousefbookingsystem.netlify.app/',
      githubUrl: 'https://github.com/yusefalsalman/Booking-System',
      tags: ['.NET Core', 'PostgreSQL', 'React', 'Tailwind CSS', 'Full Stack'],
    },
    {
      title: 'To-Do App',
      description:
        'A sophisticated productivity app built with React.js. It features full CRUD (Create, Read, Update, Delete) functionality and demonstrates Virtual DOM efficiency, optimal Context API usage, and persistent data handling for a seamless user workflow.',
      image: todoImg,
      liveUrl: 'https://todoappyousefsalman.netlify.app/',
      githubUrl: 'https://github.com/yusefalsalman/Todo-List-React',
      tags: ['React', 'JavaScript', 'Context API', 'CRUD', 'LocalStorage'],
    },
    {
      title: 'Weather App',
      description:
        'A robust React application utilizing Axios for optimized API calls. It implements the useEffect hook for lifecycle management and useState for handling global weather states. The app is structured with reusable components, ensuring a scalable and maintainable codebase.',
      image: weatherImg,
      liveUrl: 'https://weatherflyyousefsalman.netlify.app/',
      githubUrl: 'https://github.com/yusefalsalman/Weatherify',
      tags: ['React', 'Axios', 'REST API', 'Weather API', 'Responsive'],
    },
    {
      title: 'Portfolio Website',
      description:
        'A professional, production-ready portfolio website built using React and bundled with Vite to showcase full-stack and frontend applications. The platform features an optimized styling architecture with Tailwind CSS, Framer Motion animations, dark/light theme switching, and EmailJS.',
      image: portfolioImg,
      liveUrl: '#',
      githubUrl: 'https://github.com/yusefalsalman',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <span className="badge-pill">
            Projects
          </span>
        </motion.div>

        {/* Unified Project Grid (Tabs removed as requested) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="card-container overflow-hidden flex flex-col group border border-slate-200 dark:border-slate-800"
            >
              {/* Card Image Banner with Zoom & Overlay */}
              <div className="h-48 sm:h-52 w-full relative overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Hover Overlay with Action Buttons */}
                <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.liveUrl !== '#' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg hover:bg-blue-700 transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  ) : (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-3.5 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg hover:bg-blue-700 transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Current Site
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-full bg-slate-900/90 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg hover:bg-black transition border border-slate-700"
                  >
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-[#131d33] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Links Footer */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    {project.liveUrl !== '#' ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View Project</span>
                      </a>
                    ) : (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View Project</span>
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition hover:scale-110"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
