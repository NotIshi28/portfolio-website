import {motion} from 'framer-motion';
import React, { useEffect, useState } from "react";

import {styles} from '../styles';
import {ComputersCanvas} from './canvas';



const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I am
            <span className='text-[#16e16e]'> Ishit</span>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Games, Apps   <br className='sm:block hidden' />
            and Web Applications
          </p>
          </h1>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero