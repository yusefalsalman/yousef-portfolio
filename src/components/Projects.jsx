import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import bookingSysImg from '../assets/projects/bookingSys.jpg';
import NovaPay from '../assets/projects/NovaPay.jpg';
import wms from '../assets/projects/wms.jpg';

export default function Projects() {
  const projects = [
    {
      title: 'Warehouse Management System',
      description:
        'An ASP.NET Core Web API for warehouse operations on PostgreSQL. Stock transfers run as ACID transactions, are protected against concurrent updates, and are written to an audit trail. Role-based JWT authentication secures the API, which a React client uses for inventory and reporting.',
      image: wms,
      liveUrl: 'https://wms-solution.vercel.app',
      githubUrl: 'https://github.com/yusefalsalman/WMS_Solution',
      tags: ['ASP.NET Core', 'C#', 'PostgreSQL', 'Entity Framework Core', 'JWT', 'ACID Transactions']
    },
    {
      title: 'NovaPay – Digital Banking Platform',
      description:
        'A digital wallet API built with ASP.NET Core and PostgreSQL. Peer-to-peer transfers post to an immutable double-entry ledger inside ACID transactions, with optimistic concurrency control to prevent race conditions. JWT secures account access, and Stripe handles wallet top-ups.',
      image: NovaPay,
      liveUrl: 'https://nova-pay-rho.vercel.app/',
      githubUrl: 'https://github.com/yusefalsalman/NovaPay',
      tags: ['ASP.NET Core', 'C#', 'PostgreSQL', 'JWT', 'ACID Transactions', 'Concurrency']
    },
    {
      title: 'Booking System',
      description:
        'A hospitality booking API built with ASP.NET Core and SQL Server. It tracks room availability, reservations, and pricing through relational queries, and protects booking workflows with role-based access control.',
      image: bookingSysImg,
      liveUrl: 'https://yousefbookingsystem.netlify.app/',
      githubUrl: 'https://github.com/yusefalsalman/Booking-System',
      tags: ['ASP.NET Core', 'C#', 'SQL Server', 'REST API'],
    }
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

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md shadow-blue-500/20 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 hover:bg-black text-white text-sm font-semibold border border-slate-700 transition"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
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
