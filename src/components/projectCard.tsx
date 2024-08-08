import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

interface ProjectCardProps {
title: string;
description: string;
image: string;
link: string;
// children: React.ReactNode;  
};

 const ProjectCard:React.FC<ProjectCardProps> = ({title,description, image, link}) => {

return (

    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={image} alt={title} />
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 py-4">
        <a href={link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Project
        </a>
    </div>
</div>
);

};

export default ProjectCard; 

