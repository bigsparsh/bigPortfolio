"use client";
import { motion } from "framer-motion";

const Sliding = ({
  children,
  color = "bg-primary-200",
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
        className={"absolute w-full h-full rounded-xl " + color}
        initial={{ width: "100%" }}
        whileInView={{ width: 0 }}
        transition={{ delay }}
      />
      {children}
    </div>
  );
};
export default Sliding;
