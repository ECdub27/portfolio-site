import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiUser, HiBriefcase, HiMail } from 'react-icons/hi';

const links = [
  { href: '#about', label: 'About', Icon: HiUser },
  { href: '#projects', label: 'Projects', Icon: HiBriefcase },
  { href: '#contact', label: 'Contact', Icon: HiMail },
];

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900">
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-6 md:px-[120px] md:py-8">
        <a
          href="#home"
          className="flex items-center gap-3 text-white text-sm md:text-xl font-bold uppercase tracking-widest"
        >
          <img
            src="/imgs/logo2.svg"
            alt="Parsec Logic Dev Solutions"
            className="h-10 w-10 md:h-12 md:w-12 rounded-md"
          />
          <span className="hidden sm:inline">Parsec Logic Dev Solutions</span>
        </a>

        <button
          type="button"
          className="text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        <ul className="hidden md:flex items-center gap-16 lg:gap-24">
          {links.map(({ href, label, Icon }) => (
            <li key={href}>
              <a
                href={href}
                className="flex items-center gap-2 text-white text-lg font-medium capitalize hover:opacity-80 transition-opacity"
              >
                <Icon className="w-6 h-6" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-gray-900">
          {links.map(({ href, label, Icon }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-white text-lg font-medium capitalize"
              >
                <Icon className="w-6 h-6" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default MainNav;
