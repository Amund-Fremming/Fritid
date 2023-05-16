import React from 'react'
import Typewriter from 'typewriter-effect';

import { styles } from '../style';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* Divs for neon line */}
          <div className='w-5 h-5 rounded-full bg-[#05F4C9]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-neokill to-primary' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}, text-white`}>Hei, jeg er <span className='text-[#05F4C9]'>Amund</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 flex hover:text-neokill`}>
            Jeg utvikler med <span className='flex'>&nbsp;
            <Typewriter 
              options = {{
                  strings: ["backend", "web-applikasjoner"],
                  autoStart: true,
                  loop: true,
                  cursor: "_"
              }}
            />
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero