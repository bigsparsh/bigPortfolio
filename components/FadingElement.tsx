"use client";
import { motion } from "framer-motion";

const FadingElement = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode | string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0, y: "100px" }}
      whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ delay }}
      style={{ willChange: "filter, opacity, y" }}
    >
      {children}
    </motion.div>
  );
};
export default FadingElement;
