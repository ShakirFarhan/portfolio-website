import React, { useEffect, useState } from 'react'
import { ImArrowUp } from "react-icons/im"
function TopArrow() {
  const [backToTop, setBackToTop] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true)
      }
      else {
        setBackToTop(false)
      }
    })
  }, [])
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <>
      {
        backToTop &&
        <button onClick={scrollUp} button className=' bg-[#FF5E69] p-2 rounded-[5px] fixed bottom-[30px] right-[30px]' >
          <ImArrowUp className='w-[30px] h-[30px] text-[#fff]' />
        </button >
      }
    </>
  )
}

export default TopArrow