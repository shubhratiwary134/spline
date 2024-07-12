
import imageCamera from "../assets/images/ImageCamera.jpg"
import imageCamera2 from "../assets/images/ImageGallery2.jpg"
import imageDrone from "../assets/images/ImageDrone.jpg"
import headphoneImage from "../assets/images/HeadphoneImage.jpg"
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
           <motion.div style={{x}} className="flex  items-center">
            <img src={imageCamera} className="w-screen "></img>
            <img src={imageCamera2} className="w-screen"></img>
            <img src={imageDrone}></img>
            <img src={headphoneImage}></img>
            <img src={imageCamera} ></img>
            <img src={imageCamera2}></img>
            <img src={imageDrone}></img>
            <img src={headphoneImage}></img>
           </motion.div>
        </div>
      </div>
    </>
  
  )
}

export default ImageGallery