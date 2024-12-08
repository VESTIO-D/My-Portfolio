/* 
 * node modules
 */

import ReactLenis from "lenis/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/* 
 * Resgister gsap pluggins
 */

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work";
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { element } from "prop-types";

function App() {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach(element => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })
  })

  return (
    <ReactLenis root>
      <Header></Header>
      <main>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Work></Work>
        <Contact></Contact>
        <Footer></Footer>
      </main>
      
    </ReactLenis>
  )
}

export default App
