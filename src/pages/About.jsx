import React from 'react'
import { GrLinkedinOption, GrGithub, GrInstagram } from "react-icons/gr"
import GradientText from '../components/GradientText'
import Separator from "../components/Separator"
function About() {
  return (
    <>
      <div className='md:mx-auto max-w-7xl px-4 sm:px-10 md:px-8 py-10'>
        <div className='flex flex-col gap-y-5'>
          <h1 className='text-[var(--white-primary)] font-bold tracking-[0.6px] text-[33px] sm:text-[40px]  md:text-start md:text-[34px] lg:text-[40px] leading-[40px] md:leading-[36px] lg:leading-[54px]'>Hi, I am <GradientText tag="span" text="Shakir farhan" /> </h1>
          <p className='text-[var(--white-primary)] w-[80%] lg:w-[35%] text-[13.5px] font-medium tracking-wide sm:text-center md:text-start'>Printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
          <div className='flex gap-x-4'>
            <a href='#' className='w-fit rounded-[50%] px-[3px]' style={{ background: "linear-gradient(90deg, rgba(177,108,234,1) 14%, rgba(255,94,105,1) 46%, rgba(255,138,86,1) 75%, rgba(255,168,75,1) 97%)" }}>

              <GrLinkedinOption className='min-w-[30px] px-1 h-[30px] text-[#fff] rounded-[13px]' />
            </a>
            <a href='#' className='w-fit rounded-[50%] p-[2px]' style={{ background: "linear-gradient(90deg, rgba(177,108,234,1) 14%, rgba(255,94,105,1) 46%, rgba(255,138,86,1) 75%, rgba(255,168,75,1) 97%)" }}>

              <GrGithub className='min-w-[30px] px-1 h-[30px] text-[#fff] rounded-[13px]' />
            </a>
            <a href='#' className='w-fit rounded-[50%] p-[2px]' style={{ background: "linear-gradient(90deg, rgba(177,108,234,1) 14%, rgba(255,94,105,1) 46%, rgba(255,138,86,1) 75%, rgba(255,168,75,1) 97%)" }}>

              <GrInstagram className='min-w-[30px] px-1 h-[30px] text-[#fff] rounded-[13px]' />
            </a>

          </div>
        </div>
        <div className='w-full min-h-[200px] flex gap-x-2 md:gap-x-4 py-10'>
          <img className='w-[30%] sm:w-[32%] object-cover' src='https://images.unsplash.com/photo-1622151834625-66296f9f0e96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=850&q=80' alt='man' />
          <img className='w-[30%] sm:w-[32%] object-cover' src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' />
          <div className='w-[30%] sm:w-[32%]  object-cover flex flex-col gap-y-2 md:gap-y-4'>
            <img className='object-cover' src='https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' />
            <img className='object-cover' src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80' />
          </div>
        </div>
        {/*  */}

        <div className='min-h-[150px] flex flex-col sm:flex-row items-center sm:items-start justify-center gap-x-2 lg:gap-x-6'>

          <div className='flex justify-start items-center flex-col w-[90%] sm:w-[33%] lg:w-[31%] xl:w-[25%]'>
            <GradientText tag="span" text="12+ years" style={{ background: "linear-gradient(90deg, rgba(177,108,234,1) 14%, rgba(255,94,105,1) 46%, rgba(255,138,86,1) 75%, rgba(255,168,75,1) 97%)" }} className="font-bold text-[30px]" />
            <p className='text-[var(--white-primary)] font-medium text-[14px] text-center tracking-wide w-[90%]'>Years of experience as a Developer</p>
          </div>
          <div className='sm:border-r border-gray-400 sm:h-[110px] sm:mt-7 border-t-2 sm:border-t-0'>

          </div>
          <div className='flex justify-start items-center flex-col w-[90%] sm:w-[33%] lg:w-[31%] xl:w-[25%]'>
            <GradientText tag="span" text="20+" style={{ background: "linear-gradient(90deg, rgba(177,108,234,1) 14%, rgba(255,94,105,1) 46%, rgba(255,138,86,1) 75%, rgba(255,168,75,1) 97%)" }} className="font-bold text-[30px]" />
            <p className='text-[var(--white-primary)] font-medium text-[14px] text-center tracking-wide w-[90%]'>Successfully Project Completed</p>
          </div>
          <div className='hidden sm:flex border-r border-gray-400 h-[110px] mt-7'>

          </div>
          <div className='flex justify-start items-center flex-col w-[90%] sm:w-[33%] lg:w-[31%] xl:w-[25%]'>
            <GradientText tag="span" text="12+" style={{ background: "linear-gradient(90deg, rgba(177,108,234,1) 14%, rgba(255,94,105,1) 46%, rgba(255,138,86,1) 75%, rgba(255,168,75,1) 97%)" }} className="font-bold text-[30px]" />
            <p className='text-[var(--white-primary)] text-center font-medium text-[14px] tracking-wide w-[90%]'>Global Customers</p>
          </div>
        </div>

      </div>
      <Separator />
      <div>

      </div>
    </>
  )
}

export default About
