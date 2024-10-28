import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import MainSection from "./MainSection";

const ContactSection = () => {
    return (
        <MainSection title="Contact" altBackground={true}>
            <h2
                id="contact-me"
                className="text-4xl font-bold leading-10 text-center text-[#1AB7FF]"
            >
                Contact Me:
            </h2>
            <p className="text-center mt-4 text-xl">
                I am always open to discussing new opportunities. Feel free to reach out to me!
            </p>
            <div className="flex justify-center mt-4 space-x-2">
                <a
                    href="mailto:your-email@example.com?subject=Job%20Opportunity&body=Hi%20Elijah-Christian,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20job%20opportunity%20with%20you.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]"
                    className="bg-[#2CF000] h-[70px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                    <FaEnvelope className="mr-2" /> Email Me
                </a>
                <a
                    href="https://www.linkedin.com/in/your-profile"
                    className="bg-[#0077B5] h-[70px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="mr-2" /> LinkedIn
                </a>
                <a
                    href="https://github.com/your-profile"
                    className="bg-[#333] h-[70px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="mr-2" /> GitHub
                </a>
            </div>
            <form className="mt-8 max-w-md mx-auto">
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
                    className="bg-[#2CF000]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Send Message
                </button>
            </form>
        </MainSection>
    );
};

export default ContactSection;