import React from "react";
import {
  FaAddressCard,
  FaHome,
  FaScrewdriver,
} from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";

const MainNav: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#1a1a1a] bg-[#267FF3] sm:block">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-6 py-3">
        <a href="#home" className="flex flex-col leading-tight">
          <span className="text-[#12f7d6] text-[10px] font-mono uppercase tracking-widest">Parsec Logic Dev Solutions</span>
          <span className="text-white text-lg font-semibold font-inter">EC Wiegand</span>
        </a>
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
                <FaAddressBook className="text-black mr-2" />
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
