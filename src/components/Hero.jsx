import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Phone, Facebook, Eye, Download } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export default function Hero() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/yusefalsalman',
      color: 'hover:text-blue-500 hover:border-blue-500',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/yusefalsalman',
      color: 'hover:text-blue-400 hover:border-blue-400',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://instagram.com',
      color: 'hover:text-pink-500 hover:border-pink-500',
    },
    {
      name: 'WhatsApp',
      icon: <Phone className="w-5 h-5" />,
      href: 'https://wa.me/?text=Hello%20Yousef',
      color: 'hover:text-emerald-500 hover:border-emerald-500',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      href: 'https://web.facebook.com/yousef.salman.96586',
      color: 'hover:text-blue-600 hover:border-blue-600',
    },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background ambient glow circles */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Info & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400 mb-2"
            >
              Yousef Salman
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 tracking-tight"
            >
              Full-Stack Developer | <br className="hidden sm:inline" />
              <span className="text-blue-600 dark:text-blue-400">ASP.NET Core &amp; React</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Hi, I'm Yousef Salman, a Full-Stack Developer specializing in building scalable,
              end-to-end web applications with React and ASP.NET Core.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-[#111c33] text-slate-600 dark:text-slate-300 transition-all duration-300 hover:scale-110 shadow-sm ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Eye className="w-4 h-4" />
                <span>View CV</span>
              </a>

              <a
                href="#contact"
                onClick={() => {
                  alert("Please contact Yousef directly via the form below to receive the latest updated PDF resume!");
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-200/80 dark:bg-[#131d33] border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Circular Avatar matching the screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Glowing gradient rim */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-amber-500 via-orange-400 to-blue-500 opacity-80 blur-md group-hover:opacity-100 group-hover:blur-lg transition duration-500" />

              {/* Inner ring & image */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-tr from-amber-600 via-amber-400 to-blue-500 shadow-2xl overflow-hidden">
                <img
                  src={avatarImg}
                  alt="Yousef Salman"
                  className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

