"use client";
import { motion } from "framer-motion";
const Loading = ({ end }: { end: string }) => {
  return (
    <div className="bg-[#561600] w-full h-5 rounded-full">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: end }}
        transition={{ ease: "easeInOut" }}
        className="bg-[#C23706] h-full rounded-full"
      />
    </div>
  );
};
export default Loading;
