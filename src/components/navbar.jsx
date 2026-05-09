import React from 'react'
import icon from './img/menu.png'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  let page_name = "";
    if (location.pathname === '/') {
        page_name = "Home Page"
    } else if (location.pathname === '/about') {
        page_name = "About Page"
    } else if (location.pathname === '/projects') {
        page_name = "Projects Page"
    } else if (location.pathname === '/contact') {
        page_name = "Contact Page"
    }else if (location.pathname === '/certificates') {
        page_name = "Certificates Page"
    }   

  return (
    <div className='flex w-full h-16 items-center px-5'>

        <h5 className='
            text-2xl
            md:text-3xl
            boldonse-regular
            font-bold
            ps-5
            py-2
            text-gray-800
        '>
            {page_name}
        </h5>

        {/* Desktop Menu */}
        <div className='
            ml-auto
            hidden
            md:mr-10
            md:flex
            gap-10
        '>
                <Link className='text-gray-600 hover:text-blue-500' to="/">
                    <h5>Home</h5>
                </Link>
                <Link className='text-gray-600 hover:text-blue-500' to="/about">
                    <h5>About</h5>
                </Link>
                <Link className='text-gray-600 hover:text-blue-500' to="/projects">
                    <h5>Projects</h5>
                </Link>
            <Link className='text-gray-600 hover:text-blue-500' to="/contact">
                <h5>Contact</h5>
            </Link>
            <Link className='text-gray-600 hover:text-blue-500' to="/certificates">
                <h5>Certificates</h5>
            </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className='ml-auto md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
            <img
            className='h-15 w-15'
            src={icon}
            alt="menu"
            />
        </div>
        {/* Mobile Menu */}
        <div className={`
            oneset-regular
            absolute
            top-16
            right-0
            w-full
            bg-gray-300
            text-gray-800
            flex
            flex-col
            items-center
            gap-5
            py-5
            ${menuOpen ? 'flex' : 'hidden'}
        `}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
                <h5>Home</h5>
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
                <h5>About</h5>
            </Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>
                <h5>Projects</h5>
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <h5>Contact</h5>
            </Link>
            <Link to="/certificates" onClick={() => setMenuOpen(false)}>
                <h5>Certificates</h5>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
