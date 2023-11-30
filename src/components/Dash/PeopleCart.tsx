import React, { useState } from "react";
import { peopleMap } from "../../Type";
import { IoMdArrowDown } from "react-icons/io";
import { IoMdArrowUp } from "react-icons/io";
const PeopleCart: React.FC<peopleMap> = ({
  desc,
  image,
  name,
  email,
  date,
  type,
  status,
}) => {
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);
  return (
    <div className="  p-5 bg-gray-950 rounded-xl mb-5 mr-2 w-96">
      <div className=" flex items-center mb-3">
        <div className=" w-20 mr-3">
          <img src={image} alt="" className=" w-full rounded-full" />
        </div>
        <div>
          <div>{name}</div>
          <div className=" text-gray-500">{email}</div>
        </div>
      </div>
      <div className=" flex justify-between text-gray-500 mb-3">
        <div>Adminated date:</div>
        <div className=" text-gray-700">{date}</div>
      </div>
      <div className=" flex justify-between text-gray-500 mb-3">
        <div>Type:</div>
        <div>{type}</div>
      </div>
      <div className=" flex justify-between text-gray-500 mb-5">
        <div>Status</div>
        <div
          className={` ${
            status === "Active" ? " bg-green-300 " : " bg-red-400 "
          } text-black  px-2 py-1 rounded-xl`}
        >
          {status}
        </div>
      </div>
      <div className=" flex justify-center items-center mb-2">
        <div
          onClick={() => setIsOpenDesc(!isOpenDesc)}
          className=" hover:cursor-pointer  flex justify-center items-center bg-blue-500 text-white p-2 rounded-full"
        >
          {!isOpenDesc && (
            <IoMdArrowDown className=" flex justify-center items-center" />
          )}
          {isOpenDesc && (
            <IoMdArrowUp className=" flex justify-center items-center" />
          )}
        </div>
      </div>
      {isOpenDesc && <div>{desc}</div>}
    </div>
  );
};

export default PeopleCart;
