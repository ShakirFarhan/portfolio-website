import React from 'react'
import "../css/imageframe.css"
function ImageFrame({ img, name }) {
  return (
    <div className='relative w-[110px] bg-[var(--black-secondary)] min-h-[110px] flex items-center flex-col gap-y-2 py-2 border-rotate' >
      <img className='w-[100%] h-[80px] object-contain z-10' src={img} alt='Skill' />
      <p className='text-[var(--white-primary)] font-semibold text-[13px] tracking-wide  z-10'>{name}</p>
    </div>
  )
}

export default ImageFrame