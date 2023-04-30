import { Footer } from "./Footer"
import { motion } from "framer-motion"
import Peng from "./Peng"
import { useEffect } from "react"
import { logEvent } from "firebase/analytics"
import { analytics } from "../main"
import Typewriter from 'typewriter-effect';



export const Home = () => {
  useEffect(() => {
    logEvent(analytics, 'page_view', {name: 'Contact'})
  },[])


  return (
    <div className=" max-h-screen absolute -z-10 bottom-0 top-0 left-0 right-0 overflow-hidden">
      <div className="w-10/12 md:w-3/4 lg:w-3/6 mx-auto">
        <div className="flex">
        <motion.h1 
          initial={{ x:-150 ,opacity: 0 }}
          animate={{ x:0, opacity: 1 }}
          exit={{ x:150, opacity: 0 }}
          className="text-4xl md:text-4xl mt-60 sm:mt-64 leading-relaxed w-full max-w-2xl font-poppins font-bold">
            Hey there, I'm Justin! <br/> A <Typewriter
                options={{
                  strings: ['Software Enginner', 'Globetrotter', 'Problem Solver'],
                  autoStart: true,
                  loop: true,
                }}/> based in Toronto
        </motion.h1>
        </div>
        <Footer/>
        <Peng/>
      </div>

    </div>
  )
}

