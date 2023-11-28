import React, { useEffect, useState } from "react";
import UnderHead from "../components/UnderHead/UnderHead";
import Sort from "../components/Sort/Sort";
import axios from "axios";
import { productMap, useAppDispatch, useAppSelector } from "../Type";
import Item from "../components/Item/Item";
import { setSelectItem } from "../Redux/Slices/linkSlice";
import { RootState } from "../Redux/store";
import FullPhoto from "../components/Item/FullPhoto";
import Loading from "../components/Item/Loading";
import { motion } from "framer-motion";
const Home: React.FC = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const [items, setItems] = useState<productMap[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    selectCategory,
    selectCategstate,
    selectTrading,
    selectVariants,
    selectAlphavite,
    searchValue,
    currentPage,
  } = useAppSelector((state: RootState) => state.filter);
  const isOpenFhoto = useAppSelector(
    (state: RootState) => state.linsk.isOpenFhoto
  );
  const dispatch = useAppDispatch();
  const Alphabet =
    selectAlphavite === "A-Z"
      ? `sortBy=title&order=asc`
      : `sortBy=title&order=desc`;
  const variantParam =
    selectVariants !== "All" ? `variants=${selectVariants}` : "";
  const tradeParam =
    selectTrading !== "All trade" ? `trading=${selectTrading}` : "";
  const categoryParam =
    selectCategory !== "All product" ? `category=${selectCategory}` : "";
  const categorystateParam =
    selectCategstate !== "All" ? `categstate=${selectCategstate}` : "";
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://6561f2d6dcd355c083245fbd.mockapi.io/product?page=${currentPage}&limit=5&${categorystateParam}&${tradeParam}&${categoryParam}&${variantParam}&${Alphabet}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [
    selectCategory,
    selectCategstate,
    selectTrading,
    selectVariants,
    selectAlphavite,
    currentPage,
  ]);
  const itemsArr = items
    .filter((item) => {
      if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((item) => (
      <div key={item.id} onClick={() => dispatch(setSelectItem(item.id))}>
        <Item {...item} />
      </div>
    ));
  return (
    <main>
      <UnderHead />
      <div className=" xl:flex">
        <Sort />
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className=" w-full xl:w-3/4"
        >
          {isLoading ? <Loading /> : itemsArr}
        </motion.div>
      </div>
      {isOpenFhoto && <FullPhoto />}
    </main>
  );
};
export default Home;
