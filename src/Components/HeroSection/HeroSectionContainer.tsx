import React from "react";
import HeroSectionBottom from "./HeroSectionBottom";
import HeroSectionTop from "./HeroSectionTop";
import { motion } from "framer-motion";
const HeroSectionContainer = () => {
  return (
    <div className="flex flex-col p-10 sm:p-2 gap-[100px]">
      <div>
        <motion.div
          className="box"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1,
          }}
        >
          <HeroSectionTop />
        </motion.div>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <HeroSectionBottom data={""} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSectionContainer;
