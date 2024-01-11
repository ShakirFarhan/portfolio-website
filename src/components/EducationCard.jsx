import React from 'react'
import styles from "../css/educationcard.module.css"
import { IoCalendarOutline } from "react-icons/io5"
import graduationImg from "../assets/graduation.svg"
import building from "../assets/building.png"
import location from "../assets/location.png"

const EducationCard = ({ duration, type, degree, degreeType, course, schoolName, schoolLocation, cardType }) => {
  return (
    <div className={`w-[100%]  rounded-[20px] h-[fit-content] sm:h-[300px] lg:h-[350px] xl:h-[320px] ${styles.hover__card}`} data-aos="fade-up"
      data-aos-duration="4000">
      <div className='p-4 lg:p-7 rounded-[20px]'>
        <div className='flex items-center justify-between flex-wrap gap-y-3'>
          <div className={`flex items-center gap-x-3 bg-[var(--black-primary)] px-2 sm:px-5 py-[5px] sm:py-[7px] text-[14.5px] lg:text-[17.4px] rounded-[50px] text-[#efae02] font-bold tracking-wider`}><IoCalendarOutline className='text-xl' />{duration}</div>
          <div className={`flex items-center gap-x-3 bg-[var(--white-primary)] px-2 sm:px-5 py-[5px] sm:py-[7px] text-[14.5px] lg:text-[17.4px] rounded-[50px] text-[var(--black-primary)] font-bold trackin-wider ${styles.honey__hover}`}><img className='w-[20px] h-[20px]' alt='Grauduation' src={graduationImg} />{type}</div>
        </div>
        <div className='flex items-center gap-x-3 my-5'  >
          {degree && <div className={`flex items-center gap-x-3 bg-[var(--white-primary)] px-2 sm:px-5 py-[4px] sm:py-[6px] text-[15.5px] lg:text-[18.4px] rounded-[50px] text-[var(--black-primary)] font-bold ${styles.subdegree}`}>{degree}</div>}
          {degreeType && <div className={`flex items-center gap-x-3 bg-[var(--white-primary)] px-2 sm:px-5 py-[4px] sm:py-[6px] text-[15.5px] lg:text-[18.4px] rounded-[50px] text-[var(--black-primary)] font-bold ${styles.subdegree}`}>{degreeType}</div>}
        </div>
        <div>
          <h2 className="text-[var(--black-primary)] text-[21px] lg:text-[25px] font-black mb-3 leading-[24px]">{course}</h2>
          <div className={`flex items-center gap-x-2 sm:gap-x-4 mb-3 mt-3 lg:mt-0`}>
            <div className={`bg-[#fff] min-w-[44px] h-[44px] rounded-[50%] flex items-center justify-center ${styles.icons}`}>
              <img className='w-[60%] h-[60%]' src={building} alt='Building' />
            </div>
            <p className='text-[var(--black-primary)] text-[15.5px] font-medium'>{schoolName}</p>

          </div>
          <div className='flex items-center gap-x-2 sm:gap-x-4 mt-3 lg:mt-0'>
            <div className={`bg-[#fff] w-[44px] h-[44px] rounded-[50%] flex items-center justify-center ${styles.icons}`}>
              <img className={`w-[60%] h-[60%] `} src={location} alt='Location' />
            </div>
            <p className='text-[var(--black-primary)] text-[15.5px] font-medium'>{schoolLocation}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default EducationCard