import React from 'react'

function Menu({ className, setToggleNav, toggleNav }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="menu-button"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={() => setToggleNav(!toggleNav)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )
}

export default Menu