'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const socialLinks = [
  {
    href: 'https://github.com/VESTIO-D',
    label: 'GitHub',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/printoy/',
    label: 'LinkedIn',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/v_estio_d/',
    label: 'Instagram',
    icon: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    const form = e.currentTarget;
    try {
      await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
      });
      setFormStatus('sent');
      form.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch {
      setFormStatus('idle');
    }
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-12">
          {/* Left side */}
          <motion.div
            className="mb-12 lg:mb-0 lg:flex lg:flex-col"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="headline-2 lg:max-w-[12ch] mb-4">
              Let&apos;s work together
            </h2>

            <p className="text-zinc-400 mt-2 mb-8 max-w-[50ch] lg:max-w-[30ch] text-lg leading-relaxed">
              Have a project in mind? Reach out today to discuss your needs and
              start collaborating on something amazing!
            </p>

            {/* Services highlights */}
            <div className="space-y-3 mb-8">
              {[
                'Custom Website Development',
                'Web Application Building',
                'Full-Stack Solutions',
                'UI/UX Design & Implementation',
              ].map((service) => (
                <div key={service} className="flex items-center gap-2 text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-auto">
              {socialLinks.map(({ href, icon, label }, key) => (
                <motion.a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 grid place-items-center rounded-xl glass hover:bg-white hover:text-zinc-950 active:bg-zinc-50/80 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              action="https://getform.io/f/anlljkka"
              method="POST"
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 md:p-8 xl:ml-10"
            >
              <div className="md:grid md:items-center md:grid-cols-2 md:gap-4">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-zinc-200 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="block outline-none w-full px-4 text-sm py-3 bg-zinc-800/80 rounded-xl ring-1 ring-inset ring-transparent transition-all duration-300 hover:ring-zinc-600 focus:ring-sky-400 focus:ring-2 placeholder:text-zinc-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-zinc-200 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    placeholder="your@email.com"
                    className="block outline-none w-full px-4 text-sm py-3 bg-zinc-800/80 rounded-xl ring-1 ring-inset ring-transparent transition-all duration-300 hover:ring-zinc-600 focus:ring-sky-400 focus:ring-2 placeholder:text-zinc-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-zinc-200 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="block outline-none w-full px-4 text-sm py-3 bg-zinc-800/80 rounded-xl ring-1 ring-inset ring-transparent transition-all duration-300 hover:ring-zinc-600 focus:ring-sky-400 focus:ring-2 resize-y min-h-32 max-h-80 placeholder:text-zinc-500"
                />
              </div>

              <motion.button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full h-11 flex items-center justify-center gap-2 rounded-xl font-medium text-sm bg-sky-400 text-zinc-950 hover:bg-sky-300 active:bg-sky-400 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={formStatus === 'idle' ? { scale: 1.02 } : {}}
                whileTap={formStatus === 'idle' ? { scale: 0.98 } : {}}
              >
                {formStatus === 'idle' && (
                  <>
                    Send Message
                    <span className="material-symbols-rounded text-[18px]">send</span>
                  </>
                )}
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'sent' && (
                  <>
                    Sent!
                    <span className="material-symbols-rounded text-[18px]">check</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
