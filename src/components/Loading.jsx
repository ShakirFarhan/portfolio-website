import React from 'react'

function Loading() {
  return (

    <div className="flex justify-center items-center h-screen overflow-hidden">

      <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" style={{ width: "300px", height: "300px" }} loop autoplay></lottie-player>

    </div>

  )
}

export default Loading