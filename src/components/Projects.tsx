// import wwprojectimg from '../assets/wwprojectimg.png'
// import keebinvprojectimg from '../assets/keebinvprojectimg.png'
// import { Timeline } from 'antd'
// import { LayoutGroup, motion } from 'framer-motion'
// import { useState } from 'react'

import wwprojectimg from '../assets/wwprojectimg.png'
import keebinvprojectimg from '../assets/keebinvprojectimg.png'
import wwlaptop from '../assets/WorldWanderLaptop.png'
import keebinvlaptop from '../assets/KeebInvLaptop.png'
import rechatlaptop from '../assets/ReChatLaptop.png'
import { Timeline, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { LayoutGroup, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { GithubOutlined, LinkOutlined } from '@ant-design/icons'
import { logEvent } from "firebase/analytics"
import { analytics } from "../main"


export const Projects = () => {
  useEffect(() => {
    logEvent(analytics, 'page_view', {name: 'Projects'})
  },[])
  const [toggleSeeMore1, setToggleSeeMore1] = useState(false)
  const [toggleSeeMore2, setToggleSeeMore2] = useState(false)
  const [toggleSeeMore3, setToggleSeeMore3] = useState(false)
  const variants = {
    visible: { 
      x:0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
     },
    hidden: { 
      x:-50, 
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
     },
  }
  return (
    <>
    <div className="w-10/12 md:w-3/4 lg:w-3/6 mx-auto flex-row mt-6 sm:mt-24">
      <h2 className="font-poppins text-md font-normal text-purple-400">Projects</h2>
      <div className="mt-5 w-full">
      <LayoutGroup>
      {/*Project 1*/}
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={variants} 
            className="w-full max-w-5xl md:max-w-3xl flex md:flex-row flex-col mb-10 justify-start items-center">
          <div className="w-fit flex flex-col justify-items-start items-end">
            <img src={wwlaptop} loading="eager" className="w-full transition object-scale-down hover:scale-100 sm:hover:scale-125 max-w-lg z-10"/>
          </div>
          <div className="w-full pl-1 md:pl-3 max-w-sm md:max-w-full relative">
            <h3 className=" font-poppins font-semibold text-lg pt-3 md:pt-0 text-zinc-700">World Wander</h3>
            <p className="font-inter font-light text-sm text-zinc-700 leading-5 pb-1 md:pb-2 m-0 pt-0">
            This MERN app allows users to showcase their adventures through "Wanders", pins and markers 
            on an interactive globe. Each Wander includes pictures, blog text, and date information. 
            The app features smooth user authorization, routing, and real-time UI updates to handle database changes efficiently.</p>
            <Button onClick={()=>setToggleSeeMore1((x)=>!x)} className=" font-poppins font-normal text-zinc-700 my-2" size="middle" icon={<DownOutlined className="transition text-md transform -translate-y-0.5" rotate={toggleSeeMore1 ? 180 : 0}/>}>Info & Links</Button>
            {toggleSeeMore1 && <motion.div className="space-y-1 absolute p-5 rounded-md shadow-xl bg-white bg-opacity-60 backdrop-blur-lg border border-zinc-400 z-20">
              <p className="font-inter font-light text-md text-zinc-700 leading-5 pb-4"><span className="font-medium">Stack: </span>React • Node JS • React Router • TailwindCSS • Redux • RTK Query • Mongoose • MongoDB • Express • TypeScript</p>
              <div className="flex items-centercenter space-x-2 mt-2">
              <GithubOutlined style={{ fontSize: '23px', color: '#3f3f46' }} className="pb-2"/>
              <a className="font-poppins hover:underline text-zinc-700" href="https://github.com/justinm35/world-wander-project">github.com/justinm35/world-wander-project</a>
            </div>
            <div className="flex items-centercenter space-x-2">
              <LinkOutlined style={{ fontSize: '23px', color: '#3f3f46' }} className="pb-2"/>
              <a className="font-poppins hover:underline text-zinc-700" href="https://worldwander.justinm.dev">worldwander.justinm.dev</a>
            </div>
            </motion.div>}
          </div>
        </motion.div>

        {/*Project 2*/}
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={variants} 
            className="w-full max-w-5xl md:max-w-3xl flex md:flex-row flex-col mb-16 justify-start items-center">
          <div className="w-fit flex flex-col justify-items-start items-end">
            <img src={keebinvlaptop} loading="eager" className="w-full transition object-scale-down hover:scale-100 sm:hover:scale-125 max-w-lg z-10 mb-auto"/>
          </div>
          <div className="w-full pl-1 md:pl-3 max-w-sm md:max-w-full relative">
            <h3 className=" font-poppins font-semibold text-lg pt-3 md:pt-0 text-zinc-700">KeebInv</h3>
            <p className="font-inter font-light text-sm text-zinc-700 leading-5 pb-1 md:pb-2 m-0 pt-0">
              A streamlined web scraper that allows users to search and compare inventory, sales, and prices 
              across multiple of the top keyboard part websites catering to the Canadian market. With this 
              efficient tool, users can conveniently evaluate and contrast product offerings to make 
              informed purchasing decisions.</p>
            <Button onClick={()=>setToggleSeeMore2((x)=>!x)} className=" font-poppins font-normal text-zinc-700 my-2" size="middle" icon={<DownOutlined className="transition text-md transform -translate-y-0.5" rotate={toggleSeeMore2 ? 180 : 0}/>}>Info & Links</Button>
            {toggleSeeMore2 && <motion.div className="space-y-1 absolute p-5 rounded-md shadow-xl backdrop-blur-lg bg-opacity-60  border border-zinc-400 z-20">
            <div className="flex items-centercenter space-x-2 mt-2">
              <GithubOutlined style={{ fontSize: '23px', color: '#3f3f46' }} className="pb-2"/>
              <a className="font-poppins hover:underline text-zinc-700" href="https://github.com/justinm35/keeb-inv-project">github.com/justinm35/keeb-inv-project</a>
            </div>
            <div className="flex items-centercenter space-x-2">
              <LinkOutlined style={{ fontSize: '23px', color: '#3f3f46' }} className="pb-2"/>
              <a className="font-poppins hover:underline text-zinc-700" href="https://keebinv.justinm.dev">keebinv.justinm.dev</a>
            </div>
            <p className="font-poppins font-light text-md text-zinc-700 leading-5 pb-1"><span className="font-medium">Stack: </span>React • Node JS • Puppeteer • Ant Design • Express</p>
            <p className="font-poppins font-light text-md text-zinc-700 leading-5 pb-3"><span className="font-medium">Description: </span>Built a web scraper with a client side ReactJS interface, using Ant Design as the CSS component library. Paired with a server side scraper running on a Puppeteer instance of a headless Chromium browser, and Express for the api endpoints. </p>
            </motion.div>}
          </div>
        </motion.div>

         {/*Project 3*/}
         <motion.div 
            initial="hidden"
            animate="visible"
            variants={variants} 
            className="w-full max-w-5xl md:max-w-3xl flex md:flex-row flex-col mb-16 justify-start items-center">
          <div className="w-fit flex flex-col justify-items-start items-end">
            <img src={rechatlaptop} loading="eager" className="w-full transition object-scale-down hover:scale-100 sm:hover:scale-125 max-w-lg z-10 mb-auto"/>
          </div>
          <div className="w-full pl-1 md:pl-3 max-w-sm md:max-w-full relative">
            <h3 className=" font-poppins font-semibold text-lg pt-3 md:pt-0 text-zinc-700">ReChat Messenger</h3>
            <p className="font-inter font-light text-sm text-zinc-700 leading-5 pb-1 md:pb-2 m-0 pt-0">
            This simple messenger app project also incorporates Google OAuth, providing a secure and convenient 
            way for users to log in and access their chat history across multiple devices. With Google OAuth, users 
            can enjoy a seamless authentication process and rest assured that their personal information is protected.</p>
            <Button onClick={()=>setToggleSeeMore3((x)=>!x)} className=" font-poppins font-normal text-zinc-700 my-2" size="middle" icon={<DownOutlined className="transition text-md transform -translate-y-0.5" rotate={toggleSeeMore3 ? 180 : 0}/>}>Info & Links</Button>
            {toggleSeeMore3 && <motion.div className="space-y-1 absolute p-5 rounded-md shadow-xl bg-opacity-60 backdrop-blur-lg border border-zinc-400 z-20">
            <div className="flex items-centercenter space-x-2 mt-2">
              <GithubOutlined style={{ fontSize: '23px', color: '#3f3f46' }} className="pb-2"/>
              <a className="font-poppins hover:underline text-zinc-700" href="https://github.com/justinm35/Re-Chat">github.com/justinm35/Re-Chat</a>
            </div>
            <div className="flex items-centercenter space-x-2">
              <LinkOutlined style={{ fontSize: '23px', color: '#3f3f46' }} className="pb-2"/>
              <a className="font-poppins hover:underline text-zinc-700" href="https://keebinv.justinm.dev">keebinv.justinm.dev</a>
            </div>
            <p className="font-poppins font-light text-md text-zinc-700 leading-5 pb-1"><span className="font-medium">Stack: </span>React • Next JS • Redis • Next Auth •TailwindCSS • TypeScript • Pusher</p>
            <p className="font-poppins font-light text-md text-zinc-700 leading-5 pb-3"><span className="font-medium">Description: </span>
            This messenger app project is built using Redis and Next.js for efficient data storage with quick and protected routing. 
            The immediate refresh and push notifications are powered by the Pusher Channels API.
            It also incorporates a Google OAuth implementation powered by Next Auth for secure user authentication and authorization. 
            A easy to navigate and responsive UI was built using TailwindCSS.</p>
            </motion.div>}
          </div>
        </motion.div>
        </LayoutGroup>
      </div>
      
    </div>
</>
  )
}
