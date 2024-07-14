
import { motion } from "framer-motion"
const Logos = () => {
  return (
    <div className='bg-zinc-900 w-screen h-[100vh] flex flex-col items-center justify-between '>
        <motion.div 
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{
          amount:0.3,
          once:false
        }}
        className="flex flex-col items-center mt-20 ">
            <p className="text-white text-7xl  font-bold">Our Past <span className="text-orange-400">Sponsors</span></p>
        </motion.div>
        <div></div>
    </div>
  )
}

export default Logos