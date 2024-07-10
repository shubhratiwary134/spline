
import {motion } from 'framer-motion'

import camera from "../assets/images/camera3.jpg"
import headphones from "../assets/images/earphone.jpg"
import drone from "../assets/images/drone7.jpg"
const Featured = () => {
  return (
    <div className='w-full flex flex-col mt-8 items-center featured-container '>
     <motion.div
     initial={{opacity:0}}
     animate={{opacity:[0.3,0.7,0.3]}}
     transition={{repeat:Infinity,duration:3}}
     
     >
      <motion.p className='text-9xl '>
      Trending products
      
      </motion.p>
      </motion.div>
      <div className='mt-12 w-full flex flex-col'>
       
        <div className='w-full flex  items-center  mb-20 '>
          <div className=' w-1/2 p-10 info text-xl  '>
          <ul className='text-wrap flex flex-col  gap-10'>
            <li> Resolution: 24.2 Mp</li>
            <li> Sensor Type: Full-frame CMOS sensor</li>
            <li> ISO Range: 100-51,200 </li>
            <li> Video Recording: 4K UHD at 30fps</li>
            <li>Weather Sealing: Dust and moisture-resistant body</li>
            <li> Screen: 3.2-inch Vari-angle Touchscreen LCD</li>
            <li>Dual Pixel AF: Fast and accurate autofocus for both photo</li>
          </ul>
          </div>
          
          <img src={camera} className='hover:scale-125 duration-700 scale-110 max-h-full '></img>
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