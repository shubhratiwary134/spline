import '../App.css'

const Navbar = () => {
  return (
    <div className='flex justify-between  bg-[#8C8C8E] p-2   text-black text-2xl navbar-container'>
        <div>Logo</div>
        <div >
            <ul className=' flex justify-around gap-10 '>
                <li><a  href='#' className='hover:text-white duration-200'>About</a></li>
               {/* <div className='vl' ></div> */}
                <li><a href='#' className='hover:text-white duration-200'>Products</a></li>
                {/* <div className='vl'></div> */}
                <li><a href='#' className='hover:text-white duration-200'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar