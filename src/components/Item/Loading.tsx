import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { motion } from "framer-motion";
const Loading: React.FC = () => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 1080 }}
      transition={{ duration: 0.25 }}
      className=" mt-28 flex justify-center items-center"
    >
      <BiLoaderAlt className=" text-5xl flex justify-center items-center text-green-500" />
    </motion.div>
  );
};

export default Loading;
