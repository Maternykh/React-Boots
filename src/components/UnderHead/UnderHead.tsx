import React from "react";
import Search from "./Search";
import AddProduct from "./AddProduct";

const UnderHead: React.FC = () => {
  return (
    <div className=" xl:flex block flex-nowrap items-center justify-between mb-5">
      <div className=" hidden xl:block text-white text-2xl">Product</div>
      <Search />
      <AddProduct />
    </div>
  );
};

export default UnderHead;
