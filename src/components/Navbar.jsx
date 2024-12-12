import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center bg-pink-600'>
        <div className='m-auto'>
        <NavLink to="/">
        <img src='https://image.shutterstock.com/image-vector/looking-best-shopping-logo-website-260nw-1718091835.jpg' alt='webLogo' className='w-16 h-16'></img>
        </NavLink >
        </div>

        <div className='flex items-center m-auto gap-12 text-xl text-white'>
        <NavLink to="/">
          <div>Home</div>
        </NavLink>

        <NavLink to="/cart">
          <div><FaShoppingCart/></div>
        </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
