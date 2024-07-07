import Spline from '@splinetool/react-spline';
import Navbar from './Components/Navbar';
import Featured from './Components/Featured';

export default function App() {
  return (
    <div  >
      <div>
        <Navbar></Navbar>
      </div>
       <div className='h-screen  m-5 rounded-3xl  '>
       <Spline scene="https://prod.spline.design/9mRzVM9RPXfj6yHY/scene.splinecode" className='rounded-3xl'/>
    </div>
    <div className='flex w-full  justify-center items-center'>
     <Featured></Featured>
    </div>
   
    </div>
   
  );
}


