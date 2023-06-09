import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'



const Work = () => {
  const handleButtonClick = () => {
    // Perform the desired action here
    // For example, you can navigate to a different page using react-router or open a modal
    window.open('https://github.com/DaurenNox', '_blank');
  };
  
  return (
   <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
      {/* text*/}
      <motion.div 
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
      className='flex-1 flex-col'>
        <h2 className='h2 leading-tight text-accent'>
          My latest <br/>
               Work.</h2>
               <p className='max-w-sm mb-16'> 'Developers, also known as software developer entirely new resources.',
</p>
<button onClick={handleButtonClick} className="btn btn-sm">See my work</button>
</motion.div>


      {/* image */}
      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
      className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
        {/*overlay*/}
        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
        {/*img*/}
        <img className='group-hover:scale-125 transition-all duration-500'
         src={Img1} 
         alt='' />
        {/* pretitle */}
        <div className='absolute -bottom-full left-12
        group-hover:bottom-24 transition-all duration-500 z-50'>
          <span className='text-gradient'>Personal Project</span>
          </div>
        {/* title*/}
        <div className='absolute -bottom-full left-12
        group-hover:bottom-14 transition-all duration-500 z-50'>
          <span className='text-3x1 text-white'>Spin Your Life</span>

        </div>
        </motion.div>
        
        </div>


  
  <motion.div 
        variants={fadeIn('right', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
  className='flex-1 flex flex-col gap-y-10'>
    {/*image*/}
    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
        {/*overlay*/}
        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
        {/*img*/}
        <img className='group-hover:scale-125 transition-all duration-500'
         src={Img2} 
         alt='' />
        {/* pretitle */}
        <div className='absolute -bottom-full left-12
        group-hover:bottom-24 transition-all duration-500 z-50'>
          <span className='text-gradient'>Blockchain Education Project</span>
          </div>
        {/* title*/}
        <div className='absolute -bottom-full left-12
        group-hover:bottom-14 transition-all duration-500 z-50'>
          <span className='text-3x1 text-white'>PTB Academy</span>
        </div>
        </div>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
        {/*overlay*/}
        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
        {/*img*/}
        <img className='group-hover:scale-125 transition-all duration-500'
         src={Img3} 
         alt='' />
        {/* pretitle */}
        <div className='absolute -bottom-full left-12
        group-hover:bottom-24 transition-all duration-500 z-50'>
          <span className='text-gradient'>Web3 Marketing Agency</span>
          </div>
        {/* title*/}
        <div className='absolute -bottom-full left-12
        group-hover:bottom-14 transition-all duration-500 z-50'>
          <span className='text-3x1 text-white'>The Web3 Wave</span>
        </div>
        </div>

</motion.div>  
  </div>
  </div>

 


    </section>
  )
};

export default Work;
