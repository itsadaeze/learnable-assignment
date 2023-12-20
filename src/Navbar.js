
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className=" text-2xl ">Viss Fashions</div>

        {/* Navigation Links */}
        <div className='space-x-9' >
          <a href="www.facebook.com" className=" hover:text-gray-300">About</a>
          <a href="" className=" hover:text-gray-500">Clothing</a>
          <a href="" className=" hover:text-gray-500">Accessories</a>
          <a href="" className=" hover:text-gray-500">Services</a>
        </div>

        {/* Sign Up and Login Buttons */}
        <div className="space-x-4">
        <Link to="/Login">
          <button className="">log in</button>
          </Link>
          <Link to="/Login">
          <button className="bg-[#E87A14] text-[#FFFFFF] px-6 py-2 rounded-xl text-md ">Sign up</button>
         </Link>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
