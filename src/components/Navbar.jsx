import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import logo from '../images/logo.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    function toggle(){
        setIsOpen(!isOpen);
    }


  return (
    <header className='p-8 md:px-24 absolute w-full z-[100]'>
        <nav className='w-full flex items-center justify-between'>
        <Link to="/">
            <img src={logo} alt="logo" />
        </Link>
            <ul className='text-white items-center space-x-8 hidden md:flex'>
                <Link to="/about">
                    <li className='cursor-pointer hover:text-teal-500'>About</li>
                </Link>
                <Link to="/discover">
                    <li className='cursor-pointer hover:text-teal-500'>Discover</li>
                </Link>
                <Link to="/get-started">
                    <li className='cursor-pointer hover:text-teal-500'>Get Started</li>
                </Link>
            </ul>
            {isOpen ? <AiOutlineClose 
                className='text-white block md:hidden cursor-pointer' 
                size={25}
                onClick={toggle}
                 /> 
                : <AiOutlineMenu 
                className='text-white block md:hidden cursor-pointer' 
                size={25}
                onClick={toggle}
            />}
            {/* Mobile Menu */}
                <ul className={isOpen ? 
                        'text-black bg-white w-[75%] max-w-[400px] px-6 rounded-xl flex flex-col text-left absolute left-1/2 -translate-x-1/2 top-[100px] z-[10] shadow-xl md:hidden' : 
                        'md:hidden hidden'
                    }>
                    <Link to="/about">
                        <li className='font-bold text-lg cursor-pointer py-8 hover:text-teal-500'>About</li>
                    </Link>
                    <hr />
                    <Link to="/discover">
                        <li className='font-bold text-lg cursor-pointer py-8 hover:text-teal-500'>Discover</li>
                    </Link>
                    <hr />
                    <Link to="/get-started">
                        <li className='font-bold text-lg cursor-pointer py-8 hover:text-teal-500'>Get Started</li>
                    </Link>
                </ul>
        </nav>
    </header>
  )
}

export default Navbar