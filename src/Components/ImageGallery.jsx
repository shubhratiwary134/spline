
import imageCamera from "../assets/images/ImageCamera.jpg"
import imageCamera2 from "../assets/images/ImageGallery2.jpg"
import headphoneImage2 from "../assets/images/ImageGalleryHeadphonoes.jpg"
import headphoneImage from "../assets/images/HeadphoneImage.jpg"
import { useRef } from "react"
import { useScroll,motion,useTransform } from "framer-motion"
const ImageGallery = () => {
  const ref = useRef(null)
  const {scrollYProgress}=useScroll({
    target:ref,
  })
  
  const x = useTransform(scrollYProgress,[0,1], ["1%","-190%"])
  return (
    <>
      <div ref={ref} className=' relative h-[700vh] bg-neutral-900'>
        <div className='p-10 sticky top-0 h-screen flex   overflow-hidden'>
           <motion.div style={{x}} className="flex gap-4 ">
            <img src={imageCamera} className="hover:scale-105 duration-300"></img>
            <img src={imageCamera2} className="hover:scale-105 duration-300" ></img>
            <img src={headphoneImage2} className="hover:scale-105 duration-300"></img>
            <img src={headphoneImage}  className="hover:scale-105 duration-300"></img>
            <img src={imageCamera}  className="hover:scale-105 duration-300" ></img>
            <img src={imageCamera2} className="hover:scale-105 duration-300"></img>
            <img src={imageCamera}   className="hover:scale-105 duration-300"></img>
            <img src={imageCamera2} className="hover:scale-105 duration-300"></img>
           </motion.div>
        </div>
      </div>
    </>
  
  )
}

export default ImageGallery