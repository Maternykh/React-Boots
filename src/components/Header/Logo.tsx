import React from "react";
import { TiWaves } from "react-icons/ti";
import Settings from "./Settings";
const Logo: React.FC = () => {
  return (
    <div className="mb-5 xl:mb-0 flex justify-between">
      <div className=" flex text-white items-center ">
        <div className=" flex items-center justify-center">
          <TiWaves className=" flex items-center justify-center text-4xl  text-green-500" />
        </div>
        <div className=" text-xl">inventar</div>
      </div>
      <div className=" xl:hidden block ">
        <Settings />
      </div>
    </div>
  );
};

export default Logo;
