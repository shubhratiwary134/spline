import '../App.css'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-10 bg-white p-2   text-black text-sm navbar-container'> 
        <div>Logo</div>
        <div >
            <ul className=' flex justify-around gap-10 '>
                <li><a  href='#' className='hover:text-black duration-200'>About</a></li>
               {/* <div className='vl' ></div> */}
                <li><a href='#' className='hover:text-black duration-200'>Laptop</a></li>
                <li><a href='#' className='hover:text-black duration-200'>Mobile</a></li>
                <li><a href='#' className='hover:text-black duration-200'>Tablet</a></li>
                <li><a href='#' className='hover:text-black duration-200'>Earphone</a></li>
                {/* <div className='vl'></div> */}
                <li><a href='#' className='hover:text-black duration-200'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar