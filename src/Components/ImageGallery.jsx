
import pol1 from "../assets/images/pol1.jpg"
import pol2 from "../assets/images/pol2.jpg"
import pol3 from "../assets/images/pol3.jpg"
import pol4 from "../assets/images/pol4.jpg"
import { useRef } from "react"
import { useScroll,motion,useTransform } from "framer-motion"
const ImageGallery = () => {
  const ref = useRef(null)
  const {scrollYProgress}=useScroll({
    target:ref,
  })
  const x = useTransform(scrollYProgress,[0,1],["1%","-95%"])
  return (
    <>
      <div ref={ref} className='relative h-[300vh] bg-neutral-900'>
        <div className='sticky top-0 h-screen flex items-center overflow-hidden'>
           <motion.div style={{x}} className="flex gap-4">
            <img src={pol1}></img>
            <img src={pol2}></img>
            <img src={pol3}></img>
            <img src={pol4}></img>
           </motion.div>
        </div>
      </div>
    </>
  
  )
}

export default ImageGallery