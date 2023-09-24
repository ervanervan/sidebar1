import React from "react";
import { HiMenu } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiShoppingCart, FiFolder } from "react-icons/fi";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "User", link: "/", icon: AiOutlineUser },
    { name: "Messages", link: "/", icon: FiMessageSquare },
    { name: "Analytics", link: "/", icon: TbReportAnalytics },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Card", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];

  return (
    <section className="flex gap-6">
      <div className="px-4 bg-gray-900 min-h-screen w-72 text-white">
        <div className="py-3 flex justify-end">
          <HiMenu size={26} className="cursor-pointer" />
        </div>
        <div className="relative mt-4 flex flex-col gap-4">
          {menus?.map((menu, i) => {
            <Link to={menu?.link} key={i}>
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2>{menu?.name}</h2>
            </Link>;
          })}

          {/* {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))} */}
        </div>
      </div>
      <div className="m-3 text-xl font-semibold text-gray-900">
        REACT SIDEBAR
      </div>
    </section>
  );
};

export default Home;
