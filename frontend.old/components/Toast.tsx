"use client";
import { motion } from "framer-motion";

const Toast = ({ children }: { children: string }) => {
  return (
    <div className="user-events-none h-screen w-screen fixed">
      <motion.div
        initial={{
          y: "100px",
        }}
        animate={{
          y: 0,
        }}
        exit={{
          y: "100px",
        }}
        className="px-10 m-5 rounded-full py-5 bottom-0 absolute right-0 bg-primary-400 text-white"
      >
        {children}
      </motion.div>
    </div>
  );
};
export default Toast;
