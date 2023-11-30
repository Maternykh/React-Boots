import React from "react";
import DashCustom from "../components/Dash/DashCustom";
import PeopleCart from "../components/Dash/PeopleCart";
import { appersType, peopleMap } from "../Type";

const Dashboard: React.FC = () => {
  const apper: appersType[] = [
    {
      quantity: "1500k",
      percent: 15,
      name: "Total customer",
    },
    {
      quantity: "1000k",
      percent: 10,
      name: "Active customer",
    },
    {
      quantity: "600k",
      percent: 6,
      name: "Active client",
    },
    {
      quantity: "300k",
      percent: 3,
      name: "Inactive client",
    },
  ];
  const staff: peopleMap[] = [
    {
      id: 1,
      image:
        "https://catherineasquithgallery.com/uploads/posts/2021-02/1614528106_95-p-muzhchina-na-belom-fone-112.jpg",
      name: "Cameron Willamson",
      email: "example.url@example.com",
      date: "12/06/2020",
      type: "ECG",
      status: "Active",
      desc: "Responsibilities: Greet and assist customers in a professional and timely manner ",
    },
    {
      id: 2,
      image:
        "https://www.pngkit.com/png/detail/340-3400395_guy-left-call-center-man-png.png",
      name: "Dianne Russell",
      email: "example.url@example.com",
      date: "12/06/2020",
      type: "Sugar test",
      status: "Inactive",
      desc: "Responsibilities: Greet and assist customers in a professional and timely manner ",
    },
    {
      id: 3,
      image:
        "https://school5.edu.korolev.ru/wp-content/uploads/sites/8/2017/02/10-768x768.jpg",
      name: "Robert Fox",
      email: "example.url@example.com",
      date: "12/06/2020",
      type: "Checkup",
      status: "Active",
      desc: "Responsibilities: Greet and assist customers in a professional and timely manner ",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/originals/d7/e1/a5/d7e1a5736f7ad7cb4eb94bb55b51e597.jpg",
      name: "Jenny Wilson",
      email: "example.url@example.com",
      date: "12/06/2020",
      type: "Accident",
      status: "Inactive",
      desc: "Responsibilities: Greet and assist customers in a professional and timely manner ",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/originals/97/83/11/9783115892cba53fb6f642a1009f0d97.jpg",
      name: "Courtney Henry",
      email: "example.url@example.com",
      date: "12/06/2020",
      type: "CT Scan",
      status: "Active",
      desc: "Responsibilities: Greet and assist customers in a professional and timely manner ",
    },
    {
      id: 6,
      image:
        "https://wallbox.ru/resize/1024x1024/wallpapers/main2/201732/kler1.jpg",
      name: "Kathryn Murphy",
      email: "example.url@example.com",
      date: "12/06/2020",
      type: "ECG",
      status: "Inactive",
      desc: "Responsibilities: Greet and assist customers in a professional and timely manner ",
    },
  ];
  return (
    <div className=" p-5 text-white">
      <div className=" flex flex-wrap justify-between mb-5">
        {apper.map((app, index) => (
          <DashCustom key={index} {...app} />
        ))}
      </div>
      <div className=" flex flex-wrap justify-between">
        {staff.map((pepl, index) => (
          <PeopleCart key={index} {...pepl} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
