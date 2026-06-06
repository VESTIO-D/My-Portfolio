'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  label: string;
  link: string;
}

interface NavbarProps {
  navOpen: boolean;
  navItems: NavItem[];
  activeSection: string;
  onNavClick: () => void;
}

export default function Navbar({ navOpen, navItems, activeSection, onNavClick }: NavbarProps) {
  const activeBox = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!activeBox.current || !navRef.current) return;

    const activeLink = navRef.current.querySelector(`[data-section="${activeSection}"]`) as HTMLElement;
    if (activeLink && activeBox.current) {
      activeBox.current.style.top = activeLink.offsetTop + 'px';
      activeBox.current.style.left = activeLink.offsetLeft + 'px';
      activeBox.current.style.width = activeLink.offsetWidth + 'px';
      activeBox.current.style.height = activeLink.offsetHeight + 'px';
    }
  }, [activeSection]);

  return (
    <motion.nav
      ref={navRef}
      className={`
        absolute top-full mt-2 right-0 min-w-48 p-2 rounded-2xl
        scale-90 blur-sm opacity-0 invisible
        transition-[opacity,transform,filter] duration-300
        md:static md:flex md:items-center md:mt-0 md:opacity-100 md:blur-0 md:visible
        md:scale-100 md:bg-transparent md:backdrop-blur-none md:border-0 md:min-w-0 md:p-0
        glass-strong
        ${navOpen ? '!opacity-100 !scale-100 !blur-0 !visible' : ''}
      `}
      initial={false}
    >
      {navItems.map(({ label, link }) => {
        const sectionId = link.replace('#', '');
        const isActive = activeSection === sectionId;
        return (
          <a
            key={link}
            href={link}
            data-section={sectionId}
            onClick={onNavClick}
            className={`relative grid items-center h-9 px-4 text-sm font-medium tracking-wide rounded-lg transition-all duration-300 ${
              isActive
                ? 'text-zinc-900'
                : 'text-zinc-400 hover:text-zinc-100'
            }`}
          >
            {label}
          </a>
        );
      })}
      <div
        ref={activeBox}
        className="absolute bg-white rounded-lg -z-10 transition-all duration-500 ease-out hidden md:block"
      />
    </motion.nav>
  );
}
