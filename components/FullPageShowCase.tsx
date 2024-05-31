"use client";

import {
  useScroll,
  useSpring,
  useTransform,
  motion,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

const FullPageShowCase = ({
  children,
  icon,
}: {
  children: string;
  icon: React.ReactNode;
}) => {
  const windowRef = useRef(null);
  const string = `${children.toUpperCase()} . ${children.toUpperCase()} . ${children.toUpperCase()} . ${children.toUpperCase()}`;
  const textRefArray = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const textStyleArray: { x: MotionValue<string> }[] = [];
  const { scrollYProgress } = useScroll({ target: windowRef });
  const scrollY = useSpring(scrollYProgress);
  const y = useTransform(scrollY, [0, 1], ["70vh", "0vh"]);
  const scale = useTransform(scrollY, [0, 0.5, 1], [1, 2, 1]);

  textStyleArray.push({ x: useTransform(scrollY, [0, 1], ["0%", "30%"]) });
  textStyleArray.push({ x: useTransform(scrollY, [0, 1], ["30%", "0%"]) });
  textStyleArray.push({ x: useTransform(scrollY, [0, 1], ["0%", "30%"]) });
  textStyleArray.push({ x: useTransform(scrollY, [0, 1], ["30%", "0%"]) });
  textStyleArray.push({ x: useTransform(scrollY, [0, 1], ["0%", "30%"]) });

  return (
    <div className="h-[250vh] ">
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
              style={textStyleArray[index]}
              className="text-nowrap even:self-end"
            >
              {string}
            </motion.h1>
          );
        })}
        <motion.div
          style={{ top: y, scale }}
          className="judson w-fit absolute z-10 top-0 text-7xl text-primary-100 bg-primary-500/50 backdrop-blur p-10 rounded-full border border-primary-100 shadow-black shadow-2xl flex gap-5"
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
