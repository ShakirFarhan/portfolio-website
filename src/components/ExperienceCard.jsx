import React from 'react'
import { IoCalendarOutline } from "react-icons/io5"
import point from "../assets/location.png"
import { PiNavigationArrow } from "react-icons/pi"
import boy from "../assets/boy.jpg"
import styles from "../css/educationcard.module.css"
const ExperienceCard = ({ logo, company, location, role, duration, description }) => {
  return (
    <div className={`w-full bg-[#fff]  min-h-[fit-content]  sm:max-h-[550px] rounded-[20px] ${styles.hover__card}`} data-aos="fade-up">

      <div className='p-2 sm:p-4 lg:p-7  rounded-[20px]'>

        <div className='flex items-center justify-between flex-wrap gap-y-3'>
          <div className='flex items-center gap-x-2 sm:gap-x-4 h-[65px] sm:h-[80px] bg-[var(--experience-card-color1)] rounded-[40px] pr-3 sm:pr-9'>
            <img className='w-[65px] sm:w-[80px] h-full bg-[var(--black-primary)] p-2 rounded-[50%]' src={logo} alt='Company Logo' />
            <div>
              <h3 className='text-[var(--experience-card-color2)] font-extrabold text-[15.5px] sm:text-[19px] leading-[20px]'>{company}</h3>
              <div className='flex items-center gap-x-2 mt-1'>
                <div className='bg-[#3d3d3d] flex items-center justify-center p-[2px] rounded-[50%]'>
                  <img className='w-[11px] h-[11px]' src={point} alt='Location' />
                </div>
                <p className='text-[var(--white-primary)] font-medium text-[10.4px] sm:text-[12px]'>
                  {location}
                </p>
              </div>
            </div>
          </div>
          <div className={`flex items-center gap-x-3 bg-[#fff] px-2 sm:px-5 py-[10px] text-[13.5px] rounded-[50px] text-[#000] font-black tracking-wide ${styles.honey__hover}`}><IoCalendarOutline className='text-xl' />{duration}</div>
        </div>

        <div className='flex items-center gap-x-3'>
          <img className='w-[42px] h-[42px]  rounded-[50%] border-[#494949] border-[1px] p-1 bg-[#efae02]' src={boy} alt='Boy' />
          <h2 className='text-[21px] sm:text-[27px] font-extrabold text-[var(--black-primary)] my-7 leading-[29px]'>{role} </h2>
        </div>
        <div className='space-y-4'>
          {
            description?.map((item, index) => (
              <p key={index + new Date().toString()} className='flex items-start sm:items-center gap-x-3 sm:gap-x-4 text-[var(--black-primary)] font-semibold text-[15px]'>
                <PiNavigationArrow className="min-w-[18px] min-h-[18px] mt-1 sm:mt-0 rotate-[132deg]" />
                {item.text}
              </p>
            ))
          }

        </div>
      </div>
    </div>

  )
}

export default ExperienceCard