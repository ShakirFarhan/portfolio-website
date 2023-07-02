import React, { useEffect, useState } from 'react'
import Separator from '../components/Separator'
import "../css/home.css"
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
import ProjectCard from '../components/ProjectCard'
import metadata from "../assets/metadata.svg"
import chat from "../assets/chat.svg"
import blog from "../assets/blog.svg"
import nfclogo from "../assets/nfclogo.png"
import ivoyantlogo from "../assets/ivoyant-logo.png"
import elitcelerlogo from "../assets/elitceler.svg"
import youtube from "../assets/youtube.svg"
import Expandable from '../components/Expandable'
import { elitcelerInfo, ivoyantInfo, nfcInfo } from '../contants/info'
import Contact from './Contact'
import Blob from '../components/Blob'
import ExperienceCard from '../components/ExperienceCard'
import Navbar from '../components/Navbar'
import TopArrow from '../assets/TopArrow'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
function Home() {
  const [mode, setMode] = useState("dark")
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 5 seconds
    const delay = 5000;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    document.body.className = mode + '-mode';
  }, [mode]);
  return (
    <>
      {
        isLoading ? <Loading /> :
          <>
            <Navbar setMode={setMode} mode={mode} />
            <header className={`${mode === "dark" ? "hero-section" : ""}`}>
              <div className='h-fit w-full flex md:py-7 md:flex-row flex-col items-center justify-between max-w-7xl px-4 pt-10 md:pt-0 sm:px-10 md:px-8 md:gap-x-0 gap-x-6 xl:gap-x-10 md:mx-auto gap-y-0 md:gap-y-0'>

                <div className='w-[96%] md:w-[50%] flex flex-col gap-y-[20px] items-start sm:items-center justify-between md:items-start' data-aos="fade-up"
                  data-aos-duration="1000">
                  <h1 className='text-[var(--white-primary)] font-bold tracking-[0.6px] text-[33px] sm:text-[40px] sm:text-center md:text-start md:text-[30px] lg:text-[40px] leading-[39px] md:leading-[35px] lg:leading-[40px] md:leading-[36px] lg:leading-[54px]'>

                    <GradientText style={{ fontWeight: "700px" }} tag="h1" text="Hello, I am Shakir Farhan," />

                    Full stack developer based in India
                  </h1>

                  <p className='text-[var(--white-primary)] text-[13.5px] font-medium tracking-wide sm:text-center md:text-start'>If your Looking for a developer who can work on both web and app projects and is willing to try out new roles? or if you need a versatile and motivated developer, feel free to reach out to me.</p>
                  <div className='flex sm:gap-x-3 gap-y-3 sm:gap-y-0 flex-col sm:flex-row'>
                    <a href='#contact' rel="noreferrer" className='gitintouchBTN px-6 py-3 rounded-[20px]  text-[var(--white-primary)]  font-bold tracking-[0.5px] text-[12px]'>GET IN TOUCH</a>
                    <button className='connectBTN px-6 py-3 rounded-[20px] border-[1px] border-[var(--white-secondary)] z-10 text-[var(--white-primary)] font-semibold tracking-[0.5px] text-[12px] hover:transform'><a href="https://drive.google.com/file/d/1H3dZO7LBDjy1skcQhrYBL9WBLe46yn2m/view?usp=sharing" target='_blanck'>SEE MY RESUME</a></button>

                  </div>
                </div>
                <div className='sm:w-[70%] md:w-[40%] flex items-start md:items-center justify-center' data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="500">
                  <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_IhrJN647CW.json" speed="1" className='h-[340px] sm:h-[400px] sm:w-[55%] md:w-fit hero-image' loop autoplay></lottie-player>

                </div>
              </div>
            </header>

            <Separator />
            <section className='mx-auto max-w-7xl pt-20 flex flex-col md:flex-row justify-start  md:items-center md:justify-between px-4 sm:px-10 md:px-8'>
              <div className='flex flex-col items-start gap-y-2 md:gap-y-3 pb-6 md:w-[30%] lg:w-[35%] xl:w-[40%] md:pb-0' data-aos="fade-up-right">

                <GradientText tag="h6" style={{ fontWeight: "700", fontSize: "18px", letterSpacing: "0.6px" }} text="Shakir Farhan" />
                <h3 className='font-bold text-[26px] tracking-wide text-[var(--white-primary)]'>Full Stack Developer </h3>
              </div>
              <div className='md:w-[70%] lg:w-[60%] xl:w-[52%] flex flex-col gap-y-5' data-aos="fade-up-left">
                <p className='text-[var(--white-primary)] text-[16.5px] font-semibold tracking-wide'>I am a Full Stack developer, whose passionate about developing strong and engaging web and mobile applications.</p>
                <p className='text-[var(--white-primary)] text-[11.5px] font-medium tracking-wide'>Along with that, I am an active participant in communities as a lead and member. Because I think it's important to share knowledge and learn from others, I've been able to keep up with the most recent business trends and best practises.</p>
                <div className='flex flex-col items-start gap-y-3 sm:flex-row sm:items-center sm:gapy-0 sm:gap-x-16'>
                  <div>


                    <GradientText tag="span" style={{ fontWeight: "700", fontSize: "12px", letterSpacing: "0.6px" }} text="PROJECTS DONE" />

                    <p className='font-bold text-[29px] text-[var(--white-primary)]'>14+</p>
                  </div>
                  <div>


                    <GradientText tag="span" style={{ fontWeight: "700", fontSize: "12px", letterSpacing: "0.6px" }} text="EXPERIENCE" />

                    <p className='font-bold text-[29px] text-[var(--white-primary)]'>1 Year</p>
                  </div>
                  <div>

                    <GradientText tag="span" style={{ fontWeight: "700", fontSize: "12px", letterSpacing: "0.6px" }} text="CLIENTS SATISFACTION" />

                    <p className='font-bold text-[29px] text-[var(--white-primary)]'>100%</p>
                  </div>
                </div>
              </div>
            </section>
            {/*  */}
            <section className='mx-auto max-w-7xl pt-20 px-4 sm:px-10 md:px-8'>
              <h2 className='text-[30px] text-[var(--white-primary)] font-bold tracking-wider'>What I do.</h2>
              <div className='pt-5' data-aos="fade-right" id='skills'>

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
              <div className='pt-5 flex flex-col items-start md:items-center' data-aos="fade-down">

                <GradientText tag="span" style={{ fontWeight: "700", fontSize: "18px", letterSpacing: "0.6px" }} text="Backend & Databases" />

                <div className='flex flex-wrap gap-x-3 gap-y-3 md:gap-x-6 pt-5 md:gap-y-6'>
                  <ImageFrame img={node} name="Node JS" />
                  <ImageFrame img={express} name="Express JS" />
                  <ImageFrame img={nest} name="Nest JS" />
                  <ImageFrame img={mongodb} name="MongoDB" />
                  <ImageFrame img={postgres} name="PostgresSQL" />
                </div>

              </div>
              <div className='pt-5 flex flex-col items-start md:items-end' data-aos="fade-left">
                <GradientText tag="span" style={{ fontWeight: "700", fontSize: "18px", letterSpacing: "0.6px" }} text="Other" />

                <div className='flex flex-wrap gap-x-3 gap-y-3 md:gap-x-6 pt-5 md:gap-y-6'>
                  <ImageFrame img={git} name="Git" />
                  <ImageFrame img={github} name="Github" />
                  <ImageFrame img={docker} name="Docker" />
                  <ImageFrame img={java} name="Java" />
                  <ImageFrame img={python} name="Python" />
                </div>

              </div>
            </section>
            <section className='md:mx-auto max-w-7xl pt-20 px-4 sm:px-10 md:px-8' id='projects' data-aos="zoom-out-up">
              <h2 className="font-bold tracking-[0.6px] text-[33px] md:text-[40px] leading-[33px] sm:leading-0 pb-3 md:pl-2">

                <GradientText text="Selected Projects" tag="span" />
              </h2>
              <p className='text-[#f0f2f5] text-[13.5px] font-medium tracking-wide w-[94%] md:w-[45%] lg:w-[35%] md:pl-2' >Printer took a galley of type and scrambled it to make a type specimen book. It has survived</p>

              <div className='py-3 flex items-center gap-x-10 overflow-x-scroll project-section pl-2'>
                <ProjectCard name="Real Time Chat Application" className="bg-[#FFFF00]" language="Javascript" info="The Real-Time Messaging App is a dynamic website built using the MERN stack, consisting of MongoDB, Express, React, and Node.js...." image={chat} link="https://github.com/ShakirFarhan/Realtime-Chat" />
                <ProjectCard name="Youtube Clone" language="Javascript" className="bg-[#FFFF00]" info="A YouTube clone built using React JS, Redux, Tailwind CSS, and a Rapid API." image={youtube} link="https://github.com/ShakirFarhan/Youtube-Clone" />
                <ProjectCard name="Blogging Website" language="Javascript" className="bg-[#FFFF00]" info="A comprehensive blogging website built using MERN Stack that includes all of the functionality that a modern blogging website should have..." image={blog} link="https://github.com/ShakirFarhan/Blogging-Website" />
                <ProjectCard name="Metadata Extractor" language="Typescript" className="bg-[#0076c6]" info="The Database Metadata Extractor is a API that aims to simplify the process of querying data from Postgres databases. This project provides..." image={metadata} link="https://github.com/ShakirFarhan/Metadata-Extractor" />
                <div className='flex items-center'>
                  <a className='text-[var(--white-primary)] text-center font-bold tracking-wide' target='_blank' rel="noreferrer" href='https://github.com/ShakirFarhan?tab=repositories'>MORE PROJECTS</a>
                </div>
              </div>
            </section>


            <section className='pt-10 md:mx-auto max-w-7xl px-4 sm:px-10 md:px-8' id='education' >
              <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <GradientText text="Education" className="tracking-wide font-bold text-[38px]" tag="span" />


                <div className='flex flex-col-reverse md:flex-row jusitify-between items-center md:gap-x-3 lg:gap-x-14 pt-5 md:pt-0'>

                  <div className='flex flex-col gap-y-8 w-[100%] md:w-[65%] lg:w-[60%]' >
                    <Expandable name="Institute Of Aeronautical Engineering" role="B-TECH Computer Science" duration="2021-2025" />
                    <Expandable name="Narayan College" role="Intermediate MPC" duration="2019-2021" />
                  </div>
                  <div className='relative w-[100%] md:w-[400px] h-[320px] md:h-[370px]' data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <Blob className="absolute w-[440px] md:w-[550px] left-[60px] sm:left-[75px] -top-20 md:-top-28 md:-left-20" color1="#dba440" color2="#ef02ff" />
                    <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_TBKozE.json" background="transparent" speed="1" loop autoplay></lottie-player>
                  </div>
                </div>

              </div>

              <div data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" id='experience'>

                <GradientText text="Experience" className="tracking-wide font-bold text-[38px]" tag="span" />

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 mt-6 mb-10' >


                  <ExperienceCard role="Software Engineer Intern" duration="April 2023 - Present" color="#1E1E1E" points={ivoyantInfo} companyname="Ivoyant" companylogo={<img className='w-[120px] h-[120px] text-[var(--white-secondary)] p-4' src={ivoyantlogo} alt='Company Logo' />} />
                  <ExperienceCard role="Full Stack Developer (Freelancer)" duration="June 2023 - Present" color="#22262a" points={elitcelerInfo} companyname="Elitceler" companylogo={<img className='w-[120px] h-[120px] text-[var(--white-secondary)]' src={elitcelerlogo} alt='Company Logo' />} />
                  <ExperienceCard role="Frontend Developer Intern (React JS)" duration="June 2022 - Dec 2022" color="#464646" points={nfcInfo} companyname="NFC Solutions" companylogo={<img className='w-[120px] h-[120px] text-[var(--white-secondary)]' src={nfclogo} alt='Company Logo' />} />

                </div>
              </div>
            </section>

            <Contact />
            <TopArrow />

            <Footer />

          </>
      }
    </>

  )
}

export default Home