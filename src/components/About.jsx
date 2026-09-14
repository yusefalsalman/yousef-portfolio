import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Sparkles } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      title: "Frontend Engineering",
      desc: "React.js, Tailwind CSS, modern state management & responsive UI",
    },
    {
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      title: "Backend Architecture",
      desc: "ASP.NET Core Web APIs, C#, Clean Architecture & Swagger documentation",
    },
    {
      icon: <Database className="w-5 h-5 text-purple-500" />,
      title: "Database Design",
      desc: "Microsoft SQL Server, Entity Framework Core, schema modeling & queries",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="badge-pill">
            ABOUT ME
          </span>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal text-center max-w-3xl mx-auto">
            I am a software developer dedicated to building end to end, high performance web
            applications. Bridging modern user interfaces with robust backend architecture, I
            specialize in <span className="font-semibold text-blue-600 dark:text-blue-400">React.js</span>,{' '}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">Tailwind CSS</span>, and{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">ASP.NET Core Web APIs</span>.
            From designing intuitive, pixel perfect frontend experiences to engineering clean
            database structures and RESTful services with <span className="font-semibold text-red-500">SQL Server</span>,
            I focus on delivering scalable, reliable software that solves real problems.
          </p>
        </motion.div>

        {/* Key Competency Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left"
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="card-container p-5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

