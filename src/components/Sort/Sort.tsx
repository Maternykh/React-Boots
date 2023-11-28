import React, { useState } from "react";
import SortType from "./SortType";
import Alphabhet from "./Alphabhet";
import CategoryAct from "./CategoryAct";
import Stock from "./Stock";
import CategoryItem from "./CategoryItem";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Pagination from "./Pagination";
import { motion } from "framer-motion";
const Sort: React.FC = () => {
  const [sortState, setSortState] = useState<boolean>(true);
  const [selectFilter, setSelectFilter] = useState<number>(0);
  const filters = [
    "Product Status",
    "Product Type",
    "Sort by",
    "Stock Alert",
    "Category",
  ];
  return (
    <aside className="xl:w-1/4 mb-5">
      <div
        onClick={() => setSortState(!sortState)}
        className=" hover:cursor-pointer rounded-xl p-2 mb-2 bg-gray-800 flex justify-center items-center"
      >
        {sortState ? (
          <IoMdArrowDropup className=" text-xl text-white flex justify-center items-center" />
        ) : (
          <IoMdArrowDropdown className=" text-xl text-white flex justify-center items-center" />
        )}
      </div>
      {sortState && (
        <motion.div
          className=" bg-gray-800 rounded-xl p-3  w-full"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className=" text-gray-500">Sort By:</div>
          <div>
            <div className=" flex flex-wrap mb-2">
              {filters.map((filt, index) => (
                <div
                  key={index}
                  onClick={() => setSelectFilter(index)}
                  className={` ${
                    selectFilter === index ? " text-white" : "text-gray-500"
                  } items-center hover:cursor-pointer m-1  p-2 flex justify-center bg-gray-700 rounded-xl`}
                >
                  <div className=" mr-1">{filt}</div>
                  {selectFilter === index ? (
                    <IoMdArrowDropup className=" text-xl  flex justify-center items-center" />
                  ) : (
                    <IoMdArrowDropdown className=" text-xl  flex justify-center items-center" />
                  )}
                </div>
              ))}
            </div>
            {selectFilter === 0 && <CategoryAct />}
            {selectFilter === 1 && <SortType />}
            {selectFilter === 2 && <Alphabhet />}
            {selectFilter === 3 && <Stock />}
            {selectFilter === 4 && <CategoryItem />}
          </div>
        </motion.div>
      )}
      <Pagination />
    </aside>
  );
};

export default Sort;
