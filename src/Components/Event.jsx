
import { motion } from "framer-motion"
const Event = () => {
  return (
    <div className='w-screen h-screen bg-zinc-900 flex flex-col items-center justify-between p-10'>
      <div className="text-orange-600 text-7xl font-extrabold">EVENT</div>
      <div className="w-full h-2/3 grid-container grid grid-cols-12 grid-rows-6 gap-4">
        <motion.div
        initial={{x:30}}
        whileInView={{x:0}}
        transition={{duration:.5}}
        viewport={{
          once:false
        }}
        className="col-span-4 row-span-2 p-4 flex justify-center items-center ">
          <p className="text-white text-3xl font-bold">Join the Exciting Event</p>
        </motion.div>
        <div className="col-span-6 row-span-6 bg-slate-600 p-4 ">
          <img></img>
        </div>
        <div className="col-span-2 row-span-6 bg-slate-600 p-4 "></div>
        
        <div className="col-span-2 row-span-4 bg-slate-600 p-4 "></div>
        <div className="col-span-2 row-span-4 bg-slate-600 p-4 "></div>
        <div></div>
        
      </div>
      
    </div>
  )
}

export default Event