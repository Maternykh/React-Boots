import React from "react";
import { useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import { setCurrentPage } from "../../Redux/Slices/filterSlice";
const Pagination: React.FC = () => {
  const pages = [1, 2, 3, 4, 5, 6];
  const currentPage = useAppSelector(
    (state: RootState) => state.filter.currentPage
  );
  const dispatch = useAppDispatch();
  return (
    <div className=" flex justify-between mt-2">
      {pages.map((page) => (
        <div
          onClick={() => dispatch(setCurrentPage(page))}
          className={` ${
            currentPage === page
              ? " text-white"
              : "text-gray-600 hover:cursor-pointer"
          }  mr-2 flex justify-center p-2 bg-gray-800 w-16 rounded-xl`}
          key={page}
        >
          {page}
        </div>
      ))}
    </div>
  );
};
export default Pagination;
