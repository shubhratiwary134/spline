
import drone from "../assets/images/drone7.jpg"
import pol1 from "../assets/images/pol5.jpg"
import pol2 from "../assets/images/pol2.jpg"
import pol3 from "../assets/images/pol3.jpg"
import pol4 from "../assets/images/pol4.jpg"
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
          className='max-h-96 mb-20'></motion.img>
         
          <motion.img 
           initial={{x:-200,opacity:0}}
           whileInView={{x:0,opacity:1,rotate:-6}}
           exit={{x:-200,opacity:0}}
            transition={{duration:1}}
            viewport={{ once:false,amount:0.5}}
          src={pol2 } className='max-h-96 mb-20'></motion.img>
        
          <motion.img
           initial={{x:-200,opacity:0}}
           whileInView={{x:0,opacity:1,rotate:6}}
           exit={{x:-200,opacity:0}}
            transition={{duration:1}}
            viewport={{
              once:false,
              amount:0.5
            }}
          src={pol4} className='max-h-96  my-20 '></motion.img>
          <motion.img 
           initial={{x:-200,opacity:0}}
           whileInView={{x:0,opacity:1,rotate:45}}
           exit={{x:-200,opacity:0}}
            transition={{duration:1}}
            viewport={{
              once:false,
              amount:0.5
            }}
          src={pol3} className='max-h-96  '></motion.img>
         
         </div>
         
         <motion.img 
          initial={{x:85}}
          whileInView={{x:0}}
          transition={{duration:1}}
          viewport={{
            once:false,
            amount:0.5
          }}
          src={drone} className='sticky top-0   '></motion.img>
        
  
          
        </div>
  
   

  )
}

export default ImageScroll