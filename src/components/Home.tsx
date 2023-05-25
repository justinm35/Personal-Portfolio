import { Footer } from "./Footer"
import { motion } from "framer-motion"
import Peng from "./Peng"
import Typewriter from 'typewriter-effect';



export const Home = () => {

  return (
    <div className=" max-h-screen absolute -z-10 bottom-0 top-0 left-0 right-0 overflow-hidden">
      <div className="w-10/12 md:w-3/4 lg:w-3/6 mx-auto">
        <div className="flex">
        <motion.h1 
          initial={{ x:-150 ,opacity: 0 }}
          animate={{ x:0, opacity: 1 }}
          exit={{ x:150, opacity: 0 }}
          className="text-3xl md:text-4xl mt-60 sm:mt-64 leading-relaxed w-full font-poppins font-bold">
            <p>Hey there, I'm Justin!</p>
            <div className="flex py-2">
            A&nbsp;
            <Typewriter options={{strings: ['Software Enginner', 'Globetrotter', 'Problem Solver'], autoStart: true,loop: true,}}/>
            </div> 
            <p>based in Toronto</p>
        </motion.h1>
        </div>
        <Footer/>
        <Peng/>
      </div>

    </div>
  )
}


