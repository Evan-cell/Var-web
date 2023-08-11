import React,{useState} from 'react'

function Navbar() {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState)
    }
  return (
    <nav className='relative container mx-auto p-6'>
        <div className="flex items-center justify-between">
            <div className="pt-2 h-16 w-16">
                <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-telestream-press-kit-12.png" alt=""  />
            </div>
            <div className={`hidden md:flex space-x-6 ${isMenuOpen ? 'hidden' : 'block'}`}>
                <a href="" className='font-semibold text-white'>Home</a>
                <a href="" className='font-semibold text-white'>Features</a>
                <a href="" className='font-semibold text-white'>Pricing</a>
                <a href="" className='font-semibold text-white'>Blog</a>
 
            </div>
            {/* button */}
            <a href=""className={`hidden md:block p-3 px-6 pt-2 text-gray-900 bg-gray-100 rounded-md font-semibold ${isMenuOpen ? 'hidden' : 'block'}`}>Discover</a>
            <button id='menu-btn' className="block hamburger md:hidden focus:outline-none">
                <span className="hamburgertop"></span>
                <span className="hamburgermiddle"></span>
                <span className="hamburgerbottom"></span>
            </button>
        </div>
    </nav>
  )
}

export default Navbar