import React, { useEffect, useState } from 'react'
import Separator from '../components/Separator'
import "../css/home.css"
import ImageFrame from '../components/ImageFrame'
import GradientText from '../components/GradientText'
import { backend, experiences, frontend, other, projects } from '../constants/info'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import TopArrow from '../assets/TopArrow'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import EducationCard from '../components/EducationCard'
import ExperienceCard from '../components/ExperienceCard'
import ProjectCard from '../components/ProjectCard'
import { FaGithub } from "react-icons/fa"
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
                <p className='text-[var(--white-primary)] text-[17px] font-semibold tracking-wide'>I am a Full Stack developer, whose passionate about developing strong and engaging web and mobile applications.</p>
                <p className='text-[var(--white-primary)] text-[12.5px] font-medium tracking-wide'>Along with that, I am an active participant in communities as a lead and member. Because I think it's important to share knowledge and learn from others, I've been able to keep up with the most recent business trends and best practises.</p>
                <div className='flex flex-col items-start gap-y-3 sm:flex-row sm:items-center sm:gapy-0 sm:gap-x-16'>
                  <div>
                    <GradientText tag="span" style={{ fontWeight: "700", fontSize: "12px", letterSpacing: "0.6px" }} text="PROJECTS DONE" />
                    <p className='font-bold text-[29px] text-[var(--white-primary)]'>15+</p>
                  </div>
                  <div>
                    <GradientText tag="span" style={{ fontWeight: "700", fontSize: "12px", letterSpacing: "0.6px" }} text="EXPERIENCE" />
                    <p className='font-bold text-[29px] text-[var(--white-primary)]'>1.4 Year</p>
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
                  {
                    frontend.map((item) => {
                      return (
                        <ImageFrame img={item.logo} name={item.name} />
                      )
                    })
                  }
                </div>
              </div>
              <div className='pt-5 flex flex-col items-start md:items-center' data-aos="fade-down">
                <GradientText tag="span" style={{ fontWeight: "700", fontSize: "18px", letterSpacing: "0.6px" }} text="Backend & Databases" />
                <div className='flex flex-wrap gap-x-3 gap-y-3 md:gap-x-6 pt-5 md:gap-y-6'>
                  {
                    backend.map((item) => {
                      return (
                        <ImageFrame img={item.logo} name={item.name} />
                      )
                    })
                  }
                </div>
              </div>
              <div className='pt-5 flex flex-col items-start md:items-end' data-aos="fade-left">
                <GradientText tag="span" style={{ fontWeight: "700", fontSize: "18px", letterSpacing: "0.6px" }} text="Other" />
                <div className='flex flex-wrap gap-x-3 gap-y-3 md:gap-x-6 pt-5 md:gap-y-6'>
                  {
                    other.map((item) => {
                      return (
                        <ImageFrame img={item.logo} name={item.name} />
                      )
                    })
                  }
                </div>
              </div>
            </section>
            <section className='pt-10 md:mx-auto max-w-7xl px-4 sm:px-10 md:px-8 flex flex-col justify-center' id='education' >
              <div className='text-center mb-12'>
                <GradientText text="Education" className="tracking-wide font-bold text-[38px] text-center mb-6" tag="span" />
              </div>
              <div className='grid gap-y-4 grid-cols-1 md:grid-cols-2 gap-x-4'>
                <EducationCard duration="2021-2025" type="Graduation" degree="Bachelor's Degree" degreeType="B-Tech" course="Computer Science Engineering" schoolName="Institute of Aeronautical Engineering" schoolLocation="Hyderabad, Telangana, India" cardType={1} />
                <EducationCard duration="2019-2021" type="High School" degree="Intermediate" course="Science (MPC)" schoolName="Narayana Junior College" schoolLocation="Hyderabad, Telangana, India" cardType={2} />
              </div>
            </section>
            <section className='pt-16 md:mx-auto max-w-7xl px-4 sm:px-10 md:px-8'>
              <div data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" id='experience'>
                <div className='text-center mb-14'>
                  <GradientText text="Experience" className="tracking-wide font-bold text-[38px]" tag="span" />
                </div>
                <div className='mt-6 mb-10 flex flex-col gap-y-7' >
                  {
                    experiences.map((experience) => {
                      return (
                        <ExperienceCard
                          company={experience.company}
                          role={experience.role}
                          duration={experience.duration}
                          logo={experience.logo}
                          description={experience.description}
                          location={experience.location}
                        />

                      )
                    })
                  }
                </div>
              </div>
            </section>
            <section className='md:mx-auto max-w-7xl pt-20 px-4 sm:px-10 md:px-8' id='projects' data-aos="zoom-out-up">
              <h2 className="font-bold tracking-[0.6px] text-center text-[33px] md:text-[40px] leading-[33px] sm:leading-0 pb-3 md:pl-2 mb-14">
                <GradientText text="Selected Projects" tag="span" />
              </h2>
              <div className='flex flex-col gap-y-5'>
                {
                  projects.map((project, index) => {
                    return (
                      <ProjectCard id={index + 1} projectName={project.name} coverImage={project.coverImage} projectDescription={project.description} technologies={project.technologies} workedOn={project.workedOn} link={project.link} />
                    )
                  })
                }
              </div>
              <div className='flex items-center justify-center w-full mt-8'>
                <button className='bg-[#feb901] transition ease duration-400 text-[#000] py-4 px-7 rounded-[30px] hover:bg-[#d39f0f]'><a className='flex items-center justify-center gap-x-2 text-[19px] font-bold' target='_blanck' href='https://github.com/ShakirFarhan'><FaGithub className='text-[25px]' /> See Github</a></button>
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