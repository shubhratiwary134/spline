
import { motion } from "framer-motion"
const Logos = () => {
  return (
    <div className='bg-zinc-900 w-screen h-[100vh] flex flex-col items-center gap-20 '>
        <motion.div 
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{
          amount:0.3,
          once:false
        }}
        className="flex flex-col items-center mt-10 ">
            <p className="text-white text-9xl  font-bold"> <span className="text-orange-400">Partners</span></p>
        </motion.div>

        
        <div >
          <p>hey</p>
        </div>
    </div>
  )
}

export default Logos