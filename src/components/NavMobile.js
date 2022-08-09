import React from 'react';
import { IoClose } from 'react-icons/io5';

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className='lg:hidden bg-[#251f3f] w-full h-full'>
      <IoClose onClick={() => setNavMobile(false)} className='absolute text-3xl cursor-pointer left-4 top-6'/>
      <ul className='flex flex-col items-center justify-center h-full space-y-8 font-secondary'>
        <li className='text-lg'><a href='#'>Home</a></li>
        <li className='text-lg'><a href='#'>Company</a></li>
        <li className='text-lg'><a href='#'>Features</a></li>
        <li className='btn'><a href='#'>Sign up</a></li>
      </ul>
    </nav>
  );
};

export default NavMobile;
