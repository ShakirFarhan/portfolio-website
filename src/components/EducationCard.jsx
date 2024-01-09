import React from 'react'
import styles from "../css/educationcard.module.css"
import { IoCalendarOutline } from "react-icons/io5"
import { FaUserGraduate } from "react-icons/fa"
import graduationImg from "../assets/graduation.svg"
import building from "../assets/building.png"
import location from "../assets/location.png"

const EducationCard = ({ duration, type, degree, degreeType, course, schoolName, schoolLocation, cardType }) => {
  return (
    <div style={{ background: cardType === 1 ? "" : "#fff" }} className={`w-[100%] ${cardType === 1 ? 'bg-[#c2c2c2]' : 'bg-[#fff]'} rounded-[20px] h-[280px] sm:h-[250px] lg:h-[270px] p-4  lg:p-7 ${styles.education__card}`}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-3 bg-[var(--black-primary)] px-2 sm:px-5 py-[4px] sm:py-[6px] text-[13px] rounded-[50px] text-[#efae02] font-bold tracking-wider'><IoCalendarOutline className='text-xl' />{duration}</div>
        <div className={`flex items-center gap-x-3 ${cardType === 1 ? 'bg-[var(--white-primary)]' : 'bg-[#fcefcc]'} px-2 sm:px-5 py-[4px] sm:py-[6px] text-[13px] rounded-[50px] text-[var(--black-primary)] font-extrabold trackin-wider`}><img className='w-[20px] h-[20px]' src={graduationImg} />{type}</div>
      </div>
      <div className='flex items-center gap-x-4 my-3'  >
        {degree && <div className={`flex items-center gap-x-3 ${cardType === 1 ? 'bg-[var(--white-primary)]' : 'bg-[#e7e7e7]'} px-2 sm:px-5 py-[4px] sm:py-[6px] text-[13px] rounded-[50px] text-[var(--black-primary)] font-bold`}>{degree}</div>}
        {degreeType && <div className={`flex items-center gap-x-3 ${cardType === 1 ? 'bg-[var(--white-primary)]' : 'bg-[#e7e7e7]'} px-2 sm:px-5 py-[4px] sm:py-[6px] text-[13px] rounded-[50px] text-[var(--black-primary)] font-bold`}>{degreeType}</div>}
      </div>
      <div>
        <h2 className="text-[var(--black-primary)] text-[18px] lg:text-[20px] font-black mb-3">{course}</h2>
        <div className='flex items-center gap-x-4 mb-3'>
          <div className={`${cardType === 1 ? "bg-[#fff]" : "bg-[#fdf7e6]"} w-[40px] h-[40px] rounded-[50%] flex items-center justify-center`}>
            <img className='w-[60%] h-[60%]' src={building} alt='Building' />
          </div>
          <p className='text-[var(--black-primary)] text-[14.5px] font-bold'>{schoolName}</p>

        </div>
        <div className='flex items-center gap-x-4 '>
          <div className={`${cardType === 1 ? "bg-[#fff]" : "bg-[#fdf7e6]"} w-[40px] h-[40px] rounded-[50%] flex items-center justify-center`}>
            <img className='w-[60%] h-[60%]' src={location} alt='Location' />
          </div>
          <p className='text-[var(--black-primary)] text-[14.5px] font-bold'>{schoolLocation}</p>
        </div>
      </div>
    </div>
  )
}

export default EducationCard