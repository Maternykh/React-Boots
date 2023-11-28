import React from "react";
import { useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import { setSelectFullphot } from "../../Redux/Slices/linkSlice";
const FullPhoto: React.FC = () => {
  const fullphot = useAppSelector(
    (state: RootState) => state.linsk.selectFullphot
  );
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(setSelectFullphot("nothing"))}
      className=" bg-opacity-50 bg-black items-center flex justify-center top-0 left-0 fixed w-screen h-screen"
    >
      <div className=" xl:w-1/2">
        <img className="xl:h-full w-full " src={fullphot} alt="" />
      </div>
    </div>
  );
};
export default FullPhoto;
