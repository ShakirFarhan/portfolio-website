import React from 'react'
import Separator from '../components/Separator'
import "../css/home.css"
import { FaPeopleArrows } from "react-icons/fa"
import java from "../assets/java.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import typescript from "../assets/typescript.png"
import git from "../assets/git.png"
import docker from "../assets/docker.png"
import github from "../assets/github.png"
import redux from "../assets/redux.png"
import zustand from "../assets/zustand.png"
import python from "../assets/python.png"
import node from "../assets/node.png"
import express from "../assets/express.png"
import nest from "../assets/nest.svg"
import react from "../assets/react.png"
import mongodb from "../assets/mongodb.png"
import postgres from "../assets/postgres.png"
import ImageFrame from '../components/ImageFrame'
import GradientText from '../components/GradientText'
function Home() {
  return (

    <>
      <div className='h-fit w-full flex md:flex-row flex-col items-center justify-between max-w-7xl px-4 sm:px-10 md:px-8 md:gap-x-0 lg:gap-x-10 md:mx-auto gap-y-6 md:gap-y-0'>

        <div className='w-[96%] md:w-[50%] flex flex-col gap-y-[20px] items-start sm:items-center justify-between md:items-start'>
          <h1 className='text-[var(--white-primary)] font-bold tracking-[0.6px] text-[33px] sm:text-[40px] sm:text-center md:text-start md:text-[34px] lg:text-[40px] leading-[40px] md:leading-[36px] lg:leading-[54px]'>

            <GradientText style={{ fontWeight: "700px" }} tag="h1" text="Hello, I am Shakir Farhan," />

            Full stack developer based in India
          </h1>

          <p className='text-[#eff1f4] text-[13.5px] font-medium tracking-wide sm:text-center md:text-start'>Printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
          <div className='flex sm:gap-x-3 gap-y-3 sm:gap-y-0 flex-col sm:flex-row'>
            <button className='gitintouchBTN px-6 py-3 rounded-[20px]  text-[var(--white-primary)] font-semibold tracking-[0.5px] text-[12px]'>GET IN TOUCH</button>
            <button className='connectBTN px-6 py-3 rounded-[20px] border-[1px] border-[var(--white-secondary)] text-[var(--white-primary)] font-semibold tracking-[0.5px] text-[12px]'>VIEW ALL WORKS</button>

          </div>
        </div>
        <div className='w-[100%] md:w-[40%] flex items-start md:items-center justify-center'>
          <img className='h-[340px] sm:h-[400px] sm:w-[55%] md:w-fit' src='https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=' alt="Profile" />
        </div>
      </div>
      {/*  */}
      <Separator />
      {/*  */}
      <div className='md:mx-auto max-w-7xl pt-20 px-4 sm:px-10 md:px-8'>

        <GradientText className="font-bold tracking-[0.6px] text-[33px] md:text-[40px] leading-[33px] sm:leading-0 pb-5" style={{ fontWeight: "700", background: "linear-gradient(to right, #B16CEA 0%, #FF5E69 20%, #FF8A56 30%, #FFA84B 250%)" }} text="Selected Projects" />
        <p className='text-[#f0f2f5] text-[13.5px] font-medium tracking-wide w-[94%] md:w-[45%] lg:w-[35%]'>Printer took a galley of type and scrambled it to make a type specimen book. It has survived</p>
        <div className='pt-9 flex flex-col gap-y-[40px]'>
          <div className="relative group">
            <img
              className="w-full h-[400px] object-cover project-img"
              src="https://images.alphacoders.com/598/598378.jpg"
              alt="project-1"
            />
            <div className="absolute bottom-4 left-4 flex flex-col items-start gap-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h4 className="text-[30px] font-bold tracking-wide text-[var(--white-secondary)]">Project Name</h4>
              <h6 className="font-semibold text-[17px] text-[var(--white-secondary)] tracking-wide">Technology</h6>
              <div className="flex items-center gap-x-4">
                <button className="px-6 py-2 rounded-[20px] border-[1px] border-[var(--white-secondary)] text-[var(--white-primary)] font-semibold tracking-[0.5px] text-[12px]">Hosted Site</button>
                <button className="px-6 py-2 rounded-[20px] border-[1px] border-[var(--white-secondary)] text-[var(--white-primary)] font-semibold tracking-[0.5px] text-[12px]">Github</button>
                <button className="px-6 py-2 rounded-[20px] border-[1px] border-[var(--white-secondary)] text-[var(--white-primary)] font-semibold tracking-[0.5px] text-[12px]">Youtube Demo</button>
              </div>
            </div>
          </div>


          <div className="relative group">
            <img
              className="w-full h-[400px] object-cover project-img"
              src="https://img1.wallspic.com/crops/1/8/6/1/4/141681/141681-sky-atmosphere-night-landscape-glacier-4000x2666.jpg"
              alt="project-1"
            />
            <div className="absolute bottom-4 left-4 flex flex-col items-start gap-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h4 className="text-[30px] font-bold tracking-wide text-[var(--white-secondary)]">Project Name</h4>
              <h6 className="font-semibold text-[17px] text-[var(--white-secondary)] tracking-wide">Technology</h6>
              <div className="flex items-center gap-x-4">
                <button className="px-6 py-2 rounded-[20px] border-[1px] border-[var(--white-secondary)] text-[var(--white-primary)] font-semibold tracking-[0.5px] text-[12px]">Hosted Site</button>
                <button className="px-6 py-2 rounded-[20px] border-[1px] border-[var(--white-secondary)] text-[var(--white-primary)] font-semibold tracking-[0.5px] text-[12px]">Github</button>
                <button className="px-6 py-2 rounded-[20px] border-[1px] border-[var(--white-secondary)] text-[var(--white-primary)] font-semibold tracking-[0.5px] text-[12px]">Youtube Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className='mx-auto max-w-7xl pt-20 flex flex-col md:flex-row justify-start  md:items-center md:justify-between px-4 sm:px-10 md:px-8'  >
        <div className='flex flex-col items-start gap-y-2 md:gap-y-3 pb-6 md:w-[30%] lg:w-[35%] xl:w-[40%] md:pb-0'>

          <GradientText tag="h6" style={{ fontWeight: "700", fontSize: "18px", letterSpacing: "0.6px" }} text="Shakir Farhan" />
          <h3 className='font-bold text-[26px] tracking-wide text-[var(--white-primary)]'>Full Stack Developer </h3>
        </div>
        <div className='md:w-[70%] lg:w-[60%] xl:w-[52%] flex flex-col gap-y-5'>
          <p className='text-[var(--white-primary)] text-[16.5px] font-semibold tracking-wide'>Printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
          <p className='text-[var(--white-primary)] text-[11.5px] font-medium tracking-wide'>Printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
          <div className='flex flex-col items-start gap-y-3 sm:flex-row sm:items-center sm:gapy-0 sm:gap-x-16'>
            <div>


              <GradientText tag="span" style={{ fontWeight: "700", fontSize: "12px", letterSpacing: "0.6px" }} text="PROJECTS DONE" />

              <p className='font-bold text-[29px] text-[var(--white-primary)]'>15+</p>
            </div>
            <div>


              <GradientText tag="span" style={{ fontWeight: "700", fontSize: "12px", letterSpacing: "0.6px" }} text="EXPERIENCE" />

              <p className='font-bold text-[29px] text-[var(--white-primary)]'>1+ Years</p>
            </div>
            <div>

              <GradientText tag="span" style={{ fontWeight: "700", fontSize: "12px", letterSpacing: "0.6px" }} text="CLIENTS SATISFACTION" />

              <p className='font-bold text-[29px] text-[var(--white-primary)]'>100%</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='mx-auto max-w-7xl pt-20 px-4 sm:px-10 md:px-8'>
        <h2 className='text-[30px] text-[var(--white-primary)] font-bold tracking-wider'>What I do.</h2>
        <div className='pt-5'>

          <GradientText tag="h5" style={{ fontWeight: "700", fontSize: "18px", letterSpacing: "0.6px" }} text="Frontend" />

          <div className='flex flex-wrap gap-x-3 gap-y-3 md:gap-x-6 pt-5 md:gap-y-6'>
            <ImageFrame img={html} name="HTML" />
            <ImageFrame img={css} name="CSS" />

            <ImageFrame img={javascript} name="Javascript" />

            <ImageFrame img={typescript} name="Typescript" />
            <ImageFrame img={react} name="React" />

            <ImageFrame img={react} name="React Native" />
            <ImageFrame img={redux} name="Redux" />
            <ImageFrame img={zustand} name="Zustand" />

          </div>

        </div>
        <div className='pt-5 flex flex-col items-start md:items-center'>

          <GradientText tag="span" style={{ fontWeight: "700", fontSize: "18px", letterSpacing: "0.6px" }} text="Backend & Databases" />

          <div className='flex flex-wrap gap-x-3 gap-y-3 md:gap-x-6 pt-5 md:gap-y-6'>
            <ImageFrame img={node} name="Node JS" />
            <ImageFrame img={express} name="Express JS" />
            <ImageFrame img={nest} name="Nest JS" />
            <ImageFrame img={mongodb} name="MongoDB" />
            <ImageFrame img={postgres} name="PostgresSQL" />
          </div>

        </div>
        <div className='pt-5 flex flex-col items-start md:items-end'>
          <GradientText tag="span" style={{ fontWeight: "700", fontSize: "18px", letterSpacing: "0.6px" }} text="Other" />

          <div className='flex flex-wrap gap-x-3 gap-y-3 md:gap-x-6 pt-5 md:gap-y-6'>
            <ImageFrame img={git} name="Git" />
            <ImageFrame img={github} name="Github" />
            <ImageFrame img={docker} name="Docker" />
            <ImageFrame img={java} name="Java" />
            <ImageFrame img={python} name="Python" />
          </div>

        </div>
      </div>

      {/*  */}
      <div className='mx-auto max-w-7xl py-20 relative'>
        <div className='flex flex-col items-between items-between w-[90%] md:w-[75%] relative left-[4%] md:left-[12%] gap-y-5'>

          <h2 className='text-[var(--white-primary)] font-bold tracking-wide text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[40px]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore explicabo laboriosam corporis quo est enim? Eligendi.
          </h2>

          <button className='flex items-center gap-x-1 relative w-fit text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[40px]' style={{ background: "linear-gradient(to right, #B16CEA 1%, #FF5E69 71%, #FF8A56 91%, #FFA84B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "700" }}>
            Let's Work Together <FaPeopleArrows className='min-w-[34px] h-[34px] fill-[#FF5E69]' />
            <span className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FF8A56]"></span>
          </button>

        </div>
      </div>
    </>

  )
}

export default Home