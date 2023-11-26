import React, { useEffect, useState } from "react";
import UnderHead from "../components/UnderHead/UnderHead";
import Sort from "../components/Sort/Sort";
import axios from "axios";
import { productMap, useAppDispatch, useAppSelector } from "../Type";
import Item from "../components/Item/Item";
import { setSelectItem } from "../Redux/Slices/linkSlice";
import { RootState } from "../Redux/store";

const Home: React.FC = () => {
  const [items, setItems] = useState<productMap[]>([]);
  const selectCategory = useAppSelector(
    (state: RootState) => state.filter.selectCategory
  );
  const selectCategstate = useAppSelector(
    (state: RootState) => state.filter.selectCategstate
  );
  const selectTrading = useAppSelector(
    (state: RootState) => state.filter.selectTrading
  );
  const dispatch = useAppDispatch();
  const tradeParam =
    selectTrading !== "All trade" ? `trading=${selectTrading}` : "";
  const categoryParam =
    selectCategory !== "All product" ? `category=${selectCategory}` : "";
  const categorystateParam =
    selectCategstate !== "All" ? `categstate=${selectCategstate}` : "";
  useEffect(() => {
    axios
      .get(
        `https://6561f2d6dcd355c083245fbd.mockapi.io/product?${categorystateParam}&${tradeParam}&${categoryParam}`
      )
      .then((res) => {
        setItems(res.data);
      });
  }, [selectCategory, selectCategstate, selectTrading]);
  const itemsArr = items.map((item) => (
    <div key={item.id} onClick={() => dispatch(setSelectItem(item.id))}>
      <Item {...item} />
    </div>
  ));
  return (
    <main>
      <UnderHead />
      <div className=" xl:flex">
        <Sort />
        <div className=" w-full xl:w-3/4">{itemsArr}</div>
      </div>
    </main>
  );
};
export default Home;
