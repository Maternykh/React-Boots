import React, { useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";
import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowUpSFill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import { setSelectAlphavite } from "../../Redux/Slices/filterSlice";
const Alphabhet: React.FC = () => {
  const [popUp, setPoPup] = useState<boolean>(false);
  const alpaviteArr: string[] = ["A-Z", "Z-A"];
  const selectAlphavite = useAppSelector(
    (state: RootState) => state.filter.selectAlphavite
  );
  const dispatch = useAppDispatch();
  const OnClickAlpavite = (alph: string) => {
    dispatch(setSelectAlphavite(alph));
    setPoPup(false);
  };
  return (
    <div>
      <div
        onClick={() => setPoPup(!popUp)}
        className=" border-gray-700 border-2 flex justify-between p-2 rounded-xl w-11/12 mb-2"
      >
        <div className=" flex">
          <div className=" flex justify-center items-center mr-2">
            <TiArrowUnsorted className=" text-xl flex justify-center items-center text-gray-400" />
          </div>
        </div>
        <div className=" flex">
          <div className=" mr-2">
            {alpaviteArr.map((alph, index) => {
              if (alph === selectAlphavite) {
                return (
                  <div className="text-white" key={index}>
                    {alph}
                  </div>
                );
              }
            })}
          </div>
          <div className=" flex justify-center items-center">
            {!popUp ? (
              <RiArrowDownSFill className=" text-xl flex justify-center items-center text-gray-400" />
            ) : (
              <RiArrowUpSFill className=" text-xl flex justify-center items-center text-gray-400" />
            )}
          </div>
        </div>
      </div>
      {popUp && (
        <div className="border-gray-700 border-2 flex justify-between rounded-xl w-11/12">
          {alpaviteArr.map((alph, index) => (
            <div
              className={` ${
                selectAlphavite === alph
                  ? "  border-green-600"
                  : "  border-transparent cursor-pointer"
              } text-white border-2 w-1/2 flex justify-center rounded-xl p-1`}
              key={index}
              onClick={() => OnClickAlpavite(alph)}
            >
              {alph}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Alphabhet;
