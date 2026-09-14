import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillsList = [
    {
      name: 'C++',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
    },
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      name: 'Redux',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    },
    {
      name: 'Material UI',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg',
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      darkInvert: true,
    },
    {
      name: 'C#',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    },
    {
      name: 'SQL Server',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg',
    },
    {
      name: '.NET Core',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
    },
    {
      name: 'Swagger',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg',
    },
    {
      name: 'Postman',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <span className="badge-pill">
            Skills
          </span>
        </motion.div>

        {/* Skills Icon Cloud / Grid matching photo */}
        {/* Skills Grid / Cloud perfectly centered and aligned */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-4 sm:grid-cols-4 md:flex md:flex-wrap items-center justify-center justify-items-center gap-y-7 gap-x-2 sm:gap-6 md:gap-8 max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-4xl mx-auto"
        >
          {skillsList.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.18, y: -6 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-300 cursor-pointer w-20 sm:w-22 md:w-24 text-center"
            >
              {/* Subtle background glow circle on hover */}
              <div className="absolute inset-0 rounded-2xl bg-blue-500/0 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-500/20 blur-md transition-all duration-300 -z-10" />

              {/* Icon Container */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center p-1 transition-transform duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  loading="lazy"
                  className={`w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300 ${
                    skill.darkInvert ? 'dark:brightness-0 dark:invert' : ''
                  }`}
                />
              </div>

              {/* Tooltip Label */}
              <span className="mt-2 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 opacity-85 group-hover:opacity-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Divider Line */}
      <div className="max-w-4xl mx-auto mt-20 px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent" />
      </div>
    </section>
  );
}

