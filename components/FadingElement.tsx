"use client";
import { motion } from "framer-motion";

const FadingElement = ({
  children,
}: {
  children: React.ReactNode | string;
}) => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0, y: "50px" }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
};
export default FadingElement;
