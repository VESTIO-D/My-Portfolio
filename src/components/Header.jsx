import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'


function Header() {
    const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex item-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="max-w-screen-xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid 
        md:grid-cols-[1fr,3fr,1fr] ">
            <h1>
                <a href="/" className="logo">
                    <img 
                    className="rounded-xl"
                    src="/images/logo.png" 
                    width={40} height={40} 
                    alt="Printoy A S" />
                </a>
            </h1>

            <div className="relative md:justify-self-center">
                <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
                    <span className="material-symbols-rounded">
                        {navOpen ? 'close' : 'menu'}
                    </span>
                </button>

                <Navbar navOpen={navOpen}></Navbar>
            </div>
            <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
                Contact Me
            </a>
        </div>
    </header>
  )
}

export default Header
