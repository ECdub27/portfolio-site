import React from "react";
import {
  FaAddressCard,
  FaExclamation,
  FaHome,
  FaScrewdriver,
} from "react-icons/fa";
import BioBadge from "./bioBage";

const MainNav: React.FC = () => {
  return (
    <nav className="static start-0 top-0 hidden w-full border-b border-[#212121]-200 bg-[#267FF3] sm:block mb-5">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* logo here */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex- h-10 w-10 items-center bg-[#white] justify-center rounded-lg p-2 text-sm text-gray hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black-200 md:hidden"
        >
          <span className="sr-only">Menu</span>
        </button>
        <BioBadge />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-red-500 bg-[#1AB7FF]-50 p-4 font-medium md:mt:0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li className="bg-[#267FF3]">
              <a href="#home" className="text-white flex items-center">
                <FaHome className="text-black mr-2" />
                Home
              </a>
            </li>
            <li className="bg-[#267FF3]">
              <a className="text-white flex items-center" href="#about-section">
                <FaAddressCard className="text-black mr-2" />
                About
              </a>
            </li>
            <li className="bg-[#267FF3]">
              <a className="text-white flex items-center" href="#project-section">
                <FaScrewdriver className="text-black mr-2" />
                Projects
              </a>
            </li>
            <li className="bg-[#267FF3]">
              <a className="text-white flex items-center" href="#contact-me">
                <FaExclamation className="text-black mr-2" />
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default MainNav;
