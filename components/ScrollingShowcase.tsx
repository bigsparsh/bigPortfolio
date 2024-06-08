"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Sliding from "./Sliding";
const ScrollingShowcase = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-200%", "10%"]);
  return (
    <div className="h-[900vh] w-full bg-primary-400/20">
      <div
        className="h-[100vh] w-full  sticky top-0 flex justify-start items-center backdrop-opacity-40"
        style={{
          background: `linear-gradient( 45deg, #2e0800 0% 35%, transparent 35% 65%, #2e0800 65% 100%) center / 50px 50px, linear-gradient( -45deg, transparent 0% 47.5%, #2e0800 47.5% 52.5%, transparent 52.5% 100%) center / 100px 100px`,
        }}
      >
        <h1 className="judson text-7xl p-10 self-start font-semibold text-primary-100 tracking-tight">
          <Sliding>Projects</Sliding>
        </h1>
        <motion.div
          className="flex gap-5 absolute"
          style={{ x, willChange: "transform" }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
export default ScrollingShowcase;
