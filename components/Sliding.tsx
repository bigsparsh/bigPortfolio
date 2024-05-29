"use client";
import { motion } from "framer-motion";

const Sliding = ({
  children,
  color = "#C23706",
  delay = 0,
  className,
}: {
  children: React.ReactNode | string;
  color?: string;
  delay?: number;
  className?: string;
}) => {
  return (
    <div className={"relative w-fit h-fit " + className}>
      <motion.div
        style={{ backgroundColor: color }}
        className="absolute w-full h-full rounded-xl"
        initial={{ width: "100%" }}
        animate={{ width: 0 }}
        transition={{ delay }}
      />
      {children}
    </div>
  );
};
export default Sliding;
