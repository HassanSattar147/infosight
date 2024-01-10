import Image from "next/image";
import React from "react";
import energyImg from "../../../../public/industries/industries-water-img.png";
import IndWaterProvide from "./IndWaterProvide";
import { CardProps } from "@/components/Elements/Card";
import Cards from "@/components/Elements/Cards";

const WATER_CARDS_DATA: CardProps[] = [
  {
    imgType: "DRP",
    title: "Greensboro",
    description: "Client success story",
    tag: "Water & Wastewater",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20City%20of%20Greensboro%20Water%20Resources%20Client%20Success%20Story.pdf",
  },
];

const Water = () => {
  return (
    <div>
      <div className="p-5 lg:px-20">
        <div className="flex flex-col gap-3">
          <Image src={energyImg} alt="" className="w-full" />
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              With cyber attacks on the rise, water and wastewater cooperatives
              need to have the{" "}
              <span className="font-semibold">layered security controls</span>{" "}
              in place to defend against or identify an attack in seconds.
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              It is imperative for those{" "}
              <span className="font-semibold">
                {" "}
                ICS (Information Control Systems)
              </span>{" "}
              to have the most current patches applied and monitored
              <span className="font-semibold">24x7x365.</span>
              No organization is immune to cyber attacks, but a proactive
              strategy can make your{" "}
              <span className="font-semibold">
                OT & IT Networks more &apos;&apos;cyber-resilient&apos;&apos;{" "}
              </span>{" "}
              to attacks and bad actors.
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              <span className="font-semibold">
                InfoSight&apos;s Vulnerability Assessment and 24x7x365 threat
                monitoring
              </span>{" "}
              can reduce the risk of a successful cyber attack. We can assist
              your organization by creating the most effective incident response
              and recover plans for your environment.
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              <span className="font-semibold">
                InfoSight&apos;s security strategies and services
              </span>{" "}
              can reduce the risk of compromised data from your information
              control systems. We provide your team with the most efficient
              incident response and recovery preparation and planning possible
              helping owners defend their{" "}
              <span className="font-semibold">critical infrastructures</span>{" "}
              from emerging cyber threats
            </p>
          </div>
        </div>
        <div className=" py-5 lg:py-10">
          <h1 className="lg:text-lg text-[#222222] font-semibold">
            Client&apos;s Success Stories
          </h1>
          <p className="text-gray-900 text-sm lg:text-base py-1">
            Check out some of our Water & Wastewater&apos;s Client Success
            Stories for real life examples on how InfoSight provides solutions
            for maximum financial security.
          </p>
          <div className="flex flex-col lg:flex-row gap-5 py-5 lg:py-10">
            <Cards cardsData={WATER_CARDS_DATA} />
          </div>
        </div>
      </div>
      <IndWaterProvide />
    </div>
  );
};

export default Water;
