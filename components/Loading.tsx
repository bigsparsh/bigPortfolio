"use client";
import { motion } from "framer-motion";
const Loading = ({ end }: { end: string }) => {
  return (
    <div className="bg-primary-400 w-full h-5 rounded-full">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: end }}
        transition={{ ease: "easeInOut" }}
        className="bg-primary-200 h-full rounded-full"
      />
    </div>
  );
};
export default Loading;
