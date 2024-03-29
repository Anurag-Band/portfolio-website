import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsLink } from "react-icons/bs";

const ProjectCard = ({
  name,
  description,
  imageUrl,
  tools,
  repoLink,
  deployedLink,
}) => {
  return (
    <div className="relative flex items-center z-10 w-9/12 mx-auto px-14 py-7 space-x-14 my-8">
        {/* Card Background */}
      <div className="absolute w-9/12 h-full -z-10 top-0 right-0 bg-white shadow-lg rounded-lg" />
      {/* Left Image Section */}
      <Image
        alt={name}
        src={imageUrl}
        width={300}
        height={150}
        className="w-1/2"
      />
      {/* Right Details Section */}
      <div className="w-1/2 flex flex-col items-start space-y-2">
        <h2 className="font-medium text-lg">{name}</h2>
        <p className="text-sm text-slate-600">{description}</p>
        <div className="flex text-sm font-medium text-slate-800 items-center justify-evenly space-x-2 flex-wrap">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="p-1 border-2 m-1 border-slate-500 bg-slate-200 rounded-sm"
            >
              {tool}
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4 px-1">
          <Link
            href={repoLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsGithub className="text-2xl" />
          </Link>
          <Link
            href={deployedLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsLink className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
