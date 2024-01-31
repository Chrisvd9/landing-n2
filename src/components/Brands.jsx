import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useVelocity } from "framer-motion";

const Brands = () => {
  const baseX = useMotionValue(0);
  const scrollY = useMotionValue(0);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  const directionFactor = useRef(1);

  useEffect(() => {
    const simulateScroll = () => {
      scrollY.set(window.scrollY);
      requestAnimationFrame(simulateScroll);
    };

    simulateScroll();

    const animate = () => {
      let moveBy = directionFactor.current * -10 * (1 / 60);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);

      if (baseX.get() < -100) {
        // Reiniciar posición cuando se haya movido fuera del área visible
        baseX.set(100);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Limpieza cuando el componente se desmonta
      window.removeEventListener("scroll", simulateScroll);
    };
  }, [baseX, scrollY, velocityFactor]);

  return (
    <div className="flex p-[34px] items-center justify-between bg-black h-[100px] ">
      <motion.p className="text-white xl:text-5xl" style={{ x }}>
        BRANDS
      </motion.p>
      <motion.p className="text-white xl:text-5xl" style={{ x }}>
        BRANDS
      </motion.p>
      <motion.p className="text-white xl:text-5xl" style={{ x }}>
        BRANDS
      </motion.p>
      <motion.p className="text-white xl:text-5xl" style={{ x }}>
        BRANDS
      </motion.p>
    </div>
  );
};

export default Brands;
