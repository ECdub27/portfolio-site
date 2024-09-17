import React from 'react';
import { FaDatabase } from 'react-icons/fa';
import reactFrameworks from '../../public/imgs/ReactFrameworks.png'
import js from '/imgs/JS.png'
import npm from '../../public/imgs/npm.png'
import python from '../../public/imgs/python.png'   
import git from '../../public/imgs/git.png'
import dotnet from '../../public/imgs/dotnet.png'


const Technologies:React.FC = () => {    
return (
    <div className="flex flex-wrap font-sans justify-center mt-5 font-league-spartan text-xl text-pretty leading-7 px-5">
    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 flex flex-col items-center">
      <img src={reactFrameworks} className="h-12 w-12 mb-2" />
      <p className="text-center">React</p>
    </div>
    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 flex flex-col items-center">
      <FaDatabase className="h-12 w-12 mb-2" />
      <p className="text-center">PostgreSQL</p>
    </div>
    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 flex flex-col items-center">
      <img src={js}className="h-12 w-12 mb-2" />
      <p className="text-center">JavaScript</p>
    </div>
    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 flex flex-col items-center">
      <img  src={npm}className="h-12 w-12 mb-2" />
      <p className="text-center">NPM</p>
    </div>
    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 flex flex-col items-center">
      <img src={git} className="h-12 w-12 mb-2" />
      <p className="text-center">Git</p>
    </div>
    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 flex flex-col items-center">
      <img src={dotnet} className="h-12 w-12 mb-2" />
      <p className="text-center">.NET</p>
    </div>
  </div>
);
};

export default Technologies;    