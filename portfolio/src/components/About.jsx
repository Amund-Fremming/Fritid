import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, text, projectsource }) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
        onClick={() => {
          window.location.href = projectsource
        }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[300px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-20px font-bold text-center'>{title}</h3>
          <p className='text-white text-[15px]'>{text}</p>
        </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p className={styles.sectionSubText}>My hobby / school work</p>
        <br />
        <h2 className={styles.sectionHeadText}>Projects</h2>
        <br />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Tekst om meg selv...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </motion.p>

      {/* Cards */}
      <div className='mt-20 flex flex-wrap gap-10'>

        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} text={service.text} projectsource={service.projectsource} />
          ))
        }

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")