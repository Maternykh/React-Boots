import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { HiMiniBell } from "react-icons/hi2";
const Settings: React.FC = () => {
  const [isOpenSetting, setIsOpenSetting] = useState<boolean>(false);
  const [isOpenMessage, setIsOpenMessage] = useState<boolean>(false);
  const OnClickSettings = () => {
    setIsOpenSetting(!isOpenSetting);
    setIsOpenMessage(false);
  };
  const OnClickMessage = () => {
    setIsOpenMessage(!isOpenMessage);
    setIsOpenSetting(false);
  };
  return (
    <div className=" flex relative">
      <div
        onClick={() => OnClickSettings()}
        className=" hover:cursor-pointer mr-2 w-min p-2 rounded-xl bg-gray-700  flex items-center justify-center"
      >
        <IoMdSettings className=" flex items-center justify-center text-gray-300 text-2xl" />
      </div>
      {isOpenSetting && (
        <div className=" w-60 bg-gray-700 p-2 text-gray-300 rounded-xl absolute right-0 top-12">
          <div>Set Light Mode</div>
        </div>
      )}
      <div
        onClick={() => OnClickMessage()}
        className="hover:cursor-pointer w-min p-2 rounded-xl bg-gray-700  flex items-center justify-center"
      >
        <HiMiniBell className=" flex items-center justify-center text-gray-300 text-2xl" />
      </div>
      {isOpenMessage && (
        <div className=" w-60 bg-gray-700 p-2 text-gray-300 rounded-xl absolute right-0 top-12">
          <div>Not found new message!</div>
        </div>
      )}
    </div>
  );
};

export default Settings;
