import React from "react";
import { useAppDispatch, useAppSelector } from "../../Type";
import {
  setEstimationValue,
  setName,
  setReportValue,
} from "../../Redux/Slices/reportSlice";
import { RootState } from "../../Redux/store";
import { setReports } from "../../Redux/Slices/arrReportSlice";

const Form: React.FC = () => {
  const estimat: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const dispatch = useAppDispatch();
  const { pushedname, value, estimation } = useAppSelector(
    (state: RootState) => state.report
  );
  const OnCLickAddreport = (
    pushedname: string,
    value: string,
    estimation: string
  ) => {
    if (!!pushedname && !!value && !!estimation) {
      const id = Math.random() * 999999999;
      dispatch(setReports({ pushedname, value, estimation, id }));
    }
  };
  return (
    <div className=" mb-5  bg-gray-800 rounded-xl xl:w-min p-4 xl:h-min w-full">
      <div className=" mb-2">Your name:</div>
      <div>
        <input
          value={pushedname}
          onChange={(e) => dispatch(setName(e.target.value))}
          placeholder="Enter your name"
          type="text"
          className=" bg-gray-700 p-2 rounded-xl outline-none border-none w-full xl:w-80 mb-2"
        />
      </div>
      <div className=" mb-2">Report:</div>
      <div>
        <textarea
          value={value}
          onChange={(e) => dispatch(setReportValue(e.target.value))}
          className=" h-40 bg-gray-700 p-2 rounded-xl outline-none border-none w-full xl:w-80"
          placeholder="Enter your report"
          name="report"
        ></textarea>
      </div>
      <div className=" mb-2">Estimation:</div>
      <div className=" flex flex-wrap ">
        {estimat.map((est, index) => (
          <div
            onClick={() => dispatch(setEstimationValue(est))}
            className={` ${
              estimation === est ? "border-green-500" : " border-transparent"
            } border-2 hover:cursor-pointer ml-1 mb-1 py-2 px-5 bg-gray-700 rounded-xl`}
            key={index}
          >
            {est}/10
          </div>
        ))}
      </div>
      <div
        onClick={() => OnCLickAddreport(pushedname, value, estimation)}
        className=" hover:bg-green-500 hover:text-black hover:cursor-pointer flex justify-center mt-3 border-2 border-green-500 py-2 px-4 rounded-xl text-white"
      >
        Add
      </div>
    </div>
  );
};

export default Form;
