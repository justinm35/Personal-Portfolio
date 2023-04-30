import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import { Footer } from "./Footer"
import { useEffect } from "react"
import { logEvent } from "firebase/analytics"
import { analytics } from "../main"

export const Resume = () => {

  useEffect(() => {
    logEvent(analytics, 'page_view', {name: 'Resume'})
  },[])

  return (
    <AnimatePresence >
    <motion.div 
      initial={{opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-10/12 md:w-3/4 lg:w-3/6 mx-auto flex-row mt-6 sm:mt-24">
      <div className="w-full">
        <ul className="space-y-3">
        <li>
            <h2 className="font-poppins text-md font-normal text-purple-500 mb-0.5 mt-8">Skills</h2>
            <p className='font-poppins font-semibold text-sm sm:text-md w-full sm:w-full'>HTML/CSS • NodeJS • ReactJS • JavaScript/TypeScript • Redux • RTK Query • Mongoose • ExpressJS • TailwindCSS • MaterialUI • React Router • Puppeteer • Git • Postman</p>
          </li>
          <li>
          <h2 className="font-poppins text-md font-normal text-purple-500 mb-0.5 mt-8">Experience</h2>
              <div className="w-full flex justify-between font-poppins font-normal mb-0.5 flex-wrap text-zinc-500">
                <h1 className="text-sm sm:text-md basis-5/6 flex-grow text-zinc-800 font-semibold">Lead Installer & Operations Manager at <span className='underline decoration-2 underline-offset-2'>Thunder Graphics Inc.</span></h1>
                <h2 className="font-poppins text-zinc-400 text-xs sm:text-sm">Sep 19 - Feb 22</h2>
              </div>
              <p className="w-full sm:w-full font-poppins font-light text-sm sm:text-md text-zinc-800">
                Led the successful implementation and transition of our organization to a cloud-based work order 
                and accounting system. This resulted in a significant boost in workflow efficiency. By collaborating 
                regularly with cross-functional teams, I ensured that projects were delivered on time and within 
                stakeholders' deadlines and budgets. In addition, I actively engaged with external clients and suppliers 
                to address and resolve issues. This minimized obstacles for internal teams and fostered a more streamlined 
                work environment.</p>
          </li>
          <li>
              <div className="w-full flex justify-between font-poppins font-normal mb-0.5 flex-wrap">
                <h1 className="text-sm sm:text-md basis-5/6 flex-grow text-zinc-800 font-semibold">Manager at <span className='underline decoration-2 underline-offset-2'>Global Pet Foods Inc.</span></h1>
                <h2 className="font-poppins text-zinc-400 text-xs sm:text-sm">Jun 18 - Feb 21</h2>
              </div>
              <p className="w-full sm:w-full font-poppins font-light text-sm sm:text-md text-zinc-800">
                I effectively managed team of up to 13 members, meeting demanding deadlines and surpassing 
                customer expectations. By setting daily and weekly objectives, I emphasized efficient resource 
                allocation and teamwork to boost the team's performance and ensure the prompt completion of 
                tasks and deadlines. Additionally, I mentored and trained junior team members in daily operations 
                and leadership, fostering high levels of team performance and efficiency.</p>
          </li>
          <li>
          <h2 className="font-poppins text-md font-normal text-purple-500 mb-0.5 mt-8">Education</h2>
            <div className="flex justify-items-stretch space-x-20">
              <div className='font-poppins font-normal mb-1.5'>
                <h3 className="text-sm sm:text-md font-semibold">Business & Entrepenurship</h3>
                <h3 className="font-poppins font-light text-sm mb-2">Toronto Metropoliton University</h3>
                <p className="font-poppins text-zinc-400 text-xs sm:text-sm">2020 - 2022</p>
                <p> </p>
              </div>
              <div className='font-poppins font-normal'>
                <h3 className="text-sm sm:text-md font-semibold">Project Management</h3>
                <h3 className="font-poppins font-light text-sm mb-2">Toronto Metropoliton University</h3>
                <p className="font-poppins text-zinc-400 text-xs sm:text-sm">2022 - 2024</p>
              </div>
            </div>  
          </li>
          <li>
          <h2 className="font-poppins text-md font-normal text-purple-500 mb-0.5 mt-8">Soft Skills</h2>
            <p className='font-poppins font-light text-sm sm:text-md w-full sm:w-2/3'>Collaboration • Problem Solving • Leadership • Time Management</p>
          </li>
        </ul>
      </div>
      <Footer/>
    </motion.div>
    </AnimatePresence>
  )
}
