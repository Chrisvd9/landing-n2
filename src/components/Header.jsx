import React, { useState } from "react";
import { RiCloseIcon, RiMenuIcon } from "../utils/Icons";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex items-center justify-between w-full py-4 px-8 h-[10vh]">
      <a href="/" className="text-2xl font-bold  p-1">
        LOGO
      </a>
      <nav
        className={`fixed w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0 bg-black" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <a
          href="#"
          className={`${
            showMenu
              ? "text-white"
              : "text-base font-semibold hover:text-gray-600 transition-all duration-500"
          }`}
        >
          HOME
        </a>
        <a
          href="#about"
          className={`${
            showMenu
              ? "text-white"
              : "text-base font-semibold hover:text-gray-600 transition-all duration-500"
          }`}
        >
          ABOUT
        </a>
        <a
          href="#services"
          className={`${
            showMenu
              ? "text-white"
              : "text-base font-semibold hover:text-gray-600 transition-all duration-500"
          }`}
        >
          SERVICES
        </a>
        <a
          href="#howwework"
          className={`${
            showMenu
              ? "text-white"
              : "text-base font-semibold hover:text-gray-600 transition-all duration-500"
          }`}
        >
          HOW WE WORK
        </a>
        <a
          href="#contact"
          className={`${
            showMenu
              ? "text-white"
              : "text-base font-semibold hover:text-gray-600 transition-all duration-500"
          }`}
        >
          CONTACT
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseIcon /> : <RiMenuIcon />}
      </button>
    </div>
  );
};

export default Header;
