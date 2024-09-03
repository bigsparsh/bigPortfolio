"use client";
import { motion } from "framer-motion";
const Loading = ({ end }: { end: string }) => {
  return (
    <div className="bg-primary-400 w-full h-3 lg:h-4 xl:h-5 rounded-full">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: end }}
        transition={{ duration: 1.5, ease: "anticipate" }}
        className="bg-primary-200 h-full rounded-full"
      />
    </div>
  );
};
export default Loading;
