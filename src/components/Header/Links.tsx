import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LinkType, useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import { setLinks } from "../../Redux/Slices/linkSlice";
const Links: React.FC = () => {
  const linkArr: LinkType[] = [
    {
      nameLink: "Inventory",
      pathLink: `/`,
    },
    {
      nameLink: "Dashboard",
      pathLink: `/dashboard`,
    },
    {
      nameLink: "Order",
      pathLink: `/order`,
    },
    {
      nameLink: "Document",
      pathLink: `/document`,
    },
  ];
  const links = useAppSelector((state: RootState) => state.linsk.links);
  const dispatch = useAppDispatch();
  return (
    <nav className=" flex xl:flex-nowrap flex-wrap">
      {linkArr.map((link, index: number) => (
        <Link to={link.pathLink} key={index}>
          <div
            onClick={() => dispatch(setLinks(index))}
            className={` ${
              links === index
                ? "bg-gray-700 text-white"
                : " bg-gray-900 text-slate-400"
            } border-gray-700  mb-2 xl:mb-0 flex  border-2 rounded-full p-2 mr-3`}
          >
            <div>{link.nameLink}</div>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Links;
