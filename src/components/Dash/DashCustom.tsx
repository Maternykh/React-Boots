import React from "react";
import { appersType } from "../../Type";

const DashCustom: React.FC<appersType> = ({ quantity, percent, name }) => {
  return (
    <div className="mr-2 bg-gray-950 p-5 rounded-xl w-full xl:w-80 mb-2">
      <div className=" flex items-center justify-between mb-10">
        <div className=" text-2xl ">{quantity}</div>
        <div
          className={` ${
            percent >= 10 ? " bg-green-300 " : " bg-red-400 "
          } px-2 py-1 rounded-full  text-black`}
        >
          +{percent}%
        </div>
      </div>
      <div>{name}</div>
    </div>
  );
};

export default DashCustom;
