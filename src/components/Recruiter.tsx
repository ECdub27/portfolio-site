import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaArrowLeft,
  FaDownload,
} from 'react-icons/fa';

const resumeUrl = '/imgs/ec-resume-saas-v2.docx';

const actions = [
  {
    label: 'Download Resume',
    href: resumeUrl,
    Icon: FaDownload,
    external: false,
    primary: true,
    download: 'EC-Wiegand-Resume.docx',
  },
  {
    label: 'Email',
    href:
      'mailto:contact@parselogic.it.com?subject=Opportunity%20for%20EC%20Wiegand&body=Hi%20EC,%0D%0A%0D%0AI%27d%20like%20to%20discuss%20an%20opportunity.%0D%0A%0D%0ARegards,%0D%0A%5BYour%20Name%5D',
    Icon: FaEnvelope,
    external: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/elijah-christian-wiegand-2b59a898/',
    Icon: FaLinkedin,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ECdub27',
    Icon: FaGithub,
    external: true,
  },
];

const Recruiter: React.FC = () => (
  <div className="min-h-screen bg-gray-900 text-white">
    <div className="mx-auto max-w-3xl px-6 py-10 md:py-16 flex flex-col items-center gap-8">
      <Link
        to="/"
        className="self-start flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
      >
        <FaArrowLeft /> Back to portfolio
      </Link>

      <img
        src="/imgs/logo2.svg"
        alt="Parsec Logic Dev Solutions"
        className="h-24 w-24 md:h-28 md:w-28 rounded-xl"
      />

      <div className="text-center flex flex-col gap-2">
        <h1 className="text-3xl md:text-5xl font-bold">
          Elijah-Christian Wiegand
        </h1>
        <p className="text-base md:text-xl text-white/80 uppercase tracking-widest">
          Full-Stack Developer · Independent Software Contractor
        </p>
      </div>

      <p className="max-w-2xl text-center text-white/80 text-base md:text-lg leading-7">
        Enterprise roots, modern web focus. .NET, React/Next.js, Node, and
        Guidewire integration experience. Available for contract or full-time
        engagements through Parsec Logic Dev Solutions.
      </p>

      <div className="flex flex-col gap-3 md:gap-4 w-full max-w-md">
        {actions.map(({ label, href, Icon, external, primary, download }) => (
          <a
            key={label}
            href={href}
            download={download}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className={`flex items-center justify-center gap-3 h-14 rounded-2xl text-base md:text-lg font-medium transition-colors ${
              primary
                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Recruiter;
