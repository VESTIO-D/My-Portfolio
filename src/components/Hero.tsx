'use client';

import { motion } from 'framer-motion';
import { ButtonPrimary, ButtonOutline } from './Button';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background orbs */}
      <div className="orb w-96 h-96 bg-sky-500 top-20 -left-48" />
      <div className="orb w-80 h-80 bg-purple-500 top-40 right-0" />
      <div className="orb w-64 h-64 bg-indigo-500 bottom-20 left-1/3" />

      <div className="container relative z-10 lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          {/* Status badge */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <figure className="w-9 h-9 rounded-lg overflow-hidden bg-zinc-800">
              <img
                src="/images/printoy.png"
                width={40}
                height={40}
                alt="Printoy A S"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              </span>
              Available for freelance work
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="headline-1 max-w-[18ch] mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Building scalable{' '}
            <span className="gradient-text">websites & apps</span>{' '}
            for the future
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-zinc-400 text-lg max-w-[50ch] mb-8"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Full-stack developer crafting modern, high-performance web
            applications with React, Django, .NET, and Angular. Let&apos;s build
            something amazing together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex items-center gap-3 flex-wrap"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <ButtonPrimary href="#contact" label="Hire Me" icon="rocket_launch" />
            <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward" />
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-purple-400/20 rounded-[60px] blur-3xl" />
            <figure className="relative w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
              <img
                src="/images/ava.png"
                width={656}
                height={800}
                alt="Printoy A S - Full-Stack Developer"
                className="w-full mt-20"
              />
            </figure>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-zinc-600 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-sky-400"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
