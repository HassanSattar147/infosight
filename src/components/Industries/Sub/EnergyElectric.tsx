import Image from "next/image";
import React from "react";
import energyImg from "../../../../public/industries/industries-energy-img.png";
import energyIcon from "../../../../public/casestudy/flash-icon.svg";
import IndEnergyPr from "./IndEnergyPr";
import { CardProps } from "@/components/Elements/Card";
import Cards from "@/components/Elements/Cards";
import ContentContainer from "@/components/Elements/ContentContainer";
import { Features } from "@/components/Elements/ServicePageLayout";

const ELECTRIC_CARDS_DATA: CardProps[] = [
  {
    imgType: "FLASH",
    title: "Prarieland",
    description: "Client success story",
    tag: "Energy & Electric",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20Prairie%20Land%20Electric%20Client%20Success%20Story.pdf",
  },
  {
    imgType: "FLASH",
    title: "Pioneer",
    description: "Client success story",
    tag: "Energy & Electric",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20Pioneer%20Electric%20Client%20Success%20Story.pdf",
  },
];

const ENERGY_FEATURES_DATA = [
  "SCADA & ICS Vulnerability Asessments",
  "Disaster Recovery Planning",
  "Social Engineering",
  "Security Compliances, Policy & Procedure Updates",
  "Industrial Control & IoT Services Security Compliances",
  "Risk Management",
  "24x7x365 Managed Security Services & SEIM",
  "Employee Security Awareness Training",
];

const EnergyElectric = () => {
  return (
    <ContentContainer>
      <div className="py-5">
        <div className="flex flex-col gap-3">
          <Image src={energyImg} alt="" className="w-full" />
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              With <span className="font-semibold">cyber attacks</span> on the
              rise, energy providers and electric cooperatives need to have{" "}
              <span className="font-semibold">layered security controls</span>
              in place to defend against or identify an attack in seconds.
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              It is imperative for those with{" "}
              <span className="font-semibold">
                BES (Bulk Electric Systems) and ICS (Information Control
                Systems)
              </span>{" "}
              to have the most current patches applied and monitored{" "}
              <span className="font-semibold">24x7x365.</span>
            </p>
          </div>
          <div className="flex lg:items-center items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-sm lg:text-base">
              No organization is immune to{" "}
              <span className="font-semibold">cyber attacks</span>, but a
              proactive strategy can make your{" "}
              <span className="font-semibold">
                OT & IT networks more &apos;&apos;cyber-resilient&apos;&apos;
              </span>
              to attacks and bad actors.
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
            <Cards cardsData={ELECTRIC_CARDS_DATA} />
          </div>
        </div>
      </div>
      {/* <IndEnergyPr /> */}
      <Features
        data={ENERGY_FEATURES_DATA}
        title="For Energy & Electric Industry We Provide"
      />
    </ContentContainer>
  );
};

export default EnergyElectric;
