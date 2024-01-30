import React from "react";

const Header = () => {
  return (
    <div className="mx-auto px-[34px]">
      <div className="navbar">
        <div className="flex-1">
          <span className="text-xl font-bold">LOGO</span>
        </div>
        <div className="flex-none">
          <ul className="sm:flex gap-8 hidden">
            <li>
              <a
                href="#"
                className="text-base font-semibold hover:text-gray-600 transition-all duration-500"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base font-semibold hover:text-gray-600 transition-all duration-500"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base font-semibold hover:text-gray-600 transition-all duration-500"
              >
                TEAM
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base font-semibold hover:text-gray-600 transition-all duration-500"
              >
                BLOG
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base font-semibold hover:text-gray-600 transition-all duration-500"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
