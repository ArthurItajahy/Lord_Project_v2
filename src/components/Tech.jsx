import React from "react";

import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";

import { SectionWrapper } from "../hoc";

import { elves, dwarfs, mans } from "../constants";

import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";


import RingCanvas from "./canvas/Ring";


const Tech = () => {

  return (

    <>
      <div>
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.sectionSubText} mt-40 text-center`}

        >

          "The world is changed... I feel it in the water... I smell it in the air... Much that once was is lost, for none now live who remember it...
          It began with the forging of the Great Rings. Three were given to the Elves, immortal, wisest and fairest of all beings...
          Seven to the Dwarf-Lords, great miners and craftsmen of the mountain halls...
          And nine, nine rings were gifted to the race of Men, who above all else desire power...
           For within these rings was bound the strength and the will to govern each race. But they were all of them deceived, for another ring was made...
           Deep in the land of Mordor, in the Fires of Mount Doom, the Dark Lord Sauron forged a master ring, and into this ring he poured his cruelty, his malice and his will to dominate all life..."<br/> 
           - Galadriel.


        </motion.p>
      </div>

   


      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`${styles.sectionSubText} mt-80 text-center`}
      >


        " One ring to rule them all..." - Galadriel.

      </motion.p>

        <RingCanvas />

   



    </>

  );

};


export default SectionWrapper(Tech, "introduction");