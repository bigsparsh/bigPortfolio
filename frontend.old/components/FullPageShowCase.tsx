"use client";

import {
  // useScroll,
  // useTransform,
  motion,
  // MotionValue,
  // useSpring,
} from "framer-motion";
import { useRef } from "react";

const FullPageShowCase = ({
  children,
  icon,
}: {
  children: string;
  icon: React.ReactNode;
}) => {
  // const windowRef = useRef(null);
  const string = `${children.toUpperCase()} . ${children.toUpperCase()} . ${children.toUpperCase()} . ${children.toUpperCase()}`;
  const textRefArray = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  // const textStyleArray: { x: MotionValue<string> }[] = [];
  const textStyleArray: any[] = [];
  // const { scrollYProgress } = useScroll({ target: windowRef });
  // const scrollY = scrollYProgress;
  // const scrollY = useSpring(scrollYProgress);
  // const scale = useTransform(scrollY, [0, 1], [1, 2]);
  // const opacity = useTransform(scrollY, [0, 1], [0.95, 1]);

  // textStyleArray.push({ x: useTransform(scrollY, [0, 1], ["0%", "30%"]) });
  // textStyleArray.push({ x: useTransform(scrollY, [0, 1], ["30%", "0%"]) });
  // textStyleArray.push({ x: useTransform(scrollY, [0, 1], ["0%", "30%"]) });
  // textStyleArray.push({ x: useTransform(scrollY, [0, 1], ["30%", "0%"]) });
  // textStyleArray.push({ x: useTransform(scrollY, [0, 1], ["0%", "30%"]) });

  textStyleArray.push({ animate: { x: "30%" }, initial: { x: "0%" } });
  textStyleArray.push({ animate: { x: "0%" }, initial: { x: "30%" } });
  textStyleArray.push({ animate: { x: "30%" }, initial: { x: "0%" } });
  textStyleArray.push({ animate: { x: "0%" }, initial: { x: "30%" } });
  textStyleArray.push({ animate: { x: "30%" }, initial: { x: "0%" } });

  return (
    <div className="h-[100vh] lg:h-[300dvh] ">
      <div className="h-[100vh] sticky text-primary-100/50 text-[25vh] leading-[19.5vh] font-black top-0 flex flex-col justify-evenly items-center  overflow-hidden my-10">
        <div
          className="absolute w-full h-full inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #2E0800 , transparent 20% 80%, #2E0800 )",
          }}
        ></div>
        {textRefArray.map((textRef, index) => {
          return (
            <motion.h1
              key={index}
              ref={textRef}
              animate={textStyleArray[index].animate}
              initial={textStyleArray[index].initial}
              style={{ willChange: "transform" }}
              transition={{
                duration: 45,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-nowrap even:self-end opacity-35"
            >
              {string}
            </motion.h1>
          );
        })}
        <motion.div
          className="judson w-fit absolute z-10 text-5xl lg:text-6xl xl:text-7xl text-primary-100 bg-primary-500/50 backdrop-blur p-5 lg:p-7 xl:p-10 rounded-full border border-primary-100 shadow-black shadow-2xl flex gap-3 lg:gap-5"
          drag
          dragDirectionLock={false}
          dragElastic={0.5}
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          {icon}
        </motion.div>
      </div>
    </div>
  );
};
export default FullPageShowCase;
