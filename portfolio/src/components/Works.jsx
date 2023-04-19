import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {

  return(
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1.05,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[500px]"
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-between m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src={github}
                alt="github"
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <p 
                className='w-1/2 h-1/2 text-center mr-2'
                onClick={() => window.open(live_demo_link, "_blank")}
              >Live</p>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {
            tags.map(tag => (
              <p
                key={tag.name}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  );
}

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Mitt arbeid</p>
        <h2 className={styles.sectionHeadText}>Prosjekter</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Følgende prosjekter viser mine ferdigheter og erfaring gjennom
          real-world eksempler. Hvert prosjekt er kort beskrevet med lenker
          til kode repositories og live demoer.
        </motion.p>
      </div>

      {/* Cards */}
      <div className='mt-20 flex flex-wrap gap-7'>
        {
          projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");