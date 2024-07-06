import Spline from '@splinetool/react-spline';
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <div >
      <div>
        <Navbar></Navbar>
      </div>
       <div className=' shadow-2xl  '>
       <Spline scene="https://prod.spline.design/9mRzVM9RPXfj6yHY/scene.splinecode" />
    </div>
    <div className='flex w-full h-72 justify-center items-center'>
      <p className='text-7xl'>Escape The Rat Race</p>
    </div>
   
    </div>
   
  );
}


