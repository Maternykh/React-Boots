import React, { useState } from "react";
import Reports from "../components/Report/Reports";
import Form from "../components/Report/Form";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const Report: React.FC = () => {
  const reports = useSelector((state: RootState) => state.arrReport.reports);
  const [isForm, setIsForm] = useState<boolean>(false);
  return (
    <div className=" text-white">
      <div
        onClick={() => setIsForm(!isForm)}
        className=" hover:bg-green-500 hover:text-black hover:cursor-pointer py-2 px-3 border-2 border-green-500 rounded-xl w-40 mb-5"
      >
        Add Report
      </div>
      <div className=" xl:justify-normal xl:flex-nowrap flex flex-wrap justify-center">
        {isForm && <Form />}
        <div className=" justify-between xl:justify-normal xl:ml-2 flex flex-wrap h-min">
          {reports.map((rep, index) => (
            <Reports key={index} {...rep} />
          ))}
        </div>
      </div>
      {reports.length === 0 && <div>There is nothing in the report</div>}
    </div>
  );
};

export default Report;
