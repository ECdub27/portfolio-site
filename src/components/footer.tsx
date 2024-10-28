import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {

    return (
        <footer className="bg-[#161616] text-white text-center py-10 w-full">

            <div className="container mx-auto">
                <div className="flex justify-center space-x-4 mb-4">
                    <a
                        href="https://www.linkedin.com/in/elijah-christian-wiegand-2b59a898/"
                        className="text-white hover:text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="https://github.com/ECdub27"
                        className="text-white hover:text-gray-500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a
                        href="mailto:ewiegand51@gmail.com"
                        className="text-white hover:text-green-500"
                    >
                        <FaEnvelope size={30} />
                    </a>
                </div>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Elijah-Christian Wiegand. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;  