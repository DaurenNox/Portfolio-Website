import React from 'react';
import Logo from '../assets/logo.png';
import { FaTwitter, FaGithub, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <a href='#' style={{ marginBottom: '-50px', marginTop:'-20px' }}>
          <img src={Logo} alt='' />
        </a>
        {/* social icons */}
        <div className='flex items-center space-x-4'>
          <a href='https://twitter.com/DaurenNox' target='_blank' rel='noopener noreferrer' className='hover:bg-gradient-to-r from-blue-500 to-teal-400 rounded-full p-2'>
            <FaTwitter className='text-2xl' />
          </a>
          <a href='https://github.com/DaurenNox' target='_blank' rel='noopener noreferrer' className='hover:bg-gradient-to-r from-blue-500 to-teal-400 rounded-full p-2'>
            <FaGithub className='text-2xl' />
          </a>
          <a href='https://t.me/dauren4' target='_blank' rel='noopener noreferrer' className='hover:bg-gradient-to-r from-blue-500 to-teal-400 rounded-full p-2'>
            <FaTelegram className='text-2xl' />
          </a>
          <a href='mailto:dauren.nox@gmail.com' className='hover:bg-gradient-to-r from-blue-500 to-teal-400 rounded-full p-2'>
            <FaEnvelope className='text-2xl' />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
