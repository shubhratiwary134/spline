
import drone from "../assets/images/drone7.jpg"
import pol1 from "../assets/images/polaroid1.jpg"
import pol2 from "../assets/images/polaroid2.jpg"
import pol3 from "../assets/images/polaroid3.jpg"
import pol4 from "../assets/images/polaroid4.jpg"
import { motion } from "framer-motion"
const ImageScroll = () => {
  return (

       <div       
        className=' w-full bg-black flex justify-around items-start'>
         <div>
          <motion.img
          initial={{ x: -200, opacity: 0}}
          whileInView={{ x: 0, opacity: 1, rotate: 12 }}
          exit={{ x: 200, opacity: 0}}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          src={pol1}
          className='lg:max-h-80 mb-10 xl:max-h-96'></motion.img>
         
          <motion.img 
           initial={{x:-200,opacity:0}}
           whileInView={{x:0,opacity:1,rotate:-6}}
           exit={{x:-200,opacity:0}}
            transition={{duration:1}}
            viewport={{ once:false,amount:0.5}}
          src={pol2 } className='lg:max-h-80 mb-10 xl:max-h-96'></motion.img>
        
          <motion.img
           initial={{x:-200,opacity:0}}
           whileInView={{x:0,opacity:1,rotate:6}}
           exit={{x:-200,opacity:0}}
            transition={{duration:1}}
            viewport={{
              once:false,
              amount:0.5
            }}
          src={pol4} className='lg:max-h-80 mb-10 xl:max-h-96'></motion.img>
          <motion.img 
           initial={{x:-200,opacity:0}}
           whileInView={{x:0,opacity:1,rotate:45}}
           exit={{x:-200,opacity:0}}
            transition={{duration:1}}
            viewport={{
              once:false,
              amount:0.5
            }}
          src={pol3} className='lg:max-h-80 xl:max-h-96 '></motion.img>
         
         </div>
         
         <motion.img 
          initial={{x:85}}
          whileInView={{x:0}}
          transition={{duration:1}}
          viewport={{
            once:false,
            amount:0.5
          }}
          src={drone} className='sticky top-0  lg:h-80 xl:h-96 '></motion.img>
        
  
          
        </div>
  
   

  )
}

export default ImageScroll