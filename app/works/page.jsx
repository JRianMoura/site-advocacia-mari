"use client";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      página de trabalhos
    </motion.section>
  );
};

export default page;
