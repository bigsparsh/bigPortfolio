"use client";
import { motion, useScroll, useTransform } from "framer-motion";
const ScrollingShowcase = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-200%", "10%"]);
  return (
    <div className="h-[900vh] w-full ">
      <div className="h-[100vh] w-full bg-red-500 sticky top-0 flex justify-start items-center">
        <h1 className="text-white judson text-5xl p-10 self-start">
          My Projects
        </h1>
        <motion.div className="flex gap-5" style={{ x }}>
          {children}
        </motion.div>
      </div>
    </div>
  );
};
export default ScrollingShowcase;
