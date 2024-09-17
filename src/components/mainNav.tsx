import React from "react";
import { FaAddressCard, FaExclamation, FaHome, FaScrewdriver } from "react-icons/fa";



const MainNav: React.FC = () => {       

return (
<nav className='fixed start-0 top-0 z-20 hidden w-full border-b border-[#212121]-200 bg-[#267FF3] sm:block'>
  <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
 {/* logo here */}
 <button data-collapse-toggle="navbar-default"
type="button"
className='inline-flex- h-10 w-10 items-center bg-[#white] justify-center rounded-lg p-2 text-sm text-gray hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black-200 md:hidden'>
  <span className='sr-only'>Menu</span>
</button>
<div className='hidden w-full md:block md:w-auto' id="navbar-default">
 <ul className='mt-4 flex flex-col rounded-lg border border-red-500 bg-[#1AB7FF]-50 p-4 font-medium md:mt:0 md:flex-row md:space-x-8 md:border-0 md:bg-black md:p-0 rtl:space-x-reverse'>
    <li className="bg-[#267FF3]">
        Home 
      <FaHome className='text-black' > 
      <a href='#home'  className='text-white'>Home</a>
      </FaHome> 
    </li>
    <li className="bg-[#267FF3]">
        About
      <FaAddressCard className='text-black' >
      <a className='text-white'  href='#about'>About</a>
      </FaAddressCard>  
    </li>
    <li className="bg-[#267FF3]">
        Projects
      <FaScrewdriver className='text-black' >
      <a className='text-white' href='#projects'>Projects</a>
      </FaScrewdriver>
    </li>
    <li className="bg-[#267FF3]">
        Contact
      <FaExclamation className='text-black' > 
      <a className='text-white' href='#contact'>Contact</a>
      </FaExclamation>  
    </li>
  </ul>
  </div>
  </div>
</nav>
);

};
export default MainNav;