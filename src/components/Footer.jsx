import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
          &copy; 2026 <span className="font-semibold text-blue-600 dark:text-blue-400">Yousef Salman</span>. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-2 rounded-full bg-slate-200/80 dark:bg-[#111c33] border border-slate-300 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition shadow-sm"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}

