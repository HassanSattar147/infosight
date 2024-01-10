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
    <div className="p-5 border border-gray-300 rounded-lg w-full">
      <Image src={imgsTable[imgType]} alt="" />
      <h1 className="text-xl text-gray-900 font-medium lg:mt-10 mt-5">
        {title}
      </h1>
      <p className="text-gray-500 mb-1">{description}</p>
      <span className="text-[#C94B12] text-xs font-semibold bg-[#FDEEE8] px-2 py-1 rounded">
        {tag}
      </span>
      <div className="lg:mt-10 mt-5 flex lg:gap-5 gap-3">
        <Link href={link} target="_blank">
          <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md">
            View PDF
          </button>
        </Link>
        <Link href={link} target="_blank">
          <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md ">
            Download PDF
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
