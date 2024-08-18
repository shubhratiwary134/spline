
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
  
  const x = useTransform(scrollYProgress,[0,1], ["1%","-185%"])
  return (
    <>
      <div ref={ref} className=' relative h-[500vh] p-10 bg-neutral-900'>
        <div className=' sticky top-0 h-screen flex  overflow-hidden'>
           <motion.div style={{x}} className="flex  ">
            <ImageComponent source={imageCamera}></ImageComponent>
            <ImageComponent source={headphoneImage}></ImageComponent>
            <ImageComponent source={Xbox}></ImageComponent>
           <ImageComponent source={watch}></ImageComponent>
           <ImageComponent source={Mobile}></ImageComponent>
           <ImageComponent source={Speaker}></ImageComponent>
           <ImageComponent source={headphoneImage2}></ImageComponent>
       
           </motion.div>
        </div>
      
      </div>
     
    </>
  
  )
  function ImageComponent({source}){
    return (
      <img src={source} className="hover:scale-105 duration-300  "></img>
    )
  }
}

export default ImageGallery