import pengy from '../assets/penguin.png'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'


const Peng = () => {


    const [showPeng, setShowPeng] = useState(false)
    // const [pengX, setPengX] = useState('')
const timeout = (Math.floor(Math.random() * ( 5 - 10 + 1) + 90)) * 1000

setTimeout(()=>{
    setShowPeng(true)
}, 1000)

const [pointX, setPointX] = useState(0)
const [pointY, setPointY] = useState(0)

  return (
    <div>
      <AnimatePresence>
        {showPeng && 
        <motion.img drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDrag={
            (event, info) => {
              setPointX(-45)
              console.log(info.offset.x, info.offset.y)}
          }
          onDragEnd={()=>setPointX(0)}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
          dragElastic={1}
          initial={{ y:150 ,opacity: 0 }}
          animate={{ y:0, opacity: 1, rotate: pointX}}
          exit={{ y:150, opacity: 0 }}
          className="absolute h-32 w-auto -bottom-14 right-10 z-20" src={pengy}/>}
        </AnimatePresence>
    </div>
  )
}
//-bottom-14 right-10
export default Peng
