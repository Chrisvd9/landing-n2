import { useRef } from "react";
import ApicultoresImg from "../assets/img/apicultor-blw.png";
import { useScroll, useTransform, motion } from "framer-motion";

const HoWeWorkSection = () => {
  const isMobile = window.innerWidth <= 768;
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.4], [1, 1.6]);
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 1],
    ["0%", "-25%", "50%", "-80%"]
  );

  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <section id="howwework">
      <div className="divider divider-neutral p-[34px]"></div>

      {isMobile ? (
        <div className="flex justify-center">
          <img
            src={ApicultoresImg}
            alt="Apicultores"
            className="h-[75vh] max-h-[45vw] w-auto"
          />
        </div>
      ) : (
        <div className="mb-[80vh]">
          <div ref={targetRef} className="h-[300vh] w-full">
            <div className="sticky top-[10vh]">
              <div className="flex justify-center">
                <motion.div
                  style={{ x, scale, opacity }}
                  className="origin-top"
                >
                  <img
                    src={ApicultoresImg}
                    alt="Apicultores"
                    className="h-[75vh] max-h-[45vw] w-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="lg:flex gap-8 justify-between px-[34px] items-center mb-20">
        <h2 className="w-full bg-gradient-to-r from-[#A0A0A0] to-[#000000] inline-block text-transparent bg-clip-text">
          Lorem ipsum dolor sit amet consectetur?
        </h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum
          voluptatibus eum sequi explicabo ullam, quisquam amet tempora quo
          voluptate inventore tempore fugit, minus neque, illum consectetur
          molestias veniam nulla.
        </p>
      </div>
      <div className="flex flex-col gap-8 px-[34px]">
        <h2 className="w-full bg-gradient-to-r from-[#A0A0A0] to-[#000000] inline-block text-transparent bg-clip-text">
          Lorem ipsum, dolor sit amet adipisicing.
        </h2>
        <p className="text-xl lg:w-[685px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum
          voluptatibus eum sequi explicabo ullam, quisquam amet tempora quo
        </p>
      </div>

      <div className="divider divider-neutral p-[34px] mt-16"></div>
    </section>
  );
};

export default HoWeWorkSection;
