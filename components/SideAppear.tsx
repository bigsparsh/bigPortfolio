"use client";
import { motion } from "framer-motion";

const SideAppear = ({
  children,
  appearFrom = "left",
  delay = 0,
}: {
  children: React.ReactNode;
  appearFrom?: "left" | "right";
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{
        x: appearFrom === "left" ? "-200%" : "200%",
        opacity: 0,
        filter: "blur(50px)",
      }}
      animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
      style={{ willChange: "transform" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};
export default SideAppear;
