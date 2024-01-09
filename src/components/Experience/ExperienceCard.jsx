import React from 'react'
import { IoCalendarOutline } from "react-icons/io5"
import point from "../../assets/location.png"
import { PiNavigationArrow } from "react-icons/pi"
import boy from "../../assets/boy.jpg"
import styles from "../../css/educationcard.module.css"
const ExperienceCard = ({ logo, company, location, role, duration, description }) => {
  return (
    <div className={`w-full bg-[#fff] p-5 min-h-[fit-content] max-h-[550px] rounded-[20px] ${styles.hover__card}`}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-4 h-[80px] bg-[var(--black-primary)] rounded-[40px] pr-9'>
          <img className='w-[80px] h-full bg-[#000] p-2 rounded-[50%]' src={logo} alt='Company Logo' />
          <div>
            <h3 className='text-[#efae02] font-bold text-[19px]'>{company}</h3>
            <div className='flex items-center gap-x-2  mt-[3px]'>
              <div className='bg-[#3d3d3d] flex items-center justify-center p-1 rounded-[50%]'>
                <img className='w-[14px] h-[14px]' src={point} alt='Location' />
              </div>
              <p className='text-[#fff] font-medium text-[12px]'>
                {location}
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-x-3 bg-[#fcefcc] px-2 sm:px-5 py-[2px] sm:py-[6px] text-[13.5px] rounded-[50px] text-[var(--black-primary)] font-black tracking-wide'><IoCalendarOutline className='text-xl' />{duration}</div>
      </div>

      <div className='flex items-center gap-x-3'>
        <img className='w-[42px] h-[42px]  rounded-[50%] border-[#494949] border-[1px] p-1 bg-[#efae02]' src={boy} alt='Boy' />
        <h2 className='text-[27px] font-extrabold text-[#000] my-7'>{role} </h2>
      </div>
      <div className='space-y-4'>
        {
          description?.map((item, index) => (
            <p key={index + new Date().toString()} className='flex items-center gap-x-4 text-[#0c0c0c] font-semibold text-[15px]'>
              <PiNavigationArrow className="w-[18px] h-[18px] rotate-[132deg]" />
              {item.text}
            </p>
          ))
        }

      </div>
    </div>
  )
}

export default ExperienceCard