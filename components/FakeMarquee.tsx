"use client";
import { motion } from "framer-motion";

const FakeMarquee = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{ repeat: Infinity, duration: 2, repeatType: "mirror" }}
      className="text-primary-100 text-[3vw] font-black  py-2 border-y-2 border-primary-100"
    >
      ENQUIRY FORM
    </motion.div>
  );
};
export default FakeMarquee;
