import Image from "next/image";
import React from "react";
import energyImg from "../../../../public/industries/industries-manufacturing-img.png";
import judgeIcon from "../../../../public/casestudy/judge-icon.svg";
import IndManfProvide from "./IndManfProvide";
import { CardProps } from "@/components/Elements/Card";
import Cards from "@/components/Elements/Cards";

const MANU_CARDS_DATA: CardProps[] = [
  {
    imgType: "JUD",
    title: "Quirch Foods",
    description: "Client success story",
    tag: "Manufacturing",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20Quirch%20Foods%20Client%20Success%20Story.pdf",
  },
];

const Manufacturing = () => {
  return (
    <div>
      <div className="p-5 lg:px-20">
        <div className="flex flex-col gap-3">
          <Image src={energyImg} alt="" className="w-full" />
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              With cyber attacks on the rise, security officers are facing more
              pressure than ever to protect both{" "}
              <span className="font-semibold"> IT and OT networks.</span> It is
              imperative for{" "}
              <span className="font-semibold">SCADA and ICS networks</span> to
              keep policies and procedures updated to secure information safety.
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              No organization is immune to cyber attacks, but a proactive,{" "}
              <span className="font-semibold">all-encompassing strategy</span>{" "}
              can mitigate these cyber attacks, breaches and threats.
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              <span className="font-semibold">
                InfoSigh&apos;s SCADA strategies and services
              </span>{" "}
              can reduce the risk of compromised data from your information
              control systems.
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              We provide your team with the most efficient incident response and
              recovery preparation and planning possible helping owners defend
              their{" "}
              <span className="font-semibold">
                critical infrastructures from emerging cyber threats.
              </span>
            </p>
          </div>
        </div>
        <div className=" py-5 lg:py-10">
          <h1 className="lg:text-lg text-[#222222] font-semibold">
            Client&apos;s Success Stories
          </h1>
          <p className="text-gray-900 text-sm lg:text-base py-1">
            Check out some of our Energy & Electric Client Success Stories for
            real life examples on how InfoSight provides solutions for maximum
            energy & electric security.
          </p>
          <div className="flex flex-col lg:flex-row gap-5 py-5 lg:py-10">
            <Cards cardsData={MANU_CARDS_DATA} />
          </div>
        </div>
      </div>
      <IndManfProvide />
    </div>
  );
};

export default Manufacturing;
