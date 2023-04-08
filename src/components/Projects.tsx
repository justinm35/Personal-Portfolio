// import wwprojectimg from '../assets/wwprojectimg.png'
// import keebinvprojectimg from '../assets/keebinvprojectimg.png'
// import { Timeline } from 'antd'
// import { LayoutGroup, motion } from 'framer-motion'
// import { useState } from 'react'

import wwprojectimg from '../assets/wwprojectimg.png'
import keebinvprojectimg from '../assets/keebinvprojectimg.png'
import { Timeline, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { LayoutGroup, motion } from 'framer-motion'
import { useState } from 'react'
import { GithubOutlined, LinkOutlined } from '@ant-design/icons'

export const Projects = () => {
  const [toggleSeeMore1, setToggleSeeMore1] = useState(false)
  const [toggleSeeMore2, setToggleSeeMore2] = useState(false)
  const variants = {
    visible: { 
      x:0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 10,
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
            className="w-full max-w-5xl md:max-w-3xl flex md:flex-row flex-col mb-10 justify-start">
          <div className="w-fit flex flex-col justify-items-start items-end">
            <img src={wwprojectimg} loading="eager" className="w-full transition object-scale-down hover:scale-100 sm:hover:scale-125 hover:shadow-none sm:hover:shadow-lg max-w-lg z-10"/>
          </div>
          <div className="w-full pl-1 md:pl-3 max-w-sm md:max-w-full">
            <h3 className=" font-poppins font-semibold text-lg pt-3 md:pt-0 text-zinc-700">World Wander</h3>
            <p className="font-poppins font-light text-md text-zinc-700 leading-5 pb-1 md:pb-2 m-0 pt-0">This beautiful and responsive website allows users to share their adventures from around the world in a globe format. Enabling sharing on Instagram, Twitter, and Facebook, or on the WorldWander discovery page, allowing you to share your experiences with the world more effectively.</p>
            <Button onClick={()=>setToggleSeeMore1((x)=>!x)} className=" font-poppins font-normal text-zinc-700 my-2" size="middle" icon={<DownOutlined className="transition text-md transform -translate-y-0.5" rotate={toggleSeeMore1 ? 180 : 0}/>}>Info & Links</Button>
            {toggleSeeMore1 && <motion.div className="space-y-1">
              <div className="flex items-centercenter space-x-2 mt-2">
              <GithubOutlined style={{ fontSize: '23px', color: '#3f3f46' }} className="pb-2"/>
              <a className="font-poppins hover:underline text-zinc-700" href="https://github.com/justinm35/world-wander-project">github.com/justinm35/world-wander-project</a>
            </div>
            <div className="flex items-centercenter space-x-2">
              <LinkOutlined style={{ fontSize: '23px', color: '#3f3f46' }} className="pb-2"/>
              <a className="font-poppins hover:underline text-zinc-700" href="https://worldwander.justinm.dev">worldwander.justinm.dev</a>
            </div>
            <p className="font-poppins font-light text-md text-zinc-700 leading-5 pb-4"><span className="font-medium"> </span>React • Node JS • React Router • TailwindCSS • Redux • RTK Query • Mongoose • MongoDB • Express</p>
            <Timeline className="font-poppins font-light text-md"  mode="left" items={[
              {color: "blue",children: "Built & designed landing page & backend posts api endpoints"},
              {color: "blue",children: "Added Mapbox GLJS API with marker plotting & user data fetching w/ caching"},
              {color: "blue",children: "Integrated public key cryptography with JWT token authorization & backend auth endpoints"},
              {color: "orange",children: "On-going: Re-designing user home page and making better mobile experience"}
            ]}/>
            </motion.div>}
          </div>
        </motion.div>

        {/*Project 2*/}
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={variants} 
            className="w-full max-w-5xl md:max-w-3xl flex md:flex-row flex-col mb-16 justify-start">
          <div className="w-fit flex flex-col justify-items-start items-end">
            <img src={keebinvprojectimg} loading="eager" className="w-full transition object-scale-down hover:scale-100 sm:hover:scale-125 hover:shadow-none sm:hover:shadow-lg max-w-lg z-10"/>
          </div>
          <div className="w-full pl-1 md:pl-3 max-w-sm md:max-w-full">
            <h3 className=" font-poppins font-semibold text-lg pt-3 md:pt-0 text-zinc-700">Keeb Inv</h3>
            <p className="font-poppins font-light text-md text-zinc-700 leading-5 pb-1 md:pb-2 m-0 pt-0">A minimal web scraper that enables you to search through five or more of the most popular keyboard part websites that ship to Canada. Enabling you to determine and compare inventory, sales, and prices.</p>
            <Button onClick={()=>setToggleSeeMore2((x)=>!x)} className=" font-poppins font-normal text-zinc-700 my-2" size="middle" icon={<DownOutlined className="transition text-md transform -translate-y-0.5" rotate={toggleSeeMore2 ? 180 : 0}/>}>Info & Links</Button>
            {toggleSeeMore2 && <motion.div className="space-y-1">
            <div className="flex items-centercenter space-x-2 mt-2">
              <GithubOutlined style={{ fontSize: '23px', color: '#3f3f46' }} className="pb-2"/>
              <a className="font-poppins hover:underline text-zinc-700" href="https://github.com/justinm35/keeb-inv-project">github.com/justinm35/keeb-inv-project</a>
            </div>
            <div className="flex items-centercenter space-x-2">
              <LinkOutlined style={{ fontSize: '23px', color: '#3f3f46' }} className="pb-2"/>
              <a className="font-poppins hover:underline text-zinc-700" href="https://keebinv.justinm.dev">keebinv.justinm.dev</a>
            </div>
            <p className="font-poppins font-light text-md text-zinc-700 leading-5 pb-1"><span className="font-medium"> </span>React • Node JS • Puppeteer • Ant Design • Express</p>
            <p className="font-poppins font-light text-md text-zinc-700 leading-5 pb-3"><span className="font-medium">Description: </span>Built a web scraper with a client side ReactJS interface, using Ant Design as the CSS component library. Paired with a server side scraper running on a Puppeteer instance of a headless Chromium browser, and Express for the api endpoints. </p>
            </motion.div>}
          </div>
        </motion.div>
        </LayoutGroup>
      </div>
      
    </div>
</>
  )
}
