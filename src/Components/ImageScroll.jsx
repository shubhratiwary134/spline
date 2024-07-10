import React from 'react'
import drone from "../assets/images/drone7.jpg"
const ImageScroll = () => {
  return (
   
      <div       
        className=' w-full bg-black flex justify-around items-start mt-20 '>
           <div className=' w-1/2 p-10 info text-xl text-white '>
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
          <img src={drone} className='sticky top-0 '></img>
          <div className=' w-1/2 p-10 info text-xl text-white '>
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
        </div>

  )
}

export default ImageScroll