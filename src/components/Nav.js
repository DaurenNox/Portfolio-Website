import React from 'react';
import {BiClinic, BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquare, BsSquare} from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>

  <div className='container mx-auto'>
    {/* nav */}

    <div className='w-full bg-black/20 h-[70] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-10 flex justify-between text-2x1 text-white/50'>

      <Link 
      to='home' 
       active='active' 
       smooth={true} 
       spy={true}
       offset={-200}
      className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BiHomeAlt/>
      </Link>

      <Link to='about' 
      active='active' 
      smooth={true} 
      spy={true} 
      className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BiUser />
      </Link>
      
      <Link to='services' active='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BsClipboardData />
      </Link>

      <Link to='work' active='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BsBriefcase />
      </Link>

      <Link to='contact' active='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BsChatSquare />
      </Link>


    </div>
    </div>
    </nav>
    
    };

export default Nav;
