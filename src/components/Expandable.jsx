import React, { useState } from 'react';
import { MdExpandLess, MdExpandMore } from "react-icons/md"
import classNames from 'classnames';

function Expandable({ name, isDropdown, info, role, duration }) {
  const [expand, setExpand] = useState(false);

  const handleToggle = () => {
    setExpand(!expand);
  };

  const className = classNames(
    'text-[#808080]',
    'text-[12px]',
    'sm:text-[14px]',
    'font-semibold',
    'tracking-wide'
  );

  return (
    <>
      <div className='flex flex-col border-b-2 border-[#808080] w-[100%]  pb-8 h-fit'>
        <div className='flex flex items-end  gap-x-0 md:gap-x-6 lg:gap-x-10 xl:gap-x-14'>
          <div className='w-[70%] sm:flex-2'>
            <h3 className='text-[var(--white-primary)] text-[19px] sm:text-[21px] lg:text-[23px] xl:text-[25px] tracking-wide font-semibold'>{name}</h3>
            <span className='text-[#808080] text-[11.6px] sm:text-[12.6px] md:text-[14.6px] font-semibold tracking-wide'>{role}</span>
          </div>
          <div className='flex flex-col items-end justify-start h-full gap-y-4 flex-1'>
            {isDropdown && <button onClick={handleToggle} className='max-h-fit duration-500'>
              {expand ? (
                <MdExpandLess color='#808080' className='w-[25px] h-[25px]' />
              ) : (
                <MdExpandMore color='#808080' className='w-[25px] h-[25px]' />
              )}
            </button>}
            <span className='text-[#808080] text-[9.5px] sm:text-[11px] md:text-[12.6px] font-semibold text-end'>&#9702; {duration}</span>
          </div>
        </div>
        <div
          className={`overflow-hidden w-[95%] ${expand ? 'max-h-[1000px] w-full transition-all duration-500 ease-in-out  mt-8' : 'transition-all max-h-0 duration-500 ease-in-out'
            }`}
        >
          <ol className="list-disc flex flex-col gap-y-2">
            {
              info?.map((indiInfo) => {
                return <li key={indiInfo.key} className={className}>{indiInfo.text}</li>
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
}

export default Expandable;
