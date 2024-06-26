import React from "react";
import Congratulation from "../../Components/CongratulationComponents/Congratulation";
import { motion } from "framer-motion";

const congratulationpage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />
      <Congratulation />
      <motion.div />
    </div>
  );
};

export default congratulationpage;
