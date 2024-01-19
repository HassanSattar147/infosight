import Image from "next/image";
import React from "react";
import financialImg from "../../../../public/industries/industries-financial-img.png";
import IndFinancialPr from "./IndustryProvide";
import { CardProps } from "@/components/Elements/Card";
import Cards from "@/components/Elements/Cards";
import ContentContainer from "@/components/Elements/ContentContainer";
import { Features } from "@/components/Elements/ServicePageLayout";

const FINANCIAL_CARDS_DATA: CardProps[] = [
  {
    imgType: "WLT",
    title: "South Georgia Bank",
    description: "Client success story",
    tag: "Financial",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20South%20GA%20Bank%20Client%20Success%20Story.pdf",
  },
  {
    imgType: "WLT",
    title: "Banco de Brasil",
    description: "Client success story",
    tag: "Financial",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20Banco%20do%20Brasil%20Americas%20Client%20Success%20Story.pdf",
  },
  {
    imgType: "WLT",
    title: "FWCCU",
    description: "Client success story",
    tag: "Financial",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20FWCCU%20Client%20Success%20Story.pdf",
  },
];

const FINANCIAL_FEATURES_DATA = [
  "SCADA & ICS Vulnerability Asessments",
  "Disaster Recovery Planning",
  "Social Engineering",
  "Security Compliances, Policy & Procedure Updates",
  "Industrial Control & IoT Services Security Compliances",
  "Risk Management",
  "24x7x365 Managed Security Services & SEIM",
  "Employee Security Awareness Training",
];

const FinancialCard = () => {
  return (
    <ContentContainer>
      <div className="py-5">
        <div className="flex flex-col gap-3">
          <Image src={financialImg} alt="" className="w-full" />
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              InfoSight provides solutions for{" "}
              <span className="font-semibold">financial industries</span> to
              improve overall{" "}
              <span className="font-semibold">
                compliance, security and financial infrastructure.
              </span>
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              InfoSight provides{" "}
              <span className="font-semibold">
                24x7x365 Managed Security and Advisory Services
              </span>{" "}
              that test and monitor your network&apos;s infrastructure; keeping
              you <span className="font-semibold">secure</span> from any
              breaches that could occur.
            </p>
          </div>
        </div>
        <div className="py-5 lg:py-10">
          <h1 className="lg:text-lg text-[#222222] font-semibold">
            Client&apos;s Success Stories
          </h1>
          <p className="text-gray-900 text-sm lg:text-base py-1">
            Check out some of our Financial Client Success Stories for real life
            examples on how InfoSight provides solutions for maximum financial
            security.
          </p>
          <Cards cardsData={FINANCIAL_CARDS_DATA} conatinerClass="mt-5" />
        </div>
      </div>
      {/* <IndFinancialPr/> */}
      <Features
        data={FINANCIAL_FEATURES_DATA}
        title="For Financial Industry We Provide"
      />
    </ContentContainer>
  );
};

export default FinancialCard;
