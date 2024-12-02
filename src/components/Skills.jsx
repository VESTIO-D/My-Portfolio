import React from 'react'
import Skillcard from './Skillcard';

function Skills() {

    const skillItem = [
        {
          imgSrc: '/images/css3.svg',
          label: 'CSS',
          desc: 'User Interface'
        },
        {
            imgSrc: '/images/django.svg',
            label: 'django',
            desc: 'Python Framework'
          },
        {
          imgSrc: '/images/javascript.svg',
          label: 'JavaScript',
          desc: 'Interaction'
        },
        {
          imgSrc: '/images/react.svg',
          label: 'React',
          desc: 'Framework'
        },
        {
          imgSrc: '/images/tailwindcss.svg',
          label: 'TailwindCSS',
          desc: 'User Interface'
        },
      ];

  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2">
                Essential tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8
            max-w-[50ch]">
             Discover the powerful tools and technologies I use to create
             exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 
            grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]"
            >
                {
                    skillItem.map(({imgSrc, label, desc }, key) => (
                        <Skillcard 
                         key={key}
                         imgScr={imgSrc}
                         label={label}
                         desc={desc}
                        ></Skillcard>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills
