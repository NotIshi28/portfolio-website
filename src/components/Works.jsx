import React from "react";
import {Tilt} from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({index, name, description,tags,image, source_code_link,color, itch_io_link, behance_link, live_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.1, 0.5)}>
      <Tilt
        options={{
          max: 10,
          scale: 1,
          speed: 0,
        }}
        className='bg-[#202020] p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>

            {itch_io_link && (
              <div
                onClick={() => window.open(itch_io_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2'
              >
                <img
                  src="https://static.itch.io/images/itchio-textless-white.svg"
                  alt='itch.io'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}

            {behance_link && (
              <div
                onClick={() => window.open(behance_link, "_blank")}
                className='white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2'
              >
                <img
                  src="https://www.vectorlogo.zone/logos/behance/behance-icon.svg"
                  alt='behance'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}  

            {live_link && (
              <div
                onClick={() => window.open(behance_link, "_blank")}
                className='white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2'
              >
                <img
                  src="https://cloud-80wnumqcj-hack-club-bot.vercel.app/0image.png"
                  alt='website'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}            
          </div>
        </div>

        <div className='mt-5'>
          <h3 className={`${color} font-bold text-[24px]`}>{name}</h3>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-[#dedede] text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through real-world examples of my work. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work");