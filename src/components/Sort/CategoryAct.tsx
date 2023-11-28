import React from "react";
import { useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import { setSelectCategstate } from "../../Redux/Slices/filterSlice";
const CategoryAct: React.FC = () => {
  const sort: string[] = ["All", "Active", "Disable", "Draft"];
  const selectCategstate = useAppSelector(
    (state: RootState) => state.filter.selectCategstate
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className=" flex flex-wrap">
        {sort.map((sortEl, index) => (
          <div
            onClick={() => dispatch(setSelectCategstate(sortEl))}
            key={index}
            className={`${
              selectCategstate === sortEl
                ? " border-green-600"
                : "border-gray-600 hover:cursor-pointer"
            } mr-2 mb-2 w-40 border-2  text-white rounded-xl p-2`}
          >
            {sortEl}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryAct;
