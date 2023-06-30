import React, { useState } from 'react'
import { MdExpandLess, MdExpandMore } from "react-icons/md"

function FAQ({ question, answer }) {
  const [expand, setExpand] = useState(false)
  const handleToggle = () => {
    setExpand(!expand);
  };
  return (
    <div className='flex flex-col border-b-[1px] border-[#808080] w-[100%] md:w-[87%] lg:w-[70%] xl:w-[60%] pb-8 h-fit'>
      <div className='flex justify-between items-center '>
        <h6 className='text-[var(--white-primary)] font-semibold tracking-wide text-[15px]'>{question}</h6>
        <button onClick={handleToggle} className='max-h-fit duration-500'>
          {expand ? (
            <MdExpandLess color='var(--white-primary)' className='w-[35px] h-[25px]' />
          ) : (
            <MdExpandMore color='var(--white-primary)' className='w-[35px] h-[25px]' />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden w-[95%] text-[#808080] ${expand ? 'max-h-[1000px] w-full transition-all duration-500 ease-in-out mt-5' : 'transition-all max-h-0 duration-500 ease-in-out'
          }`}
      >
        {answer}
      </div>
    </div>
  )
}

export default FAQ