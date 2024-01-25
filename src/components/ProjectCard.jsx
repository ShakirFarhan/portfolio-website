import React, { useEffect, useState } from 'react'
import { BsInfoLg } from "react-icons/bs"
import { IoIosLink } from "react-icons/io"
import Modal from './Modal'
const ProjectCard = ({ projectName, workedOn, technologies, link, projectDescription, coverImage, id }) => {
  const [colors, setColors] = useState([])
  const [modalActive, setModalActive] = useState(false)
  useEffect(() => {

    if (id === 1) {
      setColors(["#102762", "#1766df"])
    } else if (id === 2) {
      setColors(["#830332", "#df94af"])
    } else {
      setColors(["#3f031b", "#851842"])
    }
  }, [id])

  return (
    <>
      {modalActive && <Modal description={projectDescription} setModalActive={setModalActive} />}
      <div style={{ background: colors[0] }} className={`w-full h-[fit-content] px-4 p-3 rounded-[25px]`} data-aos="zoom-in">
        <div className={`flex items-center justify-between gap-y-5 lg:gap-x-6  flex-col lg:flex-row`}>
          <div style={{ background: colors[1] }} className={`w-[100%] lg:w-[47%] mt-1 lg:mt-0 max-h-[360px] lg:max-h-[430px] lg:h-[420px] p-4 rounded-[25px] overflow-hidden`}>
            <img className='w-[100%] h-[100%] object-contain' src={coverImage} alt='Project' />
          </div>
          <div className='w-[100%] lg:w-[50%]'>
            <div className='flex items-center justify-between'>
              <h2 className='text-[34px] sm:text-[40px] font-bold text-[#fff]'>{projectName}</h2>
              <div onClick={() => setModalActive((prev) => !prev)} className='w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] rounded-[50%] flex items-center justify-center bg-[#fff] p-2 hover:cursor-pointer transition ease duration-500 hover:bg-[#d2d2d3]'>
                <BsInfoLg style={{ color: colors[0] }} className={`text-[29px] sm:text-[33px]`} />
              </div>
            </div>
            <div className=''>
              <p className='text-[#fff] text-[16px] sm:text-[17px] font-medium'>Worked on</p>
              <div className='flex items-center gap-x-3 my-3'>
                {
                  workedOn.map((work, index) => {
                    return (
                      <div key={index} className='bg-[#fff] bg-opacity-30 w-[fit-content] px-5 py-[7px] font-bold text-[15px] tracking-wide text-[#fff] rounded-[20px]'>
                        {work}
                      </div>
                    )
                  })
                }

              </div>
              <p className='text-[#fff] text-[16px] sm:text-[17px] font-medium'>Technologies I have used</p>
              <div className='flex items-center flex-wrap gap-x-2 gap-y-3 my-4 lg:max-h-[160px] w-[100%] sm:w-[86%] lg:w-[100%]'>
                {
                  technologies.map((tech) => {
                    return (
                      <div key={tech.name} className='bg-[#fff] w-[fit-content] px-3 py-[7px] font-bold rounded-[20px] flex items-center gap-x-2'>
                        <img className='w-[24px] h-[22px]' src={tech.logo} alt='Javascript' />
                        <p className='font-semibold text-[14.5px] text-[#0c0c0c]'>{tech.name}</p>
                      </div>
                    )
                  })
                }
              </div>
              <div className=''>
                <button className='mt-3'>
                  <a target='_blanck' href={link} className='text-[#fff] font-semibold text-[20.5px] sm:text-[23px] flex items-center gap-x-2 bg-[#fff] bg-opacity-10 hover:bg-[#fff] hover:text-[#000] transition duration-300 border-[#fff] border-[1.4px] py-2 px-5 rounded-[32px]'>
                    <IoIosLink className='text-[28px]' />
                    Go To {projectName}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard