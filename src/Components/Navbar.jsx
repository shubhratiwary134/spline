import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-[#8C8C8E] p-5 text-white text-2xl'>
        <div>Logo</div>
        <div >
            <ul className=' flex justify-around gap-20'>
                <li><a  href='#'>About</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar