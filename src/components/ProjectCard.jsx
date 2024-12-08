import React from 'react'
import PropTypes from 'prop-types'

function ProjectCard({
    imgSrc,
    projectName,
    tags,
    links,
    classes
}) {
  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/5 active:bg-zinc-700/60 ring-inset ring-1 transition-colors " + classes}>

        <figure className="img-box aspect-auto rounded-lg mb-4">
            <img
             src={imgSrc} 
             alt={projectName} 
             loading='lazy'
             className="img-cover"
             />
        </figure>

        <div className="flex items-center justify-between gap-4">
            <div>
                <h3 className="title-1 mb-3">
                    {projectName}
                </h3>

                <div className="flex flex-wrap items-center gap-2">
                    {tags.map((label, key) => (
                        <span
                        className="h-8 text-zinc-400 bg-zinc-50/5 grid items-center
                        px-3 rounded-lg"
                        key={key}
                        >
                            {label}

                        </span>
                    ))}
                </div>
            </div>
            <div className="w-11 h-11 rounded-lg grid
            place-items-center bg-sky-400 text-zinc-950
            shrink-0">
                <span className="material-symbols-rounded"
                aria-hidden="true"
                >
                    arrow_outward
                </span>
            </div>
        </div>
        
        <a
         href={links} 
         target="_blank"
         className="absolute inset-0"
         >

         </a>

    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    links: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard
