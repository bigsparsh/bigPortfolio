"use client";
import { motion } from "framer-motion";

const FadingElement = ({
  children,
  delay = 0,
  down = 100,
}: {
  children: React.ReactNode | string;
  delay?: number;
  down?: number;
}) => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0, y: down + "px" }}
      whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ delay }}
      style={{ willChange: "filter, opacity, y" }}
    >
      {children}
    </motion.div>
  );
};
export default FadingElement;
