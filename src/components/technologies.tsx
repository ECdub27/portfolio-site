import React from 'react';
import { FaJava, FaDocker, FaGitAlt, FaDatabase, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import reactFrameworks from '../../public/imgs/ReactFrameworks.png'
import js from '/imgs/JS.png'
import python from '/imgs/Python.png'
import dotnet from '/imgs/dotnet.png'

const TechItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 flex flex-col items-center">
    {icon}
    <p className="text-center text-white mt-2 text-sm">{label}</p>
  </div>
);

const Technologies: React.FC = () => {
  return (
    <div className="flex flex-wrap font-sans justify-center mt-5 px-5">
      <TechItem icon={<img src={reactFrameworks} className="h-12 w-12" alt="React" />} label="React" />
      <TechItem icon={<img src={js} className="h-12 w-12" alt="JavaScript" />} label="JavaScript" />
      <TechItem icon={<SiTypescript className="h-12 w-12 text-[#3178C6]" />} label="TypeScript" />
      <TechItem icon={<FaJava className="h-12 w-12 text-[#f89820]" />} label="Java" />
      <TechItem icon={<img src={python} className="h-12 w-12" alt="Python" />} label="Python" />
      <TechItem icon={<img src={dotnet} className="h-12 w-12" alt=".NET" />} label=".NET" />
      <TechItem icon={<FaNodeJs className="h-12 w-12 text-[#339933]" />} label="Node.js" />
      <TechItem icon={<FaDocker className="h-12 w-12 text-[#2496ED]" />} label="Docker" />
      <TechItem icon={<FaGitAlt className="h-12 w-12 text-[#F05032]" />} label="Git" />
      <TechItem icon={<FaDatabase className="h-12 w-12 text-[#336791]" />} label="PostgreSQL" />
      <TechItem icon={<div className="h-12 w-12 flex items-center justify-center bg-[#292f36] rounded-lg border border-[#12f7d6]"><span className="text-[#12f7d6] font-mono text-xs font-bold leading-tight text-center">Guide<br/>wire</span></div>} label="Guidewire" />
    </div>
  );
};

export default Technologies;    