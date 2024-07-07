
import {motion } from 'framer-motion'

import camera from "../assets/images/camera3.jpg"
import headphones from "../assets/images/earphone.jpg"
import drone from "../assets/images/camera.jpg"
const Featured = () => {
  return (
    <div className='w-full flex flex-col mt-12 mx-5 items-center featured-container '>
     <motion.div
     initial={{}}
     transition={{repeat:Infinity}}
     
     >
      <motion.p className='text-9xl '>
      Trending products

      </motion.p>
      </motion.div>
      <div className='mt-10 w-full flex flex-col items-center '>
       
        <div className='mb-20'>
          <img src={camera} className='max-h-full hover:scale-105 duration-200'></img>
        </div>
        <div className='mb-40'>
          <img src={headphones} className='max-h-full hover:scale-105 duration-200'></img>
        </div>
        <div >
          <img src={drone} className='max-h-full hover:scale-105 duration-200'></img>
        </div>
       
      </div>
      
    
    </div>
  )
}

export default Featured