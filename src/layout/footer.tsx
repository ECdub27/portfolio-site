import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="w-full bg-gray-900 text-white">
    <div className="mx-auto max-w-container flex flex-col items-center justify-center gap-4 px-6 py-12 md:py-16">
      <img
        src="/imgs/logos/logo2.svg"
        alt="Parsec Logic Dev Solutions"
        className="h-16 w-16 md:h-20 md:w-20 rounded-lg mb-2"
      />
      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/elijah-christian-wiegand-2b59a898/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-400 transition-colors"
        >
          <FaLinkedin size={26} />
        </a>
        <a
          href="https://github.com/ECdub27"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-blue-400 transition-colors"
        >
          <FaGithub size={26} />
        </a>
        <a
          href="mailto:contact@parselogic.it.com"
          aria-label="Email"
          className="hover:text-blue-400 transition-colors"
        >
          <FaEnvelope size={26} />
        </a>
      </div>
      <p className="text-sm text-center text-white/80">
        &copy; {new Date().getFullYear()} Parsec Logic Dev Solutions · EC Wiegand. All
        rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
