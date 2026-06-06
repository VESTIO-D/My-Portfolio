'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProjectCardProps {
  imgSrc: string;
  projectName: string;
  tags: string[];
  links: string;
  description: string;
  index: number;
}

function ProjectCard({ imgSrc, projectName, tags, links, description, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="relative p-4 rounded-2xl glass glow-card group overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <figure className="img-box aspect-video rounded-lg mb-4 overflow-hidden">
        <img
          src={imgSrc}
          alt={projectName}
          loading="lazy"
          className="img-cover transition-transform duration-700 group-hover:scale-105"
        />
      </figure>

      <div className="relative z-10">
        <p className="text-zinc-400 text-sm mb-2 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-medium mb-3">{projectName}</h3>
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((label, key) => (
                <span
                  className="h-8 text-zinc-400 bg-white/5 grid items-center px-3 rounded-lg text-xs font-medium"
                  key={key}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </motion.div>
        </div>
      </div>

      <a
        href={links}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-20"
        aria-label={`View ${projectName} project`}
      />
    </motion.div>
  );
}

const projects = [
  {
    imgSrc: '/images/libraryproject.png',
    projectName: 'Library Project',
    tags: ['MVC', 'Django', 'Python'],
    links: 'https://github.com/VESTIO-D/LibraryProject',
    description:
      'A full-featured library management system built with Django, featuring book cataloging, user management, and borrowing workflows.',
  },
  {
    imgSrc: '/images/e-commerce.png',
    projectName: 'E-Commerce Platform',
    tags: ['MVC', 'Django', 'E-Commerce'],
    links: 'https://github.com/VESTIO-D/E-commerce.git',
    description:
      'A complete e-commerce web application with product listings, cart management, and secure checkout built on the Django framework.',
  },
  {
    imgSrc: '/images/logo.png',
    projectName: 'TBank - Modern Banking',
    tags: ['React', 'Tailwind CSS', 'UI/UX'],
    links: 'https://github.com/VESTIO-D/TBank',
    description:
      'A modern banking interface concept featuring sleek UI design, interactive dashboards, and responsive layouts for financial applications.',
  },
  {
    imgSrc: '/images/logo.png',
    projectName: 'VisitPoomala - Tourism',
    tags: ['React', 'Tourism', 'Web App'],
    links: 'https://github.com/VESTIO-D/poomala-new',
    description:
      'A tourism web application for Poomala featuring resort booking, local attractions, and an immersive travel planning experience.',
  },
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section" id="work" ref={ref}>
      <div className="container">
        <motion.h2
          className="headline-2 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Project Highlights
        </motion.h2>

        <motion.p
          className="text-zinc-400 mt-2 mb-10 max-w-[50ch] text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          A selection of my recent work spanning full-stack development, UI
          design, and web applications.
        </motion.p>

        <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {projects.map((project, index) => (
            <ProjectCard key={project.projectName} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
