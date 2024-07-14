import Spline from '@splinetool/react-spline';
import Navbar from './Components/Navbar';

import ImageScroll from './Components/ImageScroll';
import ImageGallery from './Components/ImageGallery';
import ComicPage from './Components/ComicPage';
import { motion } from 'framer-motion';
import Logos from './Components/Logos';
import Event from './Components/Event';

export default function App() {
  return (
    <div className='flex flex-col items-center' >
      <div className='h-screen  flex flex-col '>
      <div >
        <Navbar></Navbar>
      </div>
      <div className='flex-1 overflow-hidden'>
      <Spline scene="https://prod.spline.design/9mRzVM9RPXfj6yHY/scene.splinecode"/>
      </div>
    
      </div>
     
      <ImageScroll></ImageScroll>
      <ComicPage></ComicPage>
      <Logos></Logos>
      <ImageGallery></ImageGallery>
     <Event></Event>
    
     <motion.button 
      initial={{y:50,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:.5}}
      className='sticky bottom-5  border-white w-1/12  text-white bg-black py-2 px-6 border-2 rounded-full hover:bg-white hover:text-black duration-500'>Buy Now</motion.button>
  
    </div>
   
  );
}


