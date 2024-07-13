import { motion } from "framer-motion"
const ComicPage = () => {
  return (
    <div className='ComicContainer w-screen h-[300vh] overflow-hidden '>
<div className="flex justify-around">
<div className="mt-20 flex flex-col gap-20">
<motion.div
initial={{x:-200}}
whileInView={{x:0}}
whileHover={{x:50,scale:1.1}}
transition={{duration:.5}}
viewport={{
  amount:0.2,
  once:false
}}
className="max-w-xl mx-auto mt-8 px-10 py-6  rounded-lg shadow-md bg-gray-800">
  <div className="flex items-center">
    <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50" alt="Customer Photo"/>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-slate-400">John Doe</h3>
      <p className="text-sm text-white">Verified Buyer</p>
    </div>
  </div>
  <div className="mt-4">
    <div className="flex items-center">
      
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.453a1 1 0 00.95.69h3.624c.969 0 1.371 1.24.588 1.81l-2.934 2.128a1 1 0 00-.364 1.118l1.12 3.453c.3.921-.755 1.688-1.538 1.118l-2.934-2.128a1 1 0 00-1.176 0l-2.934 2.128c-.783.57-1.838-.197-1.538-1.118l1.12-3.453a1 1 0 00-.364-1.118L2.791 8.88c-.783-.57-.381-1.81.588-1.81h3.624a1 1 0 00.95-.69l1.12-3.453z"/></svg>
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.453a1 1 0 00.95.69h3.624c.969 0 1.371 1.24.588 1.81l-2.934 2.128a1 1 0 00-.364 1.118l1.12 3.453c.3.921-.755 1.688-1.538 1.118l-2.934-2.128a1 1 0 00-1.176 0l-2.934 2.128c-.783.57-1.838-.197-1.538-1.118l1.12-3.453a1 1 0 00-.364-1.118L2.791 8.88c-.783-.57-.381-1.81.588-1.81h3.624a1 1 0 00.95-.69l1.12-3.453z"/></svg>
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.453a1 1 0 00.95.69h3.624c.969 0 1.371 1.24.588 1.81l-2.934 2.128a1 1 0 00-.364 1.118l1.12 3.453c.3.921-.755 1.688-1.538 1.118l-2.934-2.128a1 1 0 00-1.176 0l-2.934 2.128c-.783.57-1.838-.197-1.538-1.118l1.12-3.453a1 1 0 00-.364-1.118L2.791 8.88c-.783-.57-.381-1.81.588-1.81h3.624a1 1 0 00.95-.69l1.12-3.453z"/></svg>
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.453a1 1 0 00.95.69h3.624c.969 0 1.371 1.24.588 1.81l-2.934 2.128a1 1 0 00-.364 1.118l1.12 3.453c.3.921-.755 1.688-1.538 1.118l-2.934-2.128a1 1 0 00-1.176 0l-2.934 2.128c-.783.57-1.838-.197-1.538-1.118l1.12-3.453a1 1 0 00-.364-1.118L2.791 8.88c-.783-.57-.381-1.81.588-1.81h3.624a1 1 0 00.95-.69l1.12-3.453z"/></svg>
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.453a1 1 0 00.95.69h3.624c.969 0 1.371 1.24.588 1.81l-2.934 2.128a1 1 0 00-.364 1.118l1.12 3.453c.3.921-.755 1.688-1.538 1.118l-2.934-2.128a1 1 0 00-1.176 0l-2.934 2.128c-.783.57-1.838-.197-1.538-1.118l1.12-3.453a1 1 0 00-.364-1.118L2.791 8.88c-.783-.57-.381-1.81.588-1.81h3.624a1 1 0 00.95-.69l1.12-3.453z"/></svg>
    </div>
    <p className="mt-2 text-white">This product exceeded my expectations. The build quality is fantastic and it performs flawlessly. Highly recommend to anyone looking for a reliable and affordable option.</p>
  </div>
</motion.div>



</div>
<div>
<motion.div
initial={{x:-200}}
whileInView={{x:0}}
whileHover={{x:-50,scale:1.1}}
transition={{duration:.5}}
viewport={{
  amount:0.5,
  once:false
}}
className="max-w-xl mx-auto mt-8 p-6 border rounded-lg shadow-md bg-white">
  <div className="flex items-center">
    <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50" alt="Customer Photo"/>
    <div className="ml-4">
      <h3 className="text-lg font-semibold">John Doe</h3>
      <p className="text-sm text-gray-600">Verified Buyer</p>
    </div>
  </div>
  <div className="mt-4">
    <div className="flex items-center">
      
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.453a1 1 0 00.95.69h3.624c.969 0 1.371 1.24.588 1.81l-2.934 2.128a1 1 0 00-.364 1.118l1.12 3.453c.3.921-.755 1.688-1.538 1.118l-2.934-2.128a1 1 0 00-1.176 0l-2.934 2.128c-.783.57-1.838-.197-1.538-1.118l1.12-3.453a1 1 0 00-.364-1.118L2.791 8.88c-.783-.57-.381-1.81.588-1.81h3.624a1 1 0 00.95-.69l1.12-3.453z"/></svg>
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.453a1 1 0 00.95.69h3.624c.969 0 1.371 1.24.588 1.81l-2.934 2.128a1 1 0 00-.364 1.118l1.12 3.453c.3.921-.755 1.688-1.538 1.118l-2.934-2.128a1 1 0 00-1.176 0l-2.934 2.128c-.783.57-1.838-.197-1.538-1.118l1.12-3.453a1 1 0 00-.364-1.118L2.791 8.88c-.783-.57-.381-1.81.588-1.81h3.624a1 1 0 00.95-.69l1.12-3.453z"/></svg>
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.453a1 1 0 00.95.69h3.624c.969 0 1.371 1.24.588 1.81l-2.934 2.128a1 1 0 00-.364 1.118l1.12 3.453c.3.921-.755 1.688-1.538 1.118l-2.934-2.128a1 1 0 00-1.176 0l-2.934 2.128c-.783.57-1.838-.197-1.538-1.118l1.12-3.453a1 1 0 00-.364-1.118L2.791 8.88c-.783-.57-.381-1.81.588-1.81h3.624a1 1 0 00.95-.69l1.12-3.453z"/></svg>
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.453a1 1 0 00.95.69h3.624c.969 0 1.371 1.24.588 1.81l-2.934 2.128a1 1 0 00-.364 1.118l1.12 3.453c.3.921-.755 1.688-1.538 1.118l-2.934-2.128a1 1 0 00-1.176 0l-2.934 2.128c-.783.57-1.838-.197-1.538-1.118l1.12-3.453a1 1 0 00-.364-1.118L2.791 8.88c-.783-.57-.381-1.81.588-1.81h3.624a1 1 0 00.95-.69l1.12-3.453z"/></svg>
      <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.453a1 1 0 00.95.69h3.624c.969 0 1.371 1.24.588 1.81l-2.934 2.128a1 1 0 00-.364 1.118l1.12 3.453c.3.921-.755 1.688-1.538 1.118l-2.934-2.128a1 1 0 00-1.176 0l-2.934 2.128c-.783.57-1.838-.197-1.538-1.118l1.12-3.453a1 1 0 00-.364-1.118L2.791 8.88c-.783-.57-.381-1.81.588-1.81h3.624a1 1 0 00.95-.69l1.12-3.453z"/></svg>
    </div>
    <p className="mt-2 text-gray-800">This product exceeded my expectations. The build quality is fantastic and it performs flawlessly. Highly recommend to anyone looking for a reliable and affordable option.</p>
  </div>
</motion.div>
</div>
</div>
    </div>
  )
}

export default ComicPage