
import {motion } from 'framer-motion'

import camera from "../assets/images/camera3.jpg"
import headphones from "../assets/images/earphone.jpg"
import drone from "../assets/images/drone7.jpg"
const Featured = () => {
  return (
    <div className='w-full flex flex-col mt-8  items-center featured-container '>
     <motion.div
     initial={{opacity:0}}
     animate={{opacity:[0.3,0.7,0.3]}}
     transition={{repeat:Infinity,duration:3}}
     
     >
      <motion.p className='text-9xl '>
      Trending products
      
      </motion.p>
      </motion.div>
      <div className='mt-12 w-full flex flex-col items-center '>
       
        <div className='w-full flex justify-end mb-20 '>
          <div>lorem epsun</div>
          <motion.img 
          whileHover={{scale:1.15}}
          transition={{duration:.5}}
         
          src={camera} className='max-h-full '></motion.img>
        </div>
        <div className='w-full flex  justify-start '>
          <motion.img 
           whileHover={{scale:1.15}}
           transition={{duration:.5}}
          src={headphones} className='max-h-full '></motion.img>
        </div>
        <div className=' w-full flex justify-center mt-20 hover:bg-black duration-500'>
          <img src={drone} className='max-h-full'></img>
        </div>
       
      </div>
      
    
    </div>
  )
}

export default Featured