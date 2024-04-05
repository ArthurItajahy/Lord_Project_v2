import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full lotr-gradient p-[20px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-40 h-40 object-contain py-[0.2px] rounded-[20px]'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}
    
      
      
      >
        <p className={styles.sectionSubText}>"The world is changed... I feel it in the water... I smell it in the air... Much that once was is lost, for none now live who remember it..." - Galadriel</p>
        <h2 className={styles.sectionHeadText}>Books.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Sure thing! J.R.R. Tolkien, born on January 3, 1892, wrote amazing
        stories like "The Hobbit" and "The Lord of the Rings."
        His books take us on incredible adventures with characters like
        Bilbo and Frodo, teaching us about bravery and friendship along the way.
        Tolkien's
        tales are timeless treasures that bring joy to readers of all ages.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "books");