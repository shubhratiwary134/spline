
import imageCamera from "../assets/images/ImageCamera.jpg"
import Mobile from "../assets/images/mobilePhone.jpg"
import headphoneImage2 from "../assets/images/ImageGalleryHeadphonoes.jpg"
import headphoneImage from "../assets/images/HeadphoneImage.jpg"
import watch from "../assets/images/Watch.jpg"
import Xbox from "../assets/images/Xbox.jpg"
import Speaker from "../assets/images/Speaker.jpg"
import { useRef } from "react"
import { useScroll,motion,useTransform } from "framer-motion"
const ImageGallery = () => {
  const ref = useRef(null)
  const {scrollYProgress}=useScroll({
    target:ref,
  })
  
  const x = useTransform(scrollYProgress,[0,1], ["1%","-155%"])
  return (
    <>
      <div ref={ref} className=' relative h-[500vh] bg-neutral-900'>
        <div className=' sticky top-0 h-screen flex  overflow-hidden'>
           <motion.div style={{x}} className="flex  ">
         
            <img src={imageCamera} className="hover:scale-105 duration-300"></img>
          
          
            <img src={headphoneImage}  className="hover:scale-105 duration-300"></img>
            <img src={Xbox} className="hover:scale-105 duration-300"></img>
            <img src={watch}  className="hover:scale-105 duration-300" ></img>
           
            <img src={Speaker}   className="hover:scale-105 duration-300"></img>
            <img src={Mobile} className="hover:scale-105 duration-300" ></img>
            <img src={headphoneImage2} className="hover:scale-105 duration-300"></img>
           </motion.div>
        </div>
      
      </div>
     
    </>
  
  )
}

export default ImageGallery