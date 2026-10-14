import React from 'react';
import { Github, Linkedin, Instagram, Phone, Facebook } from 'lucide-react';

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    href: 'https://github.com/yusefalsalman',
    color: 'hover:text-blue-500 hover:border-blue-500',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    href: 'https://www.linkedin.com/in/yousef-salman-27b19a33a',
    color: 'hover:text-blue-400 hover:border-blue-400',
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-5 h-5" />,
    href: 'https://www.instagram.com/yusef.alsalman/?__pwa=1#',
    color: 'hover:text-pink-500 hover:border-pink-500',
  },
  {
    name: 'WhatsApp',
    icon: <Phone className="w-5 h-5" />,
    href: 'https://wa.me/962799882249?text=Hello%20Yousef',
    color: 'hover:text-emerald-500 hover:border-emerald-500',
  },
  {
    name: 'Facebook',
    icon: <Facebook className="w-5 h-5" />,
    href: 'https://web.facebook.com/yousef.salman.96586',
    color: 'hover:text-blue-600 hover:border-blue-600',
  },
];
