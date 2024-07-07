import Spline from '@splinetool/react-spline';
import Navbar from './Components/Navbar';
import Featured from './Components/Featured';

export default function App() {
  return (
    <div  >
      <div className='h-screen flex flex-col justify-between'>
      <div>
        <Navbar></Navbar>
      </div>
       <div className=' shadow-black overflow-hidden object-contain'>
       <Spline scene="https://prod.spline.design/9mRzVM9RPXfj6yHY/scene.splinecode" className='h-full'/>
    </div>
      </div>
      
    <div className='mt-5 flex w-full  justify-center items-center'>
     <Featured></Featured>
    </div>
   
    </div>
   
  );
}


