
import {motion } from 'framer-motion'

import camera from "../assets/images/camera3.jpg"
import headphones from "../assets/images/earphone.jpg"
import drone from "../assets/images/drone7.jpg"
const Featured = () => {
  return (
    <div className='w-full flex flex-col mt-12  items-center featured-container '>
     <motion.div
     initial={{}}
     transition={{repeat:Infinity}}
     
     >
      <motion.p className='text-9xl text-red-500'>
      Trending products
      
      </motion.p>
      </motion.div>
      <div className='mt-5 w-full flex flex-col items-center '>
       
        <div className='w-full flex justify-center mb-20 hover:bg-black duration-500'>
          <img src={camera} className='max-h-full hover:scale-105 duration-700'></img>
        </div>
        <div className='w-full flex  justify-center  hover:bg-black duration-500'>
          <img src={headphones} className='max-h-full hover:scale-105 duration-700'></img>
        </div>
        <div className=' w-full flex justify-center mt-20 hover:bg-black duration-500'>
          <img src={drone} className='max-h-full'></img>
        </div>
       
      </div>
      
    
    </div>
  )
}

export default Featured