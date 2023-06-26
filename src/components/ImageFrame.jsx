import React from 'react'

function ImageFrame({ img, name }) {
  return (
    <div className='w-[110px] bg-[var(--black-secondary)] min-h-[110px] flex items-center flex-col gap-y-2 py-2' >
      <img className='w-[100%] h-[80px] object-contain' src={img} />
      <p className='text-[var(--white-primary)] font-semibold text-[13px] tracking-wide'>{name}</p>
    </div>
  )
}

export default ImageFrame