import React from 'react';

import {BsFillCheckCircleFill} from 'react-icons/bs';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

//services data

const services = [
  {
    name: 'Websites',
    description: 'Building websites with and without blockchain integrations.',
    link: 'Learn more',
  },
  {
    name: 'Consultations',
    description: 'Will give your business a thorough evaluation.',
    link: 'Learn more',
  },
  {
    name: 'Web3 Marketing',
    description: 'Will develop a personalized content strategy for your business.',
    link: 'Learn more',
  },
]
const handleButtonClick = () => {
  // Perform the desired action here
  // For example, you can navigate to a different page using react-router or open a modal
  window.open('https://calendly.com/zxcprxeoxe/30min', '_blank');
};
const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
      {/*text*/}
      <motion.div
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once:false, amount: 0.3}}      
      className='flex-1  mr-7' style={{borderRadius:'20px'}}>
        <h2 className='h2 text-accent mb-6'>What I do</h2>
        <h3 className='h3 max-w-[455px] mb-16 text-white'>
    Need expert advice or technical content written for? <br /><br />
    I've got you covered. <br /><br/>
    Consultations and writing assistance, both in blockchain and non-blockchain questions.
  </h3>
  <button onClick={handleButtonClick} className="btn btn-sm">Schedule a Call</button>
      </motion.div>
      {/*services*/}
      <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount: 0.3}}            
      className='flex-1 '>
        {/* services list */}
        <div>
          {services.map((service, index) => {
            const {name, description, link} = service;
            return (
            <div className='border-b border-white/20 h-[146] mb-[38px] flex' key={index}>
              <div className='max-w-[476px]'>
                <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                <p className='font-secondary leading-tight'>{description}</p>
                </div>
              <div className='flex flex-col flex-1 items-end'> 
              <div className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                <BsFillCheckCircleFill />
                </div>
                </div>
            </div>
            );
          })}
          </div>
          </motion.div>
      </div>
    </div>
    </section>
  )
};

export default Services;
