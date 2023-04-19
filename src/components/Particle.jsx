import React from "react";
import { motion } from "framer-motion";

const Particle = ({ size }) => {
  const variants = {
    initial: {
      opacity: 0,
      y: -20,
      x: Math.random() * window.innerWidth,
      scale: 0,
    },
    animate: {
      opacity: 1,
      y: window.innerHeight + 20,
      x: Math.random() * window.innerWidth,
      scale: [0, size, 0],
      transition: {
        duration: Math.random() * 4 + 4,
        ease: "easeOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      className="particle"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "white",
      }}
      variants={variants}
      initial="initial"
      animate="animate"
    />
  );
};

export default Particle;
