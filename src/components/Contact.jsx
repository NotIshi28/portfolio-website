import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center items-center`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#202020] p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Socials</h3>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <a href="https://github.com/NotIshi28" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-tertiary rounded-lg hover:bg-[#444]">
            <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="GitHub" className="w-8 h-8 mr-3" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/ishitrastogi/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-tertiary rounded-lg hover:bg-[#444]">
            <img src="https://avatars.githubusercontent.com/u/357098?s=200&v=4" alt="LinkedIn" className="w-8 h-8 mr-3" />
            <span>LinkedIn</span>
          </a>
          <a href="https://notishi28.itch.io" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-tertiary rounded-lg hover:bg-[#444]">
            <img src="https://avatars.githubusercontent.com/u/14803619?s=200&v=4" alt="Behance" className="w-8 h-8 mr-3" />
            <span>Itch.Io</span>
          </a>
          <a href="mailto:your@email.com" className="flex items-center p-4 bg-tertiary rounded-lg hover:bg-[#444]">
            <img src="https://i.pinimg.com/736x/b8/a3/2d/b8a32d5bfb694e012dde03d2e6b90c9f.jpg" alt="Email" className="w-8 h-8 mr-3" />
            <span>Email</span>
          </a>
          {/* <a href="https://www.behance.net/ishitrastogi" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-tertiary rounded-lg hover:bg-[#444]">
            <img src="https://avatars.githubusercontent.com/u/1197743?s=200&v=4" alt="Behance" className="w-8 h-8 mr-3" />
            <span>Behance</span>
          </a> */}
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")