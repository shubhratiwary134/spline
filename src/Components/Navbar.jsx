import '../App.css'

const Navbar = () => {
  return (
    <div className='flex justify-between items-end bg-[#8C8C8E] p-5 text-black text-2xl border-b-2 border-black navbar-container'>
        <div>Logo</div>
        <div >
            <ul className=' flex justify-around gap-10 items-end'>
                <li><a  href='#'>About</a></li>
               <div className='vl'></div>
                <li><a href='#'>Products</a></li>
                <div className='vl'></div>
                <li><a href='#'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar