import { BiLogoInstagramAlt } from "react-icons/bi"
import { FaYoutube } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import footerImage from "../assets/images/footer.jpg"

const Footer = () => {
  return (
    <div className='w-full  px-10 rounded-2xl text-3xl footer-container font-serif flex flex-col gap-10'>
      
      <div className="flex flex-col gap-10 mt-10">
        <div className="flex justify-between">
          <div >
          <div  >Customer Service</div>
         <div className="text-base text-gray-700  flex flex-col ">
            <ol className="list-disc list-inside">
              <li>
                Returns and Exchange
              </li>
              <li>
                Shipping Information
              </li>
              <li>
                FAQs
              </li>
              <li>
                Help Center
              </li>
            </ol>
          </div>
          </div>
          <div >
          <div>
            <img src={footerImage} className="h-48"></img>
          </div>
        </div>
          <div>
          <div>
            About Us
          </div>
          <div className="text-base text-gray-700  flex flex-col ">
            <ol className="list-disc list-inside">
              <li>
              Product Support
              </li>
              <li>
              Customer Assistance
              </li>
              <li>
              Service Centers
              </li>
              <li>
              Installation & Setup
              </li>
            </ol>
          </div>
        </div>
        <div >
          <div>
            <img src={footerImage} className="h-48"></img>
          </div>
        </div>
          <div >
          <div  >Quick Links</div>
          <div className="text-base text-gray-700 flex flex-col ">
            <ol className="list-disc list-inside">
              <li>
                shop
              </li>
              <li>
                Events
              </li>
              <li>
                Blog
              </li>
              <li>
                Privacy Policy
              </li>
            </ol>
          </div>
          </div> 
        </div>
        
       
       
        <div className="flex justify-around">
        <div>
          <div>
            service
          </div>
          <div className="text-base text-gray-700  flex flex-col ">
            <ol className="list-disc list-inside">
              <li>
              Product Support
              </li>
              <li>
              Customer Assistance
              </li>
              <li>
              Service Centers
              </li>
              <li>
              Installation & Setup
              </li>
            </ol>
          </div>
        </div>
        <div>
          <img src ={footerImage} className="h-48 "></img>
        </div>
        <div >

         
          <div>Payment</div>
          <div className="text-base text-gray-700  flex flex-col ">
            <ol className="list-disc list-inside">
              <li>
              Product Support
              </li>
              <li>
              Payment Policies
              </li>
              <li>
              Billing Support
              </li>
              <li>
               Offers and Discount
              </li>
              <li>
              International Payments
              </li>
            </ol>
          </div>
          </div>  
        </div>
        
       
       {/* <div className="flex justify-center ">
       
       <div className="flex flex-col">
        <div>Contact</div>
        <div className="text-sm text-gray-700">
        Phone: +91-80-1234-5678
        </div> 
        <div className="text-sm text-gray-700 text-wrap">
        Email: info@innovativeelectronics.in
        </div>
       </div>
       </div> */}
       </div>
     
        
       
        <div className="flex justify-between text-base items-center ">
          <div >
          123 Tech Park Avenue,
Sector 21,
Hitech City,
Bengaluru, Karnataka 560100,
India
          </div>
         
        <div className="flex">
        <FaYoutube size={36}/>
        <BiLogoInstagramAlt size={36} />
        <SiGmail size={36} />
        </div>
        </div>
     
     
      
      </div>
      
   
    
  )
}

export default Footer