import { BiLogoInstagramAlt } from "react-icons/bi"
import { FaYoutube } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

const Footer = () => {
  return (
    <div className='w-full h-[100vh] bg-white border-t-2 border-black'>
      
      <div className="flex flex-col justify-between">
        <div className="flex justify-between items-center p-5 text-9xl">
        <div >Join us</div>
        <div >Quick Links</div>  
       
        </div>
        <div className="flex justify-between items-center p-5 text-9xl">
        <div>Service</div>
        <div >Payment </div>  
        </div>
        <div className="flex justify-between items-center p-5 text-9xl">
        <div >Subscription</div>
        <div >Contact</div>
        
        </div>
        <div className="mt-10 flex  ">
        <FaYoutube size={72}/>
        <BiLogoInstagramAlt size={72} />
        <SiGmail size={72} />
        </div>
     
     
      
      </div>
      
   
    </div>
  )
}

export default Footer