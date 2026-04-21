import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import MainSection from "./MainSection";

const ContactSection = () => {
    return (
        <MainSection title="Start a Project" altBackground={true}>
            <div className="bg-gradient-to-r from-blue-500 to-green-500 p-10 rounded-lg shadow-lg w-full">
                <h2
                    id="contact-me"
                    className="text-4xl font-bold leading-10 text-center text-white"
                >
                    Work With Me
                </h2>
                <p className="text-center mt-4 text-xl text-white">
                    Have a project in mind? I take on contract engagements through Parsec Logic Dev Solutions — let's talk scope and timeline.
                </p>
                <div className="flex justify-center mt-4 space-x-2">
                    <a
                        href="mailto:contact@parselogic.it.com?subject=Project%20Inquiry%20via%20PLDS&body=Hi%20EC,%0D%0A%0D%0AI%27d%20like%20to%20discuss%20a%20project%20engagement.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]"
                        className="bg-[#267FF3] h-[70px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-transform transform hover:scale-105"
                    >
                        <FaEnvelope className="mr-2" /> Email Me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/elijah-christian-wiegand-2b59a898/"
                        className="bg-[#0077B5] h-[70px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-transform transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="mr-2" /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/ECdub27"
                        className="bg-[#333] h-[70px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-transform transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="mr-2" /> GitHub
                    </a>
                </div>
                <form className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            placeholder="Your Message"
                            rows={4}
                        ></textarea>
                    </div>
                    <button
                        className="bg-[#267FF3] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105"
                        type="submit"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </MainSection>
    );
};

export default ContactSection;