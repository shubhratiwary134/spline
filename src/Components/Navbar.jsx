import '../App.css'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-[#BFCAC9] p-2   text-white text-sm navbar-container'> 
        <div>Logo</div>
        <div >
            <ul className=' flex justify-around gap-10 '>
                <li><a  href='#' className='hover:text-black duration-200'>About</a></li>
               {/* <div className='vl' ></div> */}
                <li><a href='#' className='hover:text-black duration-200'>Products</a></li>
                {/* <div className='vl'></div> */}
                <li><a href='#' className='hover:text-black duration-200'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar