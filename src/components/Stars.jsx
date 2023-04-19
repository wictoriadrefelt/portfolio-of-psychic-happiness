import React from "react";
import Particle from "./Particle";

const StarryNight = () => {
  const particleSizes = [1, 2, 3];

  return (
    <div style={{ position: "relative", width: "100vw", height: "100%" }}>
      {particleSizes.map((size, index) => (
        <Particle key={index} size={size} />
      ))}
    </div>
  );
};

export default StarryNight;
