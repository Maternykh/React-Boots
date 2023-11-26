import React from "react";
import { FaList } from "react-icons/fa6";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Type";
import { setEnterPrice } from "../../Redux/Slices/linkSlice";
const AddProduct: React.FC = () => {
  const enterPrice = useAppSelector((state) => state.linsk.enterPrice);
  const dispatch = useAppDispatch();
  return (
    <div className=" flex flex-nowrap xl:justify-normal justify-between">
      <div className=" bg-gray-700 rounded-xl flex mr-3">
        <div
          onClick={() => dispatch(setEnterPrice(1))}
          className={` ${
            enterPrice === 1
              ? "border-green-500"
              : "border-transparent hover:cursor-pointer"
          }  p-2 border-2  rounded-xl`}
        >
          <FaList
            className={` ${
              enterPrice === 1 ? "text-green-500" : "text-gray-400 "
            }   bg-gray-700 text-2xl`}
          />
        </div>
        <div
          onClick={() => dispatch(setEnterPrice(2))}
          className={` ${
            enterPrice === 2
              ? "border-green-500"
              : "border-transparent hover:cursor-pointer"
          }  p-2 border-2  rounded-xl`}
        >
          <HiMiniSquares2X2
            className={` ${
              enterPrice === 2 ? "text-green-500" : "text-gray-400 "
            }   bg-gray-700 text-2xl`}
          />
        </div>
      </div>
      <Link to={`/addproduct`}>
        <div className=" px-5 py-2 bg-green-500 rounded-xl flex items-center">
          Add Product
        </div>
      </Link>
    </div>
  );
};

export default AddProduct;
