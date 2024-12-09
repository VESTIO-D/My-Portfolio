import React from 'react'
import ProjectCard from './ProjectCard';

const projects = [
  {
    imgSrc : "/images/libraryproject.png",
    projectName : "Library Project",
    tags: ['MVC', 'Development', 'Django'],
    links : "https://github.com/VESTIO-D/LibraryProject"
  },
  {
    imgSrc : "/images/e-commerce.png",
    projectName : "E-Commerce",
    tags: ['MVC', 'Development', 'E-Commerce'],
    links : "https://github.com/VESTIO-D/E-commerce.git"
  }
];

function Work() {
  return (
    <section 
      className="section"
      id="work"
    >
      <div className="container">
      <h2 className="headline-2 mb-4">
        My project highlights
      </h2>
      <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
        {projects.map(({ imgSrc, projectName, tags, links }, key) => (
          <ProjectCard
           key={key}
           imgSrc={imgSrc}
           projectName={projectName}
           tags={tags}
           links={links}
          ></ProjectCard>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Work
