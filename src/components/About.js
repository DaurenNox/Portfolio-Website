import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top mt-20 overflow-hidden'
            style={{
              borderRadius: '12%',
              filter: 'blur(0.7px)',
              opacity: 0.8,
            }}
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>Full-Stack Developer & Entrepreneur. </h3>
            <p className='mb-6'>
            I was first introduced to blockchain in 2015 and instantly fascinated by its potential for transformation. Since then, I've actively contributed to the open-source and blockchain testers community. With a passion for AI, psychology, content creation, and financial markets, I bring a diverse perspective to the table. <br/><br/> 
            <p className='font-bold'>Fun fact: the captivating image on the left was created using AI.</p>
            </p>
            {/* stats */}
            {/* ... */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
