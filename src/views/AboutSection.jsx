import React, { useRef } from "react";
import BeeImg from "../assets/img/bee-3d-removebg.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useFollowPointer } from "../utils/useFollowPointer";

const AboutSection = () => {
  const beeRef = useRef(null);
  const targetRef = useRef(null);

  const { x, y } = useFollowPointer(beeRef);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Establecer límites
  const xMin = -100;
  const xMax = 100;
  const yMin = -50;
  const yMax = 50;

  const restrictedX = Math.min(Math.max(x, xMin), xMax);
  const restrictedY = Math.min(Math.max(y, yMin), yMax);

  const textX = useTransform(scrollYProgress, [0, 0.7], [-100, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.7], [-50, 0]);

  return (
    <motion.section id="about" className="hero h-screen">
      <div className="grid lg:grid-cols-2 px-[34px] place-items-center">
        <div>
          <motion.h2
            ref={targetRef}
            style={{ x: textX, y: textY }}
            className="font-bold"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quis
            hic placeat.
          </motion.h2>
          <p className="text-xl py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-xl py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <motion.div
          ref={beeRef}
          animate={{ x: restrictedX, y: restrictedY }}
          transition={{
            type: "spring",
            damping: 3,
            stiffness: 50,
            restDelta: 0.001,
          }}
        >
          <img src={BeeImg} className="max-w-lg xl:max-w-3xl hidden sm:block" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
