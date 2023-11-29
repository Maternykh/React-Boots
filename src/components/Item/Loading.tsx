import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { motion } from "framer-motion";
const Loading: React.FC = () => {
  return (
    <div className=" flex justify-center items-center h-full">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.25 }}
        className=" flex justify-center items-center w-min h-min"
      >
        <BiLoaderAlt className=" text-5xl flex justify-center items-center text-green-500" />
      </motion.div>
    </div>
  );
};

export default Loading;
