import React from 'react'
import { BsDot } from "react-icons/bs"
import { Link } from 'react-router-dom'
import "../css/projectcard.css"
function ProjectCard({ name, info, language, color, image, link, className }) {


  return (


    <div className='min-w-[360px] h-[320px]  md:min-w-[500px] bg-[#24221f] flex flex-col shadow-lg rounded-[10px] md:h-[350px] p-2 project-card duration-500 easein-out'>
      <a className='w-full' target='_blanck' href={link}>
        <div>
          <img className='w-full bg-[#fff] object-contain h-[180px] md:h-[230px] rounded-[10px]' src={image} />
        </div>
        <div className='pl-2 pt-3 flex flex-col items-start gap-y-2'>

          <div className='flex flex-col gap-y-[5px]'>
            <h5 className='text-[#d2d2d3] font-semibold tracking-wide text-[13.8px]'>{name}</h5>
            <p className='text-[#a3a4a5] text-[12px] font-medium tracking-wide'>{info}</p>
          </div>
          <div className='flex items-center gap-x-2'>

            <div className={`w-[8px] h-[8px] ${className} rounded-[50%]`}>

            </div>

            <p className='text-[var(--white-primary)] text-[14px]'>{language}</p>
          </div>

        </div>
      </a>
    </div>
  )
}

export default ProjectCard