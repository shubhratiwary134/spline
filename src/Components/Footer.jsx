import { BiLogoInstagramAlt } from "react-icons/bi"
import { FaYoutube } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

const Footer = () => {
  return (
    <div className='w-full h-[100vh] bg-white border-t-2 px-20 border-black text-5xl'>
      
      <div className="flex flex-col justify-between gap-10">
        
        <div >Join us</div>
        <div >Quick Links</div>  
       
       
        
        <div>Service</div>
        <div >Payment </div>  
       
       
        <div >Subscription</div>
        <div >Contact</div>
        
       
        <div className="flex  ">
        <FaYoutube size={72}/>
        <BiLogoInstagramAlt size={72} />
        <SiGmail size={72} />
        </div>
     
     
      
      </div>
      
   
    </div>
  )
}

export default Footer