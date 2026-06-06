'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';

const navItems = [
  { label: 'Home', link: '#home' },
  { label: 'About', link: '#about' },
  { label: 'Skills', link: '#skills' },
  { label: 'Work', link: '#work' },
  { label: 'Contact', link: '#contact' },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(() => {
    setNavOpen(false);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-zinc-950/80 to-transparent'
      }`}
    >
      <div className="container h-20 flex justify-between items-center md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            className="rounded-xl"
            src="/images/logo.png"
            width={40}
            height={40}
            alt="Printoy A S Logo"
          />
          <span className="text-lg font-semibold hidden sm:inline bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Printoy
          </span>
        </motion.a>

        {/* Navbar */}
        <div className="relative md:justify-self-center">
          <motion.button
            className="w-10 h-10 grid place-items-center rounded-xl ring-1 ring-inset ring-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all active:scale-95 md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
          >
            <span className="material-symbols-rounded text-xl">
              {navOpen ? 'close' : 'menu'}
            </span>
          </motion.button>

          <Navbar
            navOpen={navOpen}
            navItems={navItems}
            activeSection={activeSection}
            onNavClick={handleNavClick}
          />
        </div>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-white text-zinc-900 font-medium text-sm hover:bg-zinc-200 transition-colors active:scale-95 md:justify-self-end"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="material-symbols-rounded text-[18px]">mail</span>
          Contact Me
        </motion.a>
      </div>
    </motion.header>
  );
}
