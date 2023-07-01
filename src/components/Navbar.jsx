import classNames from 'classnames';
import React, { useState } from 'react';
import "../css/navbar.css"
import Sun from '../assets/Sun';
import Moon from '../assets/Moon';
import { Spin as Hamburger } from 'hamburger-react'
function Navbar({ setMode, mode }) {
  const [toggleNav, setToggleNav] = useState(false)


  const handleToggleMode = () => {

    if (mode === "light") {
      setMode("dark")
    }
    else {

      setMode("light")
    }
  };
  const anchorStyles = classNames(
    "md:p-4 py-2 block text-[17px] text-[var(--white-primary)] font-medium"
  )
  const liClass = classNames(
    "hover:bg-[var(--nav-hover)] px-2 h-fit "
  )

  return (
    <>
      <nav className={`${mode === "dark" ? "navbar" : ""} relative z-50`}>
        <div className="flex items-center justify-between h-[70px] md:mx-auto max-w-7xl px-4 sm:px-10 md:px-8 text-lg text-gray-700">
          <div className='logo'>
            <span className="logo-sides"> &lt;</span>
            <a className='logo-text' href="/">
              Shakir Farhan
            </a>
            <span className="logo-sides">/&gt;</span>
          </div>

          {/* <Menu setToggleNav={setToggleNav} toggleNav={toggleNav} className="h-6 w-6 cursor-pointer md:hidden block text-[var(--white-primary)]" /> */}
          <button onClick={() => setToggleNav(!toggleNav)} className='md:hidden block cursor-pointer'>

            <Hamburger color='var(--white-primary)' />
          </button>

          <div className={`w-full md:flex md:items-center md:w-auto z-50 ${toggleNav ? "absolute top-16 -left-2 md:mx-auto max-w-7xl px-4 sm:px-10 pb-5 bg-[#f0f2f5]" : "hidden"}   ${toggleNav && mode === "dark" ? "sidebar" : ""}`} id="menu">
            <ul
              className={`
           
           
              text-base text-gray-700
              md:flex
              md:items-center
              md:justify-between 
              md:pt-0"
              `}
            >
              <li className={liClass}>
                <a className={anchorStyles} href="#skills">
                  Skills
                </a>
              </li>
              <li className={liClass}>
                <a className={anchorStyles} href="#projects">
                  Projects
                </a>
              </li>
              <li className={liClass}>
                <a className={anchorStyles} href="#education">
                  Education
                </a>
              </li>
              <li className={liClass}>
                <a className={anchorStyles} href="#experience">
                  Experience
                </a>
              </li>
              <li className={liClass}>
                <a className={anchorStyles} href="#contact">
                  Contact
                </a>
              </li>

              <button className='pl-3 mt-3 md:mt-0' onClick={handleToggleMode}>


                {

                  mode === "dark" ? <Moon className="swap-on fill-current w-[25px] h-[25px] text-[var(--white-primary)]" /> : <Sun className="swap-off fill-current w-[25px] h-[25px]" />
                }


              </button>

            </ul>
          </div>
        </div>
      </nav >
    </>
  );
}

export default Navbar;
