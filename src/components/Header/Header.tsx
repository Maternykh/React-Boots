import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import Settings from "./Settings";

const Header: React.FC = () => {
  return (
    <header className=" block xl:flex flex-nowrap justify-between items-center mb-5">
      <Logo />
      <Links />
      <div className=" xl:block hidden">
        <Settings />
      </div>
    </header>
  );
};

export default Header;
