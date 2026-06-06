'use client';

import { motion } from 'framer-motion';

interface ButtonPrimaryProps {
  href?: string;
  label: string;
  icon?: string;
  classes?: string;
}

interface ButtonOutlineProps {
  href?: string;
  label: string;
  icon?: string;
  classes?: string;
}

export function ButtonPrimary({ href, label, icon, classes = '' }: ButtonPrimaryProps) {
  const className = `inline-flex items-center gap-2 h-11 px-5 rounded-xl font-medium text-sm bg-sky-400 text-zinc-950 hover:bg-sky-300 active:bg-sky-400 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/20 ${classes}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('mailto') ? undefined : '_blank'}
        rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
        className={className}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded text-[18px]" aria-hidden="true">
            {icon}
          </span>
        )}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {label}
      {icon && (
        <span className="material-symbols-rounded text-[18px]" aria-hidden="true">
          {icon}
        </span>
      )}
    </motion.button>
  );
}

export function ButtonOutline({ href, label, icon, classes = '' }: ButtonOutlineProps) {
  const className = `inline-flex items-center gap-2 h-11 px-5 rounded-xl font-medium text-sm bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-800 ring-1 ring-inset ring-zinc-700/50 transition-all duration-300 ${classes}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded text-[18px]" aria-hidden="true">
            {icon}
          </span>
        )}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {label}
      {icon && (
        <span className="material-symbols-rounded text-[18px]" aria-hidden="true">
          {icon}
        </span>
      )}
    </motion.button>
  );
}
