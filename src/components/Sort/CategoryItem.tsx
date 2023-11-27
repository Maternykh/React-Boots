import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowUpSFill } from "react-icons/ri";
import { MdAllInbox } from "react-icons/md";
import { setSelectCategory } from "../../Redux/Slices/filterSlice";

const CategoryItem: React.FC = () => {
  const selectCategory = useAppSelector(
    (state: RootState) => state.filter.selectCategory
  );
  const dispatch = useAppDispatch();
  const [popUp, setPoPup] = useState<boolean>(false);
  const categoryItem = ["All product", "Boots", "Jacket", "Hoodie", "Shorts"];
  const OnClickCategItem = (categ: string) => {
    dispatch(setSelectCategory(categ));
    setPoPup(false);
  };
  return (
    <div>
      <div
        onClick={() => setPoPup(!popUp)}
        className=" border-gray-700 border-2 flex justify-between p-2 rounded-xl w-11/12 mb-2"
      >
        <div className=" flex">
          <div className=" flex justify-center items-center mr-2">
            <MdAllInbox className=" text-xl flex justify-center items-center text-gray-400" />
          </div>
        </div>
        <div className=" flex">
          <div className=" mr-2">
            {categoryItem.map((categ, index) => {
              if (categ === selectCategory) {
                return (
                  <div className="text-white" key={index}>
                    {categ}
                  </div>
                );
              }
            })}
          </div>
          <div className=" flex justify-center items-center">
            {!popUp ? (
              <RiArrowDownSFill className=" text-xl flex justify-center items-center text-gray-400" />
            ) : (
              <RiArrowUpSFill className=" text-xl flex justify-center items-center text-gray-400" />
            )}
          </div>
        </div>
      </div>
      {popUp && (
        <div className="border-gray-700 border-2 justify-between rounded-xl w-1/2">
          {categoryItem.map((categ, index) => (
            <div
              className={` ${
                selectCategory === categ
                  ? "  border-green-600"
                  : "  border-transparent cursor-pointer"
              } text-white border-2 flex justify-center rounded-xl p-1`}
              key={index}
              onClick={() => OnClickCategItem(categ)}
            >
              {categ}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
