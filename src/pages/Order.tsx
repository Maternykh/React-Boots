import React from "react";
import { useAppSelector } from "../Type";
import { RootState } from "../Redux/store";
import CartItem from "../components/Item/CartItem";
import AddProduct from "../components/UnderHead/AddProduct";
import FullPhoto from "../components/Item/FullPhoto";

const Order: React.FC = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.cartItems);
  const { enterPrice, isOpenFhoto } = useAppSelector(
    (state: RootState) => state.linsk
  );
  return (
    <>
      <AddProduct />
      <div className={` ${enterPrice === 1 ? "" : " flex flex-wrap"} mt-5`}>
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
