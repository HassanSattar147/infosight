import Image from "next/image";
import React from "react";
import walletIcon from "../../../public/casestudy/walle-icon.svg";
import judgeIcon from "../../../public/casestudy/judge-icon.svg";
import flashIcon from "../../../public/casestudy/flash-icon.svg";
import dropIcon from "../../../public/casestudy/drop-icon.svg";
import entIcon from "../../../public/industries/industries-entertainment-icon.svg";
import govtIcon from "../../../public/industries/industries-government-icon.svg";
import hlthIcon from "../../../public/industries/industries-healthcare-icon.svg";
import fuelIcon from "../../../public/industries/industries-oil-gas-icon.svg";
import Link from "next/link";

export type CardImgType =
  | "WLT"
  | "JUD"
  | "FLASH"
  | "DRP"
  | "ENT"
  | "GOVT"
  | "HLTH"
  | "FUEL";

const imgsTable = {
  WLT: walletIcon,
  JUD: judgeIcon,
  FLASH: flashIcon,
  DRP: dropIcon,
  ENT: entIcon,
  GOVT: govtIcon,
  HLTH: hlthIcon,
  FUEL: fuelIcon,
};

const labelColors = {
  WLT: "text-[#C94B12] bg-[#FDEEE8]",
  JUD: "text-[#444444] bg-[#f2f2f2]",
  FLASH: "text-[#274A68] bg-[#E9F0F7]",
  DRP: "text-[#364BBA] bg-[#E9F0F7]",
  ENT: "text-[#70028C] bg-[#F9E8FD]",
  GOVT: "text-[#1D70B8] bg-[#E9F2FB]",
  HLTH: "text-[#207E29] bg-[#E5F7E7]",
  FUEL: "text-[#C99612] bg-[#FCF7EA]",
};

export interface CardProps {
  imgType: CardImgType;
  title: string;
  description: string;
  tag: string;
  link: string;
}

const Card: React.FC<CardProps> = ({
  imgType,
  title,
  description,
  tag,
  link,
}) => {
  return (
    <div className="p-5 border border-gray-300 rounded-lg h-full">
      <Image src={imgsTable[imgType]} alt="" />
      <h3 className="text-xl text-gray-900 font-medium lg:mt-10 mt-5">
        {title}
      </h3>
      <p className="text-gray-500 mb-1">{description}</p>
      <span
        className={
          `text-xs font-semibold px-2 py-1 rounded ` + labelColors[imgType]
        }
      >
        {tag}
      </span>
      <div className="lg:mt-10 mt-5 flex lg:gap-5 gap-3">
        <Link
          href={link}
          target="_blank"
          className="text-gray-700 border hover:bg-gray-100  border-gray-300 px-5 py-2 rounded-md "
        >
          Download PDF
        </Link>
      </div>
    </div>
  );
};

export default Card;
