'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ButtonPrimary } from './Button';

const sitemap = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/VESTIO-D' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/printoy/' },
  { label: 'Instagram', href: 'https://www.instagram.com/v_estio_d/' },
  { label: 'CodePen', href: 'https://codepen.io/V_ESTIO-_D' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer id="footer" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="lg:grid lg:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href="mailto:printoysibi0@gmail.com"
              label="Start project"
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-3 font-medium">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1.5 transition-colors hover:text-zinc-200 link-underline"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 font-medium">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 py-1.5 transition-colors hover:text-zinc-200 link-underline"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-between pt-10 mb-8 border-t border-zinc-800/50 mt-10">
          <a href="#home">
            <img
              src="/images/logo.png"
              width={40}
              height={40}
              alt="Printoy A S Logo"
              className="rounded-xl"
            />
          </a>
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-zinc-200">vestio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
