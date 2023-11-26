import React, { useState } from "react";
import SortType from "./SortType";
import Alphabhet from "./Alphabhet";
import CategoryAct from "./CategoryAct";
import Stock from "./Stock";
import CategoryItem from "./CategoryItem";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
const Sort: React.FC = () => {
  const [sortState, setSortState] = useState<boolean>(true);
  const [selectFilter, setSelectFilter] = useState<number>(0);

  return (
    <aside className="xl:w-1/4 mb-5">
      <div
        onClick={() => setSortState(!sortState)}
        className=" rounded-xl p-2 mb-3 bg-gray-800 flex justify-center items-center"
      >
        {sortState ? (
          <IoMdArrowDropup className=" text-xl text-white flex justify-center items-center" />
        ) : (
          <IoMdArrowDropdown className=" text-xl text-white flex justify-center items-center" />
        )}
      </div>
      {sortState && (
        <div className=" bg-gray-800 rounded-xl p-3  w-full">
          <div className=" text-gray-500">Sort By:</div>
          <div>
            <div
              onClick={() => setSelectFilter(0)}
              className=" items-center hover:cursor-pointer my-2 text-gray-500 p-2 flex justify-center bg-gray-700 rounded-xl"
            >
              <div className=" mr-2">Product Status</div>
              {selectFilter === 0 ? (
                <IoMdArrowDropup className=" text-xl text-gray-500 flex justify-center items-center" />
              ) : (
                <IoMdArrowDropdown className=" text-xl text-gray-500 flex justify-center items-center" />
              )}
            </div>
            {selectFilter === 0 && <CategoryAct />}
            <div
              onClick={() => setSelectFilter(1)}
              className=" hover:cursor-pointer my-2 text-gray-500 p-2 flex justify-center bg-gray-700 rounded-xl"
            >
              Product Type
            </div>
            {selectFilter === 1 && <SortType />}
            <div
              onClick={() => setSelectFilter(2)}
              className=" hover:cursor-pointer my-2 text-gray-500 p-2 flex justify-center bg-gray-700 rounded-xl"
            >
              Sort by
            </div>
            {selectFilter === 2 && <Alphabhet />}
            <div
              onClick={() => setSelectFilter(3)}
              className=" hover:cursor-pointer my-2 text-gray-500 p-2 flex justify-center bg-gray-700 rounded-xl"
            >
              Stock Alert
            </div>
            {selectFilter === 3 && <Stock />}
            <div
              onClick={() => setSelectFilter(4)}
              className=" hover:cursor-pointer my-2 text-gray-500 p-2 flex justify-center bg-gray-700 rounded-xl"
            >
              Category
            </div>
            {selectFilter === 4 && <CategoryItem />}
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sort;
