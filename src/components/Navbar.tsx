'use client';

import { useEffect, useRef } from 'react';

interface NavbarProps {
  navOpen: boolean;
  onNavClick: () => void;
}

const navItems = [
  {
    label: 'Home',
    link: '#home',
    className: 'nav-link active',
    isInitialActive: true,
  },
  {
    label: 'About',
    link: '#about',
    className: 'nav-link',
    isInitialActive: false,
  },
  {
    label: 'Skills',
    link: '#skills',
    className: 'nav-link',
    isInitialActive: false,
  },
  {
    label: 'Work',
    link: '#work',
    className: 'nav-link',
    isInitialActive: false,
  },
  {
    label: 'Contact',
    link: '#contact',
    className: 'nav-link-contact',
    isInitialActive: false,
  },
];

function Navbar({ navOpen, onNavClick }: NavbarProps) {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const updateActiveBox = (el: HTMLAnchorElement | null) => {
    if (!activeBox.current || !el) return;
    activeBox.current.style.top = el.offsetTop + 'px';
    activeBox.current.style.left = el.offsetLeft + 'px';
    activeBox.current.style.width = el.offsetWidth + 'px';
    activeBox.current.style.height = el.offsetHeight + 'px';
  };

  useEffect(() => {
    if (lastActiveLink.current) {
      updateActiveBox(lastActiveLink.current);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (lastActiveLink.current) {
        updateActiveBox(lastActiveLink.current);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove('active');
    }
    target.classList.add('active');
    lastActiveLink.current = target;
    updateActiveBox(target);
    onNavClick();
  };

  return (
    <nav className={'navbar' + (navOpen ? ' active' : '')}>
      {navItems.map(({ label, link, className, isInitialActive }, index) => (
        <a
          href={link}
          key={index}
          className={className}
          ref={(el) => {
            if (isInitialActive && el) {
              lastActiveLink.current = el;
            }
          }}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox} />
    </nav>
  );
}

export default Navbar;
