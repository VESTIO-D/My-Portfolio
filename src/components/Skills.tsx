'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillcardProps {
  imgSrc: string;
  label: string;
  desc: string;
  index: number;
}

function Skillcard({ imgSrc, label, desc, index }: SkillcardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-3 rounded-2xl p-3 gradient-border glow-card group transition-all duration-500"
      style={{
        background: 'rgba(39, 39, 42, 0.5)',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <figure className="bg-zinc-800/80 rounded-lg overflow-hidden w-12 h-12 p-2.5 group-hover:bg-zinc-700 transition-colors duration-300">
        <img src={imgSrc} alt={label} width={32} height={32} />
      </figure>
      <div>
        <h3 className="font-medium text-zinc-100">{label}</h3>
        <p className="text-zinc-500 text-sm">{desc}</p>
      </div>
    </motion.div>
  );
}

const skillItems = [
  { imgSrc: '/images/react.svg', label: 'React', desc: 'Frontend Framework' },
  { imgSrc: '/images/nextjs.svg', label: 'Next.js', desc: 'Full-Stack Framework' },
  { imgSrc: '/images/angular.svg', label: 'Angular', desc: 'Frontend Framework' },
  { imgSrc: '/images/javascript.svg', label: 'JavaScript', desc: 'Programming Language' },
  { imgSrc: '/images/css3.svg', label: 'CSS', desc: 'Styling & Layout' },
  { imgSrc: '/images/tailwindcss.svg', label: 'Tailwind CSS', desc: 'Utility-First CSS' },
  { imgSrc: '/images/django.svg', label: 'Django', desc: 'Python Backend Framework' },
  { imgSrc: '/images/dotnet.svg', label: '.NET', desc: 'Backend Framework' },
  { imgSrc: '/images/dotnetcore.svg', label: '.NET Core', desc: 'Cross-Platform Backend' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="headline-2 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          My Tech Stack
        </motion.h2>

        <motion.p
          className="text-zinc-400 mt-2 mb-10 max-w-[50ch] text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites &amp; web applications.
        </motion.p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
          {skillItems.map(({ imgSrc, label, desc }, index) => (
            <Skillcard
              key={label}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
