import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, X, User, Layers, FolderKanban, Mail, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../config/socialLinks';

export default function Navbar({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock page scroll and close on Escape while the mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMobileMenuOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Layers },
    { name: 'Projects', href: '#projects', id: 'projects', icon: FolderKanban },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-lightBg/85 dark:bg-darkBg/85 backdrop-blur-md shadow-sm border-b border-slate-200/60 dark:border-slate-800/60 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-black tracking-wider text-blue-600 dark:text-blue-500 hover:scale-105 transition-transform duration-200 flex items-center gap-1"
          >
            YS
          </a>

          {/* Center Pill Nav (Desktop) */}
          <nav className="hidden md:flex items-center px-2 py-1.5 rounded-full bg-slate-200/70 dark:bg-[#131b2e] border border-slate-300/80 dark:border-slate-800 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Dark/Light Mode Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-200/80 dark:bg-[#131b2e] border border-slate-300/80 dark:border-slate-700/80 text-slate-700 dark:text-blue-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden w-9 h-9 rounded-full flex flex-col items-center justify-center gap-[5px] bg-slate-200/80 dark:bg-[#131b2e] border border-slate-300/80 dark:border-slate-700/80 hover:scale-110 active:scale-95 transition-all shadow-sm"
            >
              <span className="block w-4 h-0.5 rounded-full bg-slate-700 dark:bg-slate-200" />
              <span className="block w-4 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400 scale-x-[0.6] origin-right" />
              <span className="block w-4 h-0.5 rounded-full bg-slate-700 dark:bg-slate-200" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu: rendered outside <header> because its backdrop-blur would trap position:fixed */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden fixed inset-0 z-[60]"
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Backdrop */}
            <motion.div
              variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
            />

            {/* Slide-in Panel */}
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              variants={{
                open: {
                  x: 0,
                  transition: { type: 'spring', stiffness: 320, damping: 34, staggerChildren: 0.06, delayChildren: 0.12 },
                },
                closed: { x: '100%', transition: { duration: 0.25, ease: 'easeIn' } },
              }}
              className="absolute top-0 right-0 h-full w-[84%] max-w-sm flex flex-col overflow-hidden bg-white dark:bg-[#0b1222] border-l border-slate-200 dark:border-slate-800 shadow-2xl"
            >
              {/* Decorative glows */}
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
              <div className="absolute bottom-10 -left-24 w-56 h-56 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

              {/* Panel Header */}
              <div className="relative flex items-center justify-between px-6 pt-6 pb-4">
                <div>
                  <span className="text-2xl font-black tracking-wider text-blue-600 dark:text-blue-500">YS</span>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mt-0.5">
                    Backend Developer
                  </p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-100 dark:bg-[#131b2e] border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:rotate-90 transition-transform duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mx-6 h-px bg-gradient-to-r from-blue-500/60 via-slate-200 dark:via-slate-800 to-transparent" />

              {/* Links */}
              <nav className="relative flex-1 px-4 py-6 flex flex-col gap-2 overflow-y-auto">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.id;
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      variants={{ open: { opacity: 1, x: 0 }, closed: { opacity: 0, x: 30 } }}
                      className={`group relative flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-colors ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <span
                        className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center transition-colors ${
                          isActive ? 'bg-white/20' : 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="flex-1">
                        <span
                          className={`block text-[10px] font-mono ${
                            isActive ? 'text-blue-100' : 'text-slate-400 dark:text-slate-500'
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <span className="block text-base font-semibold tracking-wide">{link.name}</span>
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          isActive ? 'text-white' : 'text-slate-400'
                        }`}
                      />
                    </motion.a>
                  );
                })}
              </nav>

              {/* Footer: CTA, socials & theme */}
              <motion.div
                variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}
                className="relative px-6 pb-8 pt-5 border-t border-slate-200 dark:border-slate-800"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/30 active:scale-[0.98] transition"
                >
                  <Mail className="w-4 h-4" />
                  Let&apos;s Work Together
                </a>

                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center gap-2">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={`w-9 h-9 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 transition [&>svg]:w-4 [&>svg]:h-4 ${social.color}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Toggle Theme"
                    className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center bg-slate-100 dark:bg-[#131b2e] border border-slate-200 dark:border-slate-700/80 transition"
                  >
                    {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
                  </button>
                </div>
              </motion.div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
