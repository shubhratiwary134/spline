
import { motion, useAnimation } from "framer-motion"
import group from "../assets/images/speaking.jpg"
import public1 from '../assets/images/publicbento.jpg'
import public2 from '../assets/images/publicbento2.jpg'
import award from '../assets/images/award.jpg'
import hope from '../assets/images/hope.jpg'
import { FaArrowRightLong } from "react-icons/fa6"

const Event = () => {
  const controls = useAnimation()
  return (
    <div className='w-screen h-[180vh] bg-white flex flex-col items-center   p-10 '>
      <motion.div 
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:.8}}
      viewport={{
        amount:0.5,
        once:false
      }}
      className="text-zinc-900 text-7xl event-Heading ">ElectroFest 2024</motion.div>
      <div className="w-full h-3/4 grid-container grid grid-cols-12 grid-rows-12 gap-4 mt-20">
        <motion.div
        initial={{x:30}}
        whileInView={{x:0}}
        transition={{duration:.5}}
        viewport={{
          once:true
        }}
        className="col-span-6 row-span-6 overflow-hidden flex justify-center items-center rounded-2xl  ">
           <img src={public1} className="w-full h-full object-cover rounded-lg hover:scale-110 duration-300"></img>
        </motion.div>
      
        <motion.div
        initial={{y:-20}}
        whileInView={{y:0}}
        transition={{duration:1}}
        viewport={{
          amount:0.5,
          once:true
        }}
        className="col-span-6 row-span-10  rounded-2xl overflow-hidden">
        <img src={group} className="w-full h-full object-cover rounded-lg hover:scale-110 duration-300"></img>
        </motion.div>
        
        
        
        <motion.div 
        initial={{x:-20}}
        whileInView={{x:0}}
        transition={{duration:1}}
        viewport={{
          amount:0.2,
          once:true
        }}
        className="col-span-3 row-span-6  rounded-2xl overflow-hidden">
        <img src={award} className="w-full h-full object-cover rounded-lg hover:scale-110 duration-300"></img>
        </motion.div>
        <motion.div 
        initial={{y:20}}
        whileInView={{y:0}}
        transition={{duration:1}}
        viewport={{
          amount:0.2,
          once:true
        }}
        className="col-span-3 row-span-6  overflow-hidden rounded-2xl">
        <img src={hope} className="w-full h-full object-cover rounded-2xl hover:scale-110 duration-300"></img>
        </motion.div>
        
        <motion.div
         onHoverStart={() => controls.start({ opacity: 1 })}
         onHoverEnd={() => controls.start({ opacity: 0 })}
        className="col-span-6 row-span-2   text-wrap p-2 flex  justify-around  ">
          <button className="text-8xl">View More</button>
          <motion.div
           initial={{ opacity: 0 }}
           animate={controls}
           transition={{ duration: 0.5 }}
           className="self-end"
          >
          <FaArrowRightLong size={96} className="self-end  "/>
          </motion.div>
       
        </motion.div>
        
        
      </div>
      
    </div>
  )
}

export default Event