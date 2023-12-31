import React, { useState } from "react";
import { productMap, useAppDispatch, useAppSelector } from "../../Type";
import { FaBoxArchive } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { RootState } from "../../Redux/store";
import { setSelectFullphot } from "../../Redux/Slices/linkSlice";
import {
  minusItem,
  plusItem,
  removeCartItems,
} from "../../Redux/Slices/cartSlice";
const CartItem: React.FC<productMap> = ({
  id,
  title,
  imageUrl,
  price,
  categstate,
  variants,
  gender,
  trading,
  desc,
  count,
}) => {
  const enterPrice = useAppSelector(
    (state: RootState) => state.linsk.enterPrice
  );
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        className={`${
          enterPrice === 1 ? "xl:flex w-full" : ""
        } border-transparent border-2 items-center xl:ml-2  p-2 bg-slate-800 rounded-xl mb-2 justify-between `}
      >
        <div
          className={`${
            enterPrice === 1 ? "flex" : " block"
          }  flex-wrap xl:flex-nowrap`}
        >
          <div
            className={`${
              enterPrice === 1 ? "w-full xl:w-20" : "w-full"
            }  xl:mr-2`}
          >
            <img
              src={imageUrl}
              onClick={() => dispatch(setSelectFullphot(imageUrl))}
              className=" w-full rounded-xl"
            />
          </div>
          <div className=" p-2 mr-5 ">
            <div className=" text-white text-xl mb-2">{title}</div>
            <div className=" flex flex-wrap xl:flex-nowrap items-center">
              <div className=" mr-2">
                <div className=" bg-blue-500 w-min inline rounded-lg p-1">
                  {categstate}
                </div>
              </div>
              <div className=" text-gray-500 mr-2 ">{gender}</div>
              <div className=" mr-2 xl:mt-0 mt-2 flex text-gray-500">
                <div className=" flex justify-center items-center mr-1">
                  <FaBoxArchive className=" flex justify-center items-center" />
                </div>
                <div className=" flex">
                  <div className=" mr-2">Stocked Product: </div>
                  <div className=" text-white">{variants}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${
            enterPrice === 1
              ? "xl:justify-normal justify-between"
              : " xl:justify-between"
          } flex items-center `}
        >
          <div className=" flex items-end  mr-2 ">
            <div
              onClick={() => dispatch(removeCartItems(id))}
              className=" hover:bg-green-500 hover:text-black text-white border-2  justify-center flex hover:cursor-pointer border-green-500  w-32 h-min rounded-lg p-1"
            >
              Remove to Cart
            </div>
          </div>
          <div className="flex items-end  mx-2 text-white">
            <div className=" h-min flex  border-2 border-green-500  py-1 rounded-xl">
              <div
                onClick={() => dispatch(plusItem(id))}
                className=" hover:cursor-pointer px-3 border-r-2 border-green-500"
              >
                +
              </div>
              <div className=" mx-3">{count}</div>
              <div
                onClick={() => dispatch(minusItem(id))}
                className=" hover:cursor-pointer px-3 border-l-2 border-green-500"
              >
                -
              </div>
            </div>
          </div>
          <div className=" xl:border-l-2 border-gray-500 px-2 xl:px-10 text-gray-500 w-80">
            <div className=" xl:mb-2">{trading} price</div>
            <div className=" text-white">${price}</div>
          </div>
          <div
            onClick={() => setIsOpenDesc(!isOpenDesc)}
            className={`${
              isOpenDesc ? " border-green-600 " : "border-gray-500 "
            } text-gray-500 hover:cursor-pointer h-min flex justify-center items-center p-2 rounded-xl border-2 `}
          >
            <IoIosMore className=" flex justify-center items-center text-2xl" />
          </div>
        </div>
      </div>
      {isOpenDesc && (
        <div className=" px-2 w-full mb-5">
          <div className="  rounded-xl p-2 bg-gray-800  text-gray-500">
            {desc}
          </div>
        </div>
      )}
    </>
  );
};
export default CartItem;
