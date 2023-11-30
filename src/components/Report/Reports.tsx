import React from "react";
import { reportType, useAppDispatch } from "../../Type";
import { TbHttpDelete } from "react-icons/tb";
import { removeReports } from "../../Redux/Slices/arrReportSlice";
const Reports: React.FC<reportType> = ({
  pushedname,
  value,
  estimation,
  id,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className=" p-5 w-full xl:w-80 bg-gray-950 rounded-xl xl:mr-2 mb-2">
      <div className=" flex justify-between mb-4 border-b-2 border-gray-500 pb-4 ">
        <div>{pushedname}</div>
        <div>{estimation}/10</div>
      </div>
      <div>{value}</div>
      <div className=" flex justify-end">
        <div
          onClick={() => dispatch(removeReports(id))}
          className=" hover:cursor-pointer w-min flex justify-center items-center p-2 rounded-xl bg-red-600"
        >
          <TbHttpDelete className="  flex justify-center items-center text-black text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Reports;
