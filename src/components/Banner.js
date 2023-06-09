import React from 'react';
import Image from '../assets/avatar.jpg'
import { FaGithub, FaTwitter, FaTelegram, FaEnvelope} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { Type } from '@sinclair/typebox';
import { Link } from 'react-scroll';

 const Banner = () => {

  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
    <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
    {/* text */}
    <div className='flex-1 text-center font-secondary lg:text-left'>
      <motion.h1 
      variants={fadeIn('up',0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount: 0.7}}   
      className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'>
        DAUREN<br/><span>NURSEITOV</span>
      
      </motion.h1>
      
      <motion.div 
            variants={fadeIn('up',0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.7}}           
      className='mb-6 text-[36px] lg:text-[40px] 
      font-secondary font-semibold uppercase 
      leading-[1]'>
        <span className='text-white mr-4'>I am a</span>
        <TypeAnimation 
        sequence={[
          'Developer',
          2000,
          'Trader',
          2000,
          'Writer',
          2000,
        ]} 
        speed={50}
        className='text-accent'
        wrapper='span'
        repeat={Infinity}
        />
      </motion.div>
      <motion.p
          variants={fadeIn('up',0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.7}}         
          className="mb-4 max-w-lg mx-auto lg:mx-0">
          <p>Greetings!</p>
          <br/>
          <p>I'm Dauren, a blockchain enthusiast, developer, and trader.</p>
          <p>Passionate about exploring the potential of blockchain and AI.</p>
          <p>When not immersed in the digital realm, you can find traveling the world, and indulging in captivating films.</p>
          <p>Let's connect!</p>
          <br/>
          <p>Cheers,</p>
          <p>Dauren</p>    
       </motion.p>
       <motion.div 
              variants={fadeIn('up',0.8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount: 0.7}}             
        className='flex max-w-max gap-x-6 
        items-center mb-12 mx-auto lg:mx-0'>
<Link
  to='contact'
  active='active'
  smooth={true}
  spy={true}
  className='btn btn-lg flex justify-center items-center'
>
  Contact me
</Link>
          <Link to='work' active='active'
  smooth={true}
  spy={true} className="text-gradient btn-link">
  My Portfolio
</Link>
        </motion.div>
            {/*socials*/}
    <motion.div 
          variants={fadeIn('up',0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.7}}     
    className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
      <a href="https://twitter.com/DaurenNox" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://github.com/DaurenNox" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://t.me/dauren4" target="_blank" rel="noopener noreferrer">
        <FaTelegram />
      </a>
      <a href="mailto:dauren.nox@gmail.com">
  <FaEnvelope />
</a>

    </motion.div>

    </div>

    {/* image */}
    <motion.div
          variants={fadeIn('down',0.5)}
          initial='hidden'
          whileInView={'show'}
    className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
      <img className='object-center mx-auto' src={Image} alt='' style={{borderRadius:'80px'}} />    
    </motion.div>
    </div> 
    </div>
    </section>
  )
};

export default Banner;
