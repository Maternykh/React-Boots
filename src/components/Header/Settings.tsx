import React from "react";
import { IoMdSettings } from "react-icons/io";
const Settings: React.FC = () => {
  return (
    <div className=" w-min p-2 rounded-xl bg-gray-700  flex items-center justify-center">
      <IoMdSettings className=" flex items-center justify-center text-gray-300 text-2xl" />
    </div>
  );
};

export default Settings;
