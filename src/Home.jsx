import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiShoppingCart, FiFolder } from "react-icons/fi";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics, TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "User", link: "/", icon: AiOutlineUser },
    { name: "Messages", link: "/", icon: FiMessageSquare },
    { name: "Analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Card", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
    {
      name: "Logout",
      link: "/",
      icon: TbLogout2,
      margin: true,
    },
  ];
  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6 bg-white">
      <div
        className={`px-2.5 bg-gray-900 min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-white`}
      >
        <div className="p-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="relative mt-4 flex flex-col gap-2   ">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`${
                menu?.margin && "mt-5"
              } group flex items-center gap-4 text-sm font-medium p-3 hover:bg-gray-800 rounded-lg`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 2}00ms`,
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
                } absolute left-20 bg-white font-semibold whitespace-pre text-gray-800 rounded-lg drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl font-semibold text-gray-900">Dashboard</div>
    </section>
  );
};

export default Home;
