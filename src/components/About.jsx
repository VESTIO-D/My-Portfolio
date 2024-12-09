import React from 'react'

function About() {
  const aboutItems = [
  {
    label: 'Project done',
    number: 3
  },
  {
    label: 'Years of experience',
    number: 1
  }
];
  return (
    <section
     className="section" 
     id="about"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl 
            md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8
                md:text-xl md:max-w-[60ch]">
                Welcome! I'm Printoy A S, a professional Python Django React developer with a passion 
                for building dynamic, user-friendly, and efficient web applications. Combining 
                creativity and technical expertise, I bring ideas to life with seamless 
                functionality and sleek design.
                </p>


                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center
                                md:mb-2">
                                    <span className="text-2xl font-semibold
                                    md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold
                                    md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img
                     src="./images/logo.png" 
                     alt="Logo" 
                     className="rounded-xl ml-auto md:w-[40px] md:h-[40px]"
                     width={30}
                     height={30} 
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
