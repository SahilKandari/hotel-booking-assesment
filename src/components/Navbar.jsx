import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome, AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { LiaHotelSolid } from "react-icons/lia";
import { SlGlobeAlt } from "react-icons/sl";
import { FaUmbrellaBeach } from "react-icons/fa";
import { PiTrainSimpleDuotone } from "react-icons/pi";
import { LuBus } from "react-icons/lu";
import PopButton from './PopButton';
import Lottie from 'lottie-react';
import logo from '../assets/Animation - 1712138466128.json'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] py-2 px-3 flex justify-between fixed top-0 z-20 bg-white'>
      <div className='flex justify-start gap-2 items-center'>
        <Link to='/' className='p-px hover:bg-gray-100 rounded duration-200'> 
          <Lottie className='max-w-[60px]' animationData={logo}/>
        </Link>
        <div className='flex items-center gap-2	py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <p>Flights</p>
          <BiSolidPlaneAlt className='mt-1'/>
        </div>
        <div className='flex items-center gap-2	py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <p>Hotels</p>
          <LiaHotelSolid className='mt-1'/>
        </div>
        <div className='flex items-center gap-2	py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <p>Homestays</p>
          <AiFillHome className='mt-1'/>
        </div>
        <div className='flex items-center gap-2	py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <p>Holidays</p>
          <FaUmbrellaBeach className='mt-1'/>
        </div>
        <div className='flex items-center gap-2	py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <p>Trains</p>
          <PiTrainSimpleDuotone className='mt-1'/>
        </div>
        <div className='flex items-center gap-2	py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <p>Busses</p>
          <LuBus className='mt-1'/>
        </div>
      </div>
      <div className='flex justify-end gap-3 items-center'>
        <div className='py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <AiOutlineSearch className='text-2xl'/>
        </div>
        <div className='flex items-center gap-1	py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <SlGlobeAlt className='text-lg'/>
          <p>Languages</p>
          <AiFillCaretDown className='mt-1 text-xs	'/>
        </div>
        <div className='py-1 px-2 cursor-pointer hover:bg-gray-100 rounded font-semibold text-sm	duration-200 m-xl:hidden'>
          <p>Contact +91 8791635977</p>
        </div>
        <PopButton>Log In</PopButton>
        <PopButton bg="#ffe01b">Sign Up</PopButton>
      </div>
    </div>
  )
}

export default Navbar