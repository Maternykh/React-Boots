import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Redux/store";
export interface LinkType {
  nameLink: string;
  pathLink: string;
}
export interface Linsk {
  links: number;
  enterPrice: number;
  selectItem: number;
}
export interface filterType {
  selectCategstate: string;
  selectAlphavite: string;
  selectTrading: string;
  selectVariants: string;
  selectCategory: string;
}
export interface productMap {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  categstate: string;
  trading: string;
  variants: string;
  category: string;
  desc: string;
  gender: string;
}
export interface itemsproductMap {
  items: productMap[];
}
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
