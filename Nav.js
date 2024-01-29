import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="fixed bottom-0 w-full overflow-hidden z-50">
      <div className="mx-auto w-full">
        <div
          className="w-full bg-gray-800 h-[96px] backdrop-blur-2xl
        rounded-2xl mx-auto px-5 flex justify-between
        items-center text-2xl text-white/50"
        >
          <NavLink
            to="/home"
            className={({
              isActive,
            }) => `cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center ${isActive ? `bg-green-500 rounded-full` : ``}`}
          >
            <span>
              <BiHomeAlt />
            </span>
          </NavLink>
          <NavLink
            to="/plans"
            className={({
              isActive,
            }) => `cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center ${isActive ? `bg-green-500 rounded-full` : ``}`}
          >
            <BiUser />
          </NavLink>
          <NavLink
            to="/menu"
            className={({
              isActive,
            }) => `cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center ${isActive ? `bg-green-500 rounded-full` : ``}`}
          >
            <BsClipboardData />
          </NavLink>
          <NavLink
            to="/profile"
            className={({
              isActive,
            }) => `cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center ${isActive ? `bg-green-500 rounded-full` : ``}`}
          >
            <BsBriefcase />
          </NavLink>
          <NavLink
            to="/contact"
            className={({
              isActive,
            }) => `cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center ${isActive ? `bg-green-500 rounded-full` : ``}`}
          >
            <BsChatSquareText />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
