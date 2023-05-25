import wwlaptop from '../assets/WorldWanderLaptop.png'
import keebinvlaptop from '../assets/KeebInvLaptop.png'
import rechatlaptop from '../assets/ReChatLaptop.png'
import saasdashboardlaptop from '../assets/SaasDashboardLaptop.png'
import {Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { LayoutGroup, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { GithubOutlined, LinkOutlined } from '@ant-design/icons'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import htmlIcn from '../assets/icons/icons8-html-50.png'
import nodeIcn from '../assets/icons/icons8-node-js-64.png'
import reactIcn from '../assets/icons/icons8-react-60.png'
import tailwindIcn from '../assets/icons/icons8-tailwindcss-96.png'
import reduxIcn from '../assets/icons/icons8-redux-50.png'
import mongoIcn from '../assets/icons/icons8-mongodb-96.png'
import typescriptIcn from '../assets/icons/icons8-typescript-50.png'
import antdIcn from '../assets/icons/ant-design.256x256.png'
import puppeteerIcn from '../assets/icons/puppeteer.256x255.png'
import javascriptIcn from '../assets/icons/icons8-javascript-50.png'
import expressIcn from '../assets/icons/icons8-express-js-50.png'
import nextIcn from '../assets/icons/next-js.256x256.png'
import redisIcn from '../assets/icons/icons8-redis-an-in-memory-data-structure-project-implementing-a-distributed-48.png'
import firebaseIcn from '../assets/icons/icons8-firebase-48.png'

export const Projects = () => {
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
      <h2 className="font-poppins text-md font-normal text-indigo-500">Projects</h2>
      <div className="mt-5 w-full">
      <LayoutGroup>
        {/*Project 1*/}
        <motion.div 
            initial="hidden" animate="visible" variants={variants} 
            className="w-full max-w-5xl md:max-w-4xl flex md:flex-row flex-col mb-10 items-center">
          <div className='basis-1/2 flex-shrink-0'>
            <LazyLoadImage src={wwlaptop} alt="world wander project image" effect="blur" className="w-full transition object-scale-down max-w-lg z-10"/>
          </div>
          <div className='h-full space-y-2 flex justify-center items-start flex-col'>
            <h3 className=" font-poppins font-semibold text-xl pt-3 md:pt-0 text-zinc-700">World Wander</h3>
            <div className='flex space-x-1'>
              <img src={javascriptIcn} className='h-6 w-6'/>
              <img src={htmlIcn} className='h-6 w-6'/>
              <img src={nodeIcn} className='h-6 w-6'/>
              <img src={tailwindIcn} className='h-6 w-6'/>
              <img src={reactIcn} className='h-6 w-6'/>
              <img src={reduxIcn} className='h-6 w-6'/>
              <img src={mongoIcn} className='h-6 w-6'/>
            </div>
            <p className="font-inter font text-xs sm:text-sm text-zinc-700 leading-4">
              This MERN app allows users to showcase their adventures through "Wanders", pins and markers 
              on an interactive globe. Each Wander includes pictures, blog text, and date information. 
              The app features smooth user authorization, routing, and real-time UI updates to handle database changes efficiently.</p>
            <div>
            <div className="flex items-centercenter space-x-6 mt-2 text-md">
                <a className="font-poppins font-semibold decoration-2 hover:underline transition underline-offset-2 text-zinc-700 hover:text-indigo-500" target="_blank" href="https://github.com/justinm35/world-wander-project">
                GitHub
                </a>
                <a className="font-poppins font-semibold decoration-2 hover:underline transition underline-offset-2 text-zinc-700 hover:text-indigo-500" target="_blank" href="https://worldwander.justinm.dev">
                Live Site
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        {/*Project 2*/}
        <motion.div
            initial="hidden" animate="visible" variants={variants} 
            className="w-full max-w-5xl md:max-w-4xl flex md:flex-row flex-col mb-10 items-center">
          <div className='basis-1/2 flex-shrink-0'>
            <LazyLoadImage src={saasdashboardlaptop} alt="recjat project image" effect="blur" className="w-full transition object-scale-down max-w-lg z-10"/>
          </div>
          <div className='h-full space-y-2 flex justify-center items-start flex-col'>
            <h3 className=" font-poppins font-semibold text-xl pt-3 md:pt-0 text-zinc-700">CustProdTracker</h3>
            <div className='flex space-x-1'>
              <img src={typescriptIcn} className='h-6 w-6'/>
              <img src={nextIcn} className='h-6 w-6'/>
              <img src={nodeIcn} className='h-6 w-6'/>
              <img src={firebaseIcn} className='h-6 w-6'/>
              <img src={tailwindIcn} className='h-6 w-6'/>
            </div>
            <p className="font-inter font text-xs sm:text-sm text-zinc-700 leading-4">
            This is a Next 13 SaaS web app, crafted for an organization to efficiently manage 
            customer details, invoices, and equipment data. It maintains a record of all product 
            information and employs RBAC for a user-friendly client interface, simplifying the 
            process of ordering service calls and managing their equipment.</p>
            <div>
            <div className="flex items-centercenter space-x-6 mt-2 text-md">
                <a className="font-poppins font-semibold decoration-2 hover:underline transition underline-offset-2 text-zinc-700 hover:text-indigo-500" target="_blank" href="https://github.com/justinm35/service-dashboard">
                GitHub
                </a>
                <a className="font-poppins font-semibold decoration-2 str transition line-through text-zinc-300/80 cursor-default"  target="_blank">
                Live Site
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      
         {/*Project 3*/}
         <motion.div 
            initial="hidden" animate="visible" variants={variants} 
            className="w-full max-w-5xl md:max-w-4xl flex md:flex-row flex-col mb-10 items-center">
          <div className='basis-1/2 flex-shrink-0'>
            <LazyLoadImage src={keebinvlaptop} alt="keebinv project image" effect="blur" className="w-full transition object-scale-down max-w-lg z-10"/>
          </div>
          <div className='h-full space-y-2 flex justify-center items-start flex-col'>
            <h3 className=" font-poppins font-semibold text-xl pt-3 md:pt-0 text-zinc-700">KeebInv</h3>
            <div className='flex space-x-1'>
              <img src={typescriptIcn} className='h-6 w-6'/>
              <img src={nodeIcn} className='h-6 w-6'/>
              <img src={antdIcn} className='h-6 w-6'/>
              <img src={puppeteerIcn} className='h-6 w-6'/>
              <img src={reactIcn} className='h-6 w-6'/>
              <img src={expressIcn} className='h-6 w-6'/>
            </div>
            <p className="font-inter font text-xs sm:text-sm text-zinc-700 leading-4">
              A streamlined web scraper that allows users to search and compare inventory, sales, and prices 
              across multiple of the top keyboard part websites catering to the Canadian market. With this 
              efficient tool, users can conveniently evaluate and contrast product offerings to make 
              informed purchasing decisions.</p>
            <div>
            <div className="flex items-centercenter space-x-6 mt-2 text-md">
                <a className="font-poppins font-semibold decoration-2 hover:underline transition underline-offset-2 text-zinc-700 hover:text-indigo-500" target="_blank" href="https://github.com/justinm35/keeb-inv-project">
                GitHub
                </a>
                <a className="font-poppins font-semibold decoration-2 hover:underline transition underline-offset-2 text-zinc-700 hover:text-indigo-500" target="_blank" href="https://keebinv.justinm.dev">
                Live Site
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        {/*Project 4*/}
        <motion.div
            initial="hidden" animate="visible" variants={variants} 
            className="w-full max-w-5xl md:max-w-4xl flex md:flex-row flex-col mb-10 items-center">
          <div className='basis-1/2 flex-shrink-0'>
            <LazyLoadImage src={rechatlaptop} alt="recjat project image" effect="blur" className="w-full transition object-scale-down max-w-lg z-10"/>
          </div>
          <div className='h-full space-y-2 flex justify-center items-start flex-col'>
            <h3 className=" font-poppins font-semibold text-xl pt-3 md:pt-0 text-zinc-700">ReChat</h3>
            <div className='flex space-x-1'>
              <img src={typescriptIcn} className='h-6 w-6'/>
              <img src={nextIcn} className='h-6 w-6'/>
              <img src={nodeIcn} className='h-6 w-6'/>
              <img src={redisIcn} className='h-6 w-6'/>
              <img src={tailwindIcn} className='h-6 w-6'/>
            </div>
            <p className="font-inter font text-xs sm:text-sm text-zinc-700 leading-4">
              A simple messenger app project also incorporates Google OAuth, providing a secure and convenient 
              way for users to log in and access their chat history across multiple devices. With Google OAuth, users 
              can enjoy a seamless authentication process and rest assured that their personal information is protected.</p>
            <div>
            <div className="flex items-centercenter space-x-6 mt-2 text-md">
                <a className="font-poppins font-semibold decoration-2 hover:underline transition underline-offset-2 text-zinc-700 hover:text-indigo-500" target="_blank" href="https://github.com/justinm35/Re-Chat">
                GitHub
                </a>
                <a className="font-poppins font-semibold decoration-2 hover:underline transition underline-offset-2 text-zinc-700 hover:text-indigo-500" target="_blank" href="https://re-chat-nine.vercel.app/login">
                Live Site
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        </LayoutGroup>
      </div>
      
    </div>
</>
  )
}
