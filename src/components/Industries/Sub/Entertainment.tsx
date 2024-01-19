import Image from "next/image";
import React from "react";
import energyImg from "../../../../public/industries/industries-entertainment-img.png";
import { CardProps } from "@/components/Elements/Card";
import Cards from "@/components/Elements/Cards";
import IndEnterProvide from "./IndEntertProvide";
import ContentContainer from "@/components/Elements/ContentContainer";
import { Features } from "@/components/Elements/ServicePageLayout";

const ENTERTAINMENT_CARDS_DATA: CardProps[] = [
  {
    imgType: "ENT",
    title: "Entertainment",
    description: "Client success story",
    tag: "Entertainment",
    link: "",
  },
];

const ENTERTAINMENT_FEATURES_DATA = [
  "SCADA & ICS Vulnerability Asessments",
  "Disaster Recovery Planning",
  "Social Engineering",
  "Security Compliances, Policy & Procedure Updates",
  "Industrial Control & IoT Services Security Compliances",
  "Risk Management",
  "24x7x365 Managed Security Services & SEIM",
  "Employee Security Awareness Training",
];

const Entertainment = () => {
  return (
    <ContentContainer>
      <div className="py-5">
        <div className="flex flex-col gap-3">
          <Image src={energyImg} alt="" className="w-full" />
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              High-profile cyber attacks on the entertainment industry have led
              to some{" "}
              <span className="font-semibold">
                very public and embarrassing data exposure.
              </span>
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              Entertainment-related organizations need to ensure they have the{" "}
              <span className="font-semibold">
                security controls, solutions, and monitoring{" "}
              </span>{" "}
              in place to prevent and detect cyber attacks.
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              It is also of paramount importance that employees understand how
              to spot social engineering campaigns designed to compromise
              network credentials and gain unauthorized access. So having a{" "}
              <span className="font-semibold">
                security awareness training program
              </span>{" "}
              is key to success.
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              No organization is immune to{" "}
              <span className="font-semibold">
                cyber attacks, but a proactive, all-encompassing strategy
              </span>{" "}
              can mitigate these cyber attacks, breaches and threats.
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
            Check out some of our Entertainment&apos;s Client Success Stories
            for real life examples on how InfoSight provides solutions for
            maximum financial security.
          </p>
          <div className="flex flex-col lg:flex-row gap-5 py-5 lg:py-10">
            <Cards cardsData={ENTERTAINMENT_CARDS_DATA} />
          </div>
        </div>
      </div>
      {/* <IndEnterProvide /> */}

      <Features
        data={ENTERTAINMENT_FEATURES_DATA}
        title=" For Entertainment Industry We Provide"
      />
    </ContentContainer>
  );
};

export default Entertainment;
