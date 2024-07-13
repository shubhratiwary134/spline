import Spline from '@splinetool/react-spline';
import Navbar from './Components/Navbar';

import ImageScroll from './Components/ImageScroll';
import ImageGallery from './Components/ImageGallery';
import ComicPage from './Components/ComicPage';

export default function App() {
  return (
    <div  >
      <div className='h-screen  flex flex-col '>
      <div >
        <Navbar></Navbar>
      </div>
      <div className='flex-1 overflow-hidden'>
      <Spline scene="https://prod.spline.design/9mRzVM9RPXfj6yHY/scene.splinecode" />
      </div>
    
      </div>
     
      <ImageScroll></ImageScroll>
      <ImageGallery></ImageGallery>
    {/* <div className=' flex w-full '>
     <Featured></Featured>
    </div> */}
    <ComicPage></ComicPage>
  
    </div>
   
  );
}


