
import Spline from '@splinetool/react-spline';
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <div>
       <div className='flex flex-col max-h-screen '> 
   <Navbar></Navbar>
   <Spline scene="https://prod.spline.design/9mRzVM9RPXfj6yHY/scene.splinecode" />
   </div>
    </div>
  );
}

