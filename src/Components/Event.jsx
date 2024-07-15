
import { motion } from "framer-motion"
import group from "../assets/images/speaking.jpg"
import public1 from '../assets/images/publicbento.jpg'
import public2 from '../assets/images/publicbento2.jpg'
import award from '../assets/images/award.jpg'
import hope from '../assets/images/hope.jpg'
const Event = () => {
  return (
    <div className='w-screen h-screen bg-zinc-900 flex flex-col items-center justify-between p-10'>
      <div className="text-purple-600 text-7xl font-extrabold ">ElectroFest 2024</div>
      <div className="w-full h-2/3 grid-container grid grid-cols-12 grid-rows-10 gap-4">
        <motion.div
        initial={{x:30}}
        whileInView={{x:0}}
        transition={{duration:.5}}
        viewport={{
          once:false
        }}
        className="col-span-4 row-span-4 overflow-hidden flex justify-center items-center rounded-2xl  bg-white">
           <img src={public1} className="w-full h-full object-cover rounded-lg hover:scale-110 duration-300"></img>
        </motion.div>
        <div className="col-span-6 row-span-8 bg-white rounded-2xl overflow-hidden">
        <img src={group} className="w-full h-full object-cover rounded-lg hover:scale-110 duration-300"></img>
        </div>
        <div className="col-span-2 row-span-6 bg-white  rounded-2xl">
        <img src={public2} className="w-full h-full object-cover rounded-2xl hover:scale-110 duration-300"></img>
        </div>
        
        <div className="col-span-2 row-span-6 bg-white overflow-hidden rounded-2xl">
        <img src={hope} className="w-full h-full object-cover rounded-2xl hover:scale-110 duration-300"></img>
        </div>
        <div className="col-span-2 row-span-4 bg-white rounded-2xl overflow-hidden">
        <img src={award} className="w-full h-full object-cover rounded-lg hover:scale-110 duration-300"></img>
        </div>
        <div className="col-span-2 row-span-4 bg-white rounded-2xl "></div>
        <div className="col-span-8 row-span-2 bg-white rounded-2xl p-2 flex justify-center items-center">
          <p className="text-black font-extrabold text-2xl">Engage with industry experts discussing the future trends in electronics</p>
        </div>
        
        
      </div>
      
    </div>
  )
}

export default Event