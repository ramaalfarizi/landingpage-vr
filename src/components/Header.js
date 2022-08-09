import React from 'react';
import Logo from '../assets/img/logo.svg';
import Nav from './Nav';
import { HiMenu } from 'react-icons/hi';

const Header = ({ setNavMobile }) => {
  return (
    <header className='py-6' data-aos='fade-down' data-aos-duration='2000' data-aos-delay='900'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <a href='#'>
            <img className='h-[30px]' src={Logo} alt=''/>
          </a>
          {/* nav */}
          <Nav/>
          {/* mobile nav */}
          <HiMenu onClick={() => setNavMobile(true)} className='text-3xl text-white cursor-pointer lg:hidden'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
