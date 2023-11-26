import React from "react";
import { useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import { setSelectTrading } from "../../Redux/Slices/filterSlice";

const SortType: React.FC = () => {
  const prices = ["All trade", "Retail", "Wholesale"];
  const selectTrading = useAppSelector(
    (state: RootState) => state.filter.selectTrading
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className=" flex">
        {prices.map((typeprice, index: number) => (
          <div
            onClick={() => dispatch(setSelectTrading(typeprice))}
            key={index}
            className={`${
              selectTrading === typeprice
                ? " border-green-600"
                : "border-gray-600 hover:cursor-pointer"
            } mr-2 mb-2 w-40 border-2  text-white rounded-xl p-2`}
          >
            {typeprice}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortType;
