import React from 'react'

function Blob({ className, color1, color2 }) {
  return (
    <div className={className}>

      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fill" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(45 0.5 0.5)"><stop offset="0%" stop-color={!color1 ? "#FF9BCA" : color1}></stop><stop offset="100%" stop-color={!color2 ? "#B892FF" : color2}></stop></linearGradient></defs><path stroke="none" stroke-width="0" fill="url(#fill)">
        <animate attributeName='d' dur="2000ms" repeatCount="indefinite" values='M79,67.5Q78,85,60,85Q42,85,26.5,77Q11,69,19.5,54Q28,39,36.5,33Q45,27,60.5,22Q76,17,78,33.5Q80,50,79,67.5Z; M77.5,63Q71,76,58,73Q45,70,29,69Q13,68,20,53.5Q27,39,34,24Q41,9,57.5,14.5Q74,20,79,35Q84,50,77.5,63Z; M84.5,64Q72,78,57,82.5Q42,87,28,77Q14,67,17.5,51.5Q21,36,32,28.5Q43,21,56,23.5Q69,26,83,38Q97,50,84.5,64Z; M81,59.5Q65,69,54,74.5Q43,80,27,74.5Q11,69,21,55Q31,41,37,30Q43,19,54,25Q65,31,81,40.5Q97,50,81,59.5Z; M79,60Q66,70,54,78.5Q42,87,29,76.5Q16,66,11,47.5Q6,29,25.5,27.5Q45,26,57.5,25.5Q70,25,81,37.5Q92,50,79,60Z; M79,67.5Q78,85,60,85Q42,85,26.5,77Q11,69,19.5,54Q28,39,36.5,33Q45,27,60.5,22Q76,17,78,33.5Q80,50,79,67.5Z'></animate></path></svg>
    </div>
  )
}

export default Blob

