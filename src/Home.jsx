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
    { name: "Analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Card", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];

  return (
    <section className="flex gap-6">
      <div className="px-4 bg-gray-900 min-h-screen w-72 text-white">
        <div className="py-3 flex justify-end">
          <HiMenu size={26} className="cursor-pointer" />
        </div>
        <div className="relative mt-4 flex flex-col gap-2">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`${
                menu?.margin && "mt-5"
              } flex items-center gap-4 text-sm font-medium p-3 hover:bg-gray-800 rounded-lg`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2>{menu?.name}</h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl font-semibold text-gray-900">
        REACT SIDEBAR
      </div>
    </section>
  );
};

export default Home;
