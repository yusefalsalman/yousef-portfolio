import React from 'react';
import { motion } from 'framer-motion';

const backendSkills = [
  {
    name: 'C#',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  },
  {
    name: '.NET',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
  },
  {
    name: 'ASP.NET Core',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
  },
  {
    name: 'SQL Server',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg',
  },
  {
    name: 'Entity Framework Core',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/entityframeworkcore/entityframeworkcore-original.svg',
  },
  {
    name: 'Swagger / OpenAPI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg',
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
    name: 'Postman',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  },
];

const frontendSkills = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
];

function SkillTile({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl transition-transform duration-300 hover:scale-105 hover:-translate-y-1 text-center"
    >
      <div className="absolute inset-0 rounded-2xl bg-blue-500/0 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-500/20 blur-md transition-all duration-300 -z-10" />

      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center p-1">
        <img
          src={skill.icon}
          alt={skill.name}
          className={`w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300 ${
            skill.darkInvert ? 'dark:brightness-0 dark:invert' : ''
          }`}
        />
      </div>

      <span className="mt-2 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 opacity-85 group-hover:opacity-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight text-center">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <span className="badge-pill">Skills</span>
        </motion.div>

        <div className="text-center mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-100">
            Backend &amp; Core Engineering
          </h3>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6">
          {backendSkills.map((skill, idx) => (
            <SkillTile key={skill.name} skill={skill} index={idx} />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-slate-100 dark:bg-[#131d33] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
            xUnit
          </span>
        </div>

        <div className="mt-14 pt-10 border-t border-slate-200/80 dark:border-slate-800">
          <div className="text-center mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Frontend integration
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Foundational skills used to consume and present the APIs I build.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-6 max-w-3xl mx-auto opacity-90">
            {frontendSkills.map((skill, idx) => (
              <SkillTile key={skill.name} skill={skill} index={idx} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-20 px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent" />
      </div>
    </section>
  );
}
