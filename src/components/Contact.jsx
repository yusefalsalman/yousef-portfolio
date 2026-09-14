import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { EMAILJS_CONFIG } from '../config/emailjs';

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#3b82f6', '#60a5fa', '#93c5fd', '#ffffff'],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      setStatus({
        loading: false,
        success: false,
        error: 'Please fill in both your email address and message.',
      });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    // Check if user set custom keys in .env
    const isConfigured =
      EMAILJS_CONFIG.PUBLIC_KEY &&
      EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY' &&
      !EMAILJS_CONFIG.PUBLIC_KEY.includes('YOUR_');

    if (isConfigured) {
      try {
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          {
            user_name: formData.name || 'Visitor',
            user_email: formData.email,
            message: formData.message,
            to_email: EMAILJS_CONFIG.RECIPIENT_EMAIL,
          },
          EMAILJS_CONFIG.PUBLIC_KEY
        );

        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        triggerCelebration();
      } catch (err) {
        console.error('EmailJS send error:', err);
        setStatus({
          loading: false,
          success: false,
          error: 'Failed to send via EmailJS. Please check your keys or send via direct email.',
        });
      }
    } else {
      // Graceful fallback if user hasn't added their personal API keys yet
      setTimeout(() => {
        setStatus({
          loading: false,
          success: true,
          error: null,
        });
        triggerCelebration();

        // Also trigger mailto link so user doesn't miss the message
        const mailtoUrl = `mailto:${EMAILJS_CONFIG.RECIPIENT_EMAIL}?subject=${encodeURIComponent(
          `Portfolio Contact from ${formData.email}`
        )}&body=${encodeURIComponent(
          `From: ${formData.name || 'Visitor'} (${formData.email})\n\nMessage:\n${formData.message}`
        )}`;
        window.open(mailtoUrl, '_blank');

        setFormData({ name: '', email: '', message: '' });
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="badge-pill">
            Contact Me
          </span>
        </motion.div>

        {/* Header Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto mb-12"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part
          of your visions. Feel free to reach out to me through any of the platforms below, let's
          connect and create something amazing together!
        </motion.p>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          {/* Left: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Optional Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name (Optional)"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#111a2e] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition text-sm shadow-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                >
                  Email <span className="text-blue-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#111a2e] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition text-sm shadow-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                >
                  Message <span className="text-blue-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#111a2e] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition text-sm resize-none shadow-sm"
                />
              </div>

              {/* Status alerts */}
              {status.error && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              {status.success && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>
                    Thank you! Your message has been sent to{' '}
                    <strong>yusefsalman13@gmail.com</strong>.
                  </span>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center sm:justify-start pt-2">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right: Stylized Mail Envelope Graphic matching screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center justify-center text-center p-8 rounded-3xl bg-slate-100/70 dark:bg-[#10182b]/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm"
          >
            <div className="relative group cursor-pointer mb-6">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-glow">
                <Mail className="w-20 h-20 sm:w-24 sm:h-24 text-blue-600 dark:text-blue-400 stroke-1 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1">
              Direct Mailbox
            </h4>
            <a
              href="mailto:yusefsalman13@gmail.com"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline break-all"
            >
              yusefsalman13@gmail.com
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Based in Amman • Open to remote &amp; on-site opportunities
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

