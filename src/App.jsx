import Spline from '@splinetool/react-spline';
import Navbar from './Components/Navbar';
import Featured from './Components/Featured';

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
      
    <div className='mt-5 flex w-full  justify-center items-center'>
     <Featured></Featured>
    </div>
   
    </div>
   
  );
}


