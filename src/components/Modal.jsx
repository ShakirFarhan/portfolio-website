import React, { useEffect } from 'react'
import { PiNavigationArrow } from "react-icons/pi"
import { RxCross2 } from "react-icons/rx"
const Modal = ({ setModalActive, description }) => {
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflowY = 'scroll';

    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflowY = 'auto';
    };
  }, []);
  return (
    <>
      <div id="overlay" class="fixed inset-0 bg-black opacity-50 z-50"></div>

      {/* <!-- Modal --> */}
      <div id="modal" class="modal p-2 lg:p-8 rounded-md z-50 fixed w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center overflow-auto">
        <div className='bg-[var(--black-primary)]  lg:w-[70%] xl:w-[50%] min-h-[fit-content] rounded-[30px] p-5 transition delay-100 ease'>
          <div className='flex w-full justify-between items-center'>
            <h2 className='text-[var(--white-primary)] text-[21px] font-bold pl-2'>What I've Done in Project</h2>
            <div onClick={() => setModalActive(false)} className='text-[var(--white-primary)] w-[40px] h-[40px] flex items-center justify-center hover:bg-[#23272d] rounded-[50%] p-2 cursor-pointer transition ease hover:text-[#fff]'>
              <RxCross2 className='text-[20px]' />
            </div>
          </div>
          <div className='flex flex-col gap-y-3 mt-6'>
            {
              description.map((desc, index) => {
                return (
                  <p key={index} className='flex items-start sm:items-center gap-x-3 sm:gap-x-4 text-[var(--white-primary)] font-medium text-[13.2px] tracking-wider'>
                    <PiNavigationArrow className="min-w-[18px] min-h-[18px] mt-1 sm:mt-0 rotate-[132deg]" />
                    {desc}
                  </p>
                )
              })
            }
          </div>
        </div>
      </div>

    </>

  )
}

export default Modal