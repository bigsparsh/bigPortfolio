"use client";
import { motion } from "framer-motion";

const Draggable = ({ children }: { children: React.ReactNode | string }) => {
  return (
    <motion.div
      drag
      dragElastic={0.15}
      whileDrag={
        {
          // scale: 1.25,
        }
      }
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      className="cursor-pointer z-50 w-full h-full"
    >
      {children}
    </motion.div>
  );
};
export default Draggable;
