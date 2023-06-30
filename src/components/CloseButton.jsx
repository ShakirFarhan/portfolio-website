import React from 'react'
import { IoCloseOutline } from "react-icons/io5"

function CloseButton({ closeToast }) {
  return (

    <IoCloseOutline onClick={closeToast} className='w-[20px] h-[20px] text-[var(--white-primary)]' />

  )
}

export default CloseButton