
import { motion } from 'framer-motion'

import camera from "../assets/images/camera3.jpg"
import headphones from "../assets/images/earphone.jpg"


const Featured = () => {
  return (
    <div className='w-full flex flex-col items-center featured-container '>
     <motion.div
     
     
     >
      <motion.p className='text-9xl text-black'>
      Trending 
      
      </motion.p>
      </motion.div>
    
      <div className=' w-full flex flex-col'>
       
        <div className='w-full flex  items-center  mb-20  '>
          <div className=' w-1/2 p-10 info text-xl  '>
          <ul className='text-wrap flex flex-col  gap-10'>
            <li> <span  className='text-red-500'>Resolution:</span> 24.2 Mp</li>
            <li> <span className='text-red-500'>Sensor Type:</span> Full-frame CMOS sensor</li>
            <li> <span className='text-red-500'>ISO Range:</span> 100-51,200 </li>
            <li> <span className='text-red-500'>Video Recording:</span> 4K UHD at 30fps</li>
            <li><span className='text-red-500'>Weather Sealing:</span> Dust and moisture-resistant body</li>
            <li><span className='text-red-500'> Screen:</span> 3.2-inch Vari-angle Touchscreen LCD</li>
            <li><span className='text-red-500'>Dual Pixel AF: </span>Fast and accurate autofocus for both photo</li>
          </ul>
          </div>
          
          <img 
          
          src={camera} className=' max-h-full '></img>
        </div>
        <div className='w-full flex justify-around'>
          
          <motion.img 
           whileHover={{scale:1.15}}
           transition={{duration:.5}}
          src={headphones} className='max-h-full '></motion.img>
           <div className='w-1/3 info text-xl '>
          
          <ul className='h-full text-wrap flex flex-col justify-center gap-10'>
            <li>  <span className='text-red-500' >Sound Quality:</span> High-fidelity audio with deep bass</li>
            <li> <span className='text-red-500'> Noise Cancellation:</span> Active Noise Cancellation (ANC)</li>
            <li>  <span className='text-red-500'>Battery Life:</span> Up to 8 hours on a single charge, with an additional 24 hours using the charging case</li>
            <li> <span className='text-red-500'> connectivity:</span> Bluetooth 5.2 for a stable connection</li>
            <li> <span className='text-red-500'>Microphones:</span> Dual beamforming microphones for clear voice calls</li>
            <li> <span className='text-red-500'>Compatibility: </span>Compatible with iOS, Android</li>
          
          </ul>
          </div>
        </div>
       
       
      </div>
      
    
    </div>
  )
}

export default Featured