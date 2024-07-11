
import drone from "../assets/images/drone7.jpg"
import pol1 from "../assets/images/pol1.jpg"
import pol2 from "../assets/images/pol2.jpg"
import pol3 from "../assets/images/pol3.jpg"
import pol4 from "../assets/images/pol4.jpg"
const ImageScroll = () => {
  return (
   
      <div       
        className=' w-full bg-black flex justify-around items-start  '>
         <div >
          <img src={pol1} className='max-h-96 rotate-12 '></img>
          <p className='text-lg text-white'>lorem kamciosdcnsc skc osincscsoi</p>
          <img src={pol2 } className='max-h-96 -rotate-6'></img>
          <p>lorem kamciosdcnsc skc osincscsoi</p>
          <img src={pol4} className='max-h-96 rotate-6  '></img>
          <img src={pol3} className='max-h-96 rotate-45 '></img>
         
         </div>
          <img src={drone} className='sticky top-0 '></img>
          
        </div>

  )
}

export default ImageScroll