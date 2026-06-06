'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const aboutItems = [
  { label: 'Projects completed', number: 5, suffix: '+' },
  { label: 'Years of experience', number: 2, suffix: '+' },
  { label: 'Technologies mastered', number: 10, suffix: '+' },
  { label: 'Happy clients', number: 3, suffix: '+' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="glass rounded-2xl p-7 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="headline-2 mb-6">About Me</h2>

            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] leading-relaxed">
              Welcome! I&apos;m{' '}
              <span className="text-sky-400 font-medium">Printoy A S</span>, a
              professional Full-Stack Web Developer with a passion for building
              dynamic, user-friendly, and efficient web applications. Combining
              creativity and technical expertise, I bring ideas to life with
              seamless functionality and sleek design.
            </p>

            <p className="text-zinc-400 mb-8 md:mb-10 md:text-lg md:max-w-[55ch] leading-relaxed">
              My tech stack spans across frontend and backend — from React and
              Angular for interactive UIs to Django and .NET for robust server-side
              solutions. I specialize in creating end-to-end web experiences that
              are fast, accessible, and beautifully crafted.
            </p>

            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              {aboutItems.map(({ label, number, suffix }, key) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + key * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="flex items-center mb-1">
                    <span className="text-3xl font-semibold md:text-4xl">
                      {number}
                    </span>
                    <span className="text-sky-400 font-semibold md:text-3xl">
                      {suffix}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500">{label}</p>
                </motion.div>
              ))}

              <motion.img
                src="/images/logo.png"
                alt="Printoy A S Logo"
                className="rounded-xl ml-auto md:w-[48px] md:h-[48px] w-[36px] h-[36px]"
                width={48}
                height={48}
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
