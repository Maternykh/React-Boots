import React from "react";
import { useAppDispatch, useAppSelector } from "../Type";
import { RootState } from "../Redux/store";
import CartItem from "../components/Item/CartItem";
import AddProduct from "../components/UnderHead/AddProduct";
import FullPhoto from "../components/Item/FullPhoto";
import { clearCartItems } from "../Redux/Slices/cartSlice";

const Order: React.FC = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.cartItems);
  const { enterPrice, isOpenFhoto } = useAppSelector(
    (state: RootState) => state.linsk
  );
  const dispatch = useAppDispatch();
  return (
    <>
      <div className=" flex justify-between items-center">
        <AddProduct />
        <div
          onClick={() => dispatch(clearCartItems())}
          className=" hover:bg-green-500 hover:text-black text-white border-2 hover:cursor-pointer p-2 border-green-500 rounded-xl mt-2 w-40 flex justify-center"
        >
          Clear the trash
        </div>
      </div>
      {/* {cartItems.length !== 0 && (
        <div className="  flex justify-center mt-2 p-2 w-52 rounded-xl bg-gray-800">
          <div className=" text-white flex">
            Product in trash:
            <div className=" ml-2 text-green-500">{cartItems.length}</div>
          </div>
        </div>
      )} */}
      {cartItems.length === 0 && (
        <div className=" flex justify-center items-center h-96">
          <div className=" text-white text-3xl">
            There is nothing in the trash
          </div>
        </div>
      )}
      <div className={` ${enterPrice === 1 ? "" : " flex flex-wrap"} mt-2`}>
        {cartItems.map((cart, index) => (
          <div className={` ${enterPrice === 1 ? "" : " w-1/2"}`} key={index}>
            <CartItem {...cart} />
          </div>
        ))}
      </div>
      {isOpenFhoto && <FullPhoto />}
    </>
  );
};

export default Order;
