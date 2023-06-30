import classNames from 'classnames'
import React from 'react'
import { BiLogoLinkedin } from "react-icons/bi"
function ExperienceCard({ color, companyname, companylogo, role, duration, description, points }) {
  const listClass = classNames(
    "text-[15.5px] text-white tracking-wide"
  )
  return (
    <div className='relative h-fit pb-4 md:pb-0 md:h-[630px] lg:h-[664px] xl:h-[630px] bg-[var(--black-primary)] rounded-[10px] overflow-hidden border-[1px] border-[#808080]'>
      <div style={{ backgroundColor: color }} className={`h-[170px] bg-[${color}]`}>

      </div>
      <div className='absolute top-7 left-[35%] sm:left-[38%] md:left-[31%] flex flex-col items-center gap-y-7 justify-between'>

        <h3 className='text-[22px] font-bold text-[#fff]'>{companyname}</h3>
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px", backgroundColor: color }} className={`bg-[${color}]  rounded-[50%] p-4 `}>

          {/* <img className='w-[140px] h-[140px] shadow-lg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png" /> */}
          {/* <BiLogoLinkedin className='w-[120px] h-[120px] text-[#fff]' /> */}
          {companylogo}
        </div>

      </div>
      <div className='flex flex-col gap-y-3 mt-20 bg-[var(--black-primary)] px-2 pb-2'>
        <div className='flex flex-col items-center'>
          <h2 className='text-[24px] font-bold text-[#fff] text-center'>{role}</h2>
          <h6 className='text-[16px] text-[#fff] font-semibold'>{duration}</h6>

        </div>

        {/* <div className="text-[17.5px] text-[#fff] font-medium text-center px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni porro magnam rerum nam cumque voluptatibus quo tempore, tempora eius voluptas blanditiis eveniet beatae molestiae amet quis aliquam. Placeat, mollitia.
        </div> */}
        <div>
          <ol className='list-disc pl-8 px-2'>

            {
              points?.map((point) => {
                return <li key={point.key} className={listClass}>{point.text}</li>
              })
            }

          </ol>
        </div>
      </div>
    </div >
  )
}

export default ExperienceCard