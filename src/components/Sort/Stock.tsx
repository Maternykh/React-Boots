import React, { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowUpSFill } from "react-icons/ri";
import { CgShutterstock } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import { setSelectVariants } from "../../Redux/Slices/filterSlice";

const Stock: React.FC = () => {
  const stockArr = ["All stock", "Partial stock", "No stock"];
  const selectVariants = useAppSelector(
    (state: RootState) => state.filter.selectVariants
  );
  const dispatch = useAppDispatch();
  const [popUp, setPoPup] = useState<boolean>(false);
  const OnClickStock = (stock: string) => {
    dispatch(setSelectVariants(stock));
    setPoPup(false);
  };
  return (
    <div>
      <div
        onClick={() => setPoPup(!popUp)}
        className="  border-gray-700 border-2 flex justify-between p-2 rounded-xl w-11/12 mb-2"
      >
        <div className=" flex">
          <div className=" flex justify-center items-center mr-2">
            <CgShutterstock className=" text-gray-400 flex justify-center items-center mr-2" />
          </div>
          <div>
            {stockArr.map((stock, index) => {
              if (stock === selectVariants) {
                return (
                  <div className="text-white" key={index}>
                    {stock}
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className=" flex justify-center items-center">
          {!popUp ? (
            <RiArrowDownSFill className=" text-xl flex justify-center items-center text-gray-400" />
          ) : (
            <RiArrowUpSFill className=" text-xl flex justify-center items-center text-gray-400" />
          )}
        </div>
      </div>
      {popUp && (
        <div className=" border-gray-700 border-2 flex justify-between rounded-xl w-11/12">
          {stockArr.map((stock, index) => (
            <div
              onClick={() => OnClickStock(stock)}
              className={` ${
                selectVariants === stock
                  ? "  border-green-600"
                  : "  border-transparent hover:cursor-pointer"
              } text-white border-2 w-1/2 flex justify-center rounded-xl p-1`}
              key={index}
            >
              {stock}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Stock;
