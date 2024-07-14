
import { motion } from "framer-motion"
import {logos,logos2} from "./logo.js"
const Logos = () => {

  return (
    <div className='bg-zinc-900 w-screen h-[100vh] flex  flex-col items-center gap-20 '>
        <motion.div 
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{
          amount:0.3,
          once:false
        }}
        className="flex flex-col items-center mt-10 ">
            <p className="text-white text-8xl  font-bold"> <span className="text-orange-400">Partners</span></p>
        </motion.div>

        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        viewport={{
          amount:0.2,
          once:false
        }}
        className="container overflow-hidden">
          <div className="flex">
          <motion.div
        initial={{x:0}}
        animate={{x:'-100%'}}
        transition={{duration:5,repeat:Infinity}}
        className="flex flex-shrink-0 gap-20" >
          {logos.map((logo)=>{
            return (
              <img key={logo.id} src={logo} className="h-16 w-56"></img>
            )
          })}
        </motion.div>
        <motion.div
        initial={{x:0}}
        animate={{x:'-100%'}}
        transition={{duration:5,repeat:Infinity}}
        className="flex flex-shrink-0 gap-20  " >
          {logos.map((logo)=>{
            return (
              <img key={logo.id} src={logo} className="h-16 w-56"></img>
            )
          })}
        </motion.div>
          </div>
          </motion.div>

          <div className="container overflow-hidden">
          <div className="flex">
          <motion.div
        initial={{x:0}}
        animate={{x:'-100%'}}
        transition={{duration:10,repeat:Infinity}}
        className="flex flex-shrink-0 gap-20" >
          {logos2.map((logo)=>{
            return (
              <img key={logo.id} src={logo} className="h-16 w-56"></img>
            )
          })}
        </motion.div>
        <motion.div
        initial={{x:0}}
        animate={{x:'-100%'}}
        transition={{duration:10,repeat:Infinity}}
        className="flex flex-shrink-0 gap-20  " >
          {logos2.map((logo)=>{
            return (
              <img key={logo.id} src={logo} className="h-16 w-56"></img>
            )
          })}
        </motion.div>
          </div>
          </div>
          
         
      
    </div>
    
  )
}

export default Logos