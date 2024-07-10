import React from 'react'
import drone from "../assets/images/drone7.jpg"
const ImageScroll = () => {
  return (
   
      <div       
        className=' w-full bg-black flex justify-around items-start mt-20 '>
          <div className='text-white h-full '>lorem</div>
          <img src={drone} className='sticky top-0 max-h-full'></img>
          <div className='text-white'>lorem</div>
        </div>

  )
}

export default ImageScroll