import React from "react";
import energyImg from "../../../../public/industries/industries-water-img.png";
import { Features } from "@/components/Elements/ServicePageLayout";
import IndustryCard from "./IndustryCard";
import ContentContainer from "@/components/Elements/ContentContainer";

const WATER_FEATURES_DATA = [
  "SCADA & ICS Vulnerability Asessments",
  "Disaster Recovery Planning",
  "Social Engineering",
  "Security Compliances, Policy & Procedure Updates",
  "Industrial Control & IoT Services Security Compliances",
  "Risk Management",
  "24x7x365 Managed Security Services & SEIM",
  "Employee Security Awareness Training",
];

const description = `We understand that being part of our Nation's Critical Infrastructure, your networks must be up and running 24x7x365. However, the fact is, both geopolitical dangers and for-profit cybercrime are increasing, so it's not matter of “if” you'll be under attack, but “when”. Being Cyberresllient is the key to defending attacks because the availability of systems isn't impacted, and collateral damage is minimized. The AWIA was a good start, however a more comprehensive strategy is needed to make your OT & IT Networks secure. Let us show you how…
`;

const Water = () => {
  return (
    <>
      <ContentContainer>
        <h3 className="py-5 text-2xl lg:text-4xl font-semibold">
          Our solutions flow for Water & Wastewater!
        </h3>
      </ContentContainer>
      <IndustryCard img={energyImg} description={description} />
      <Features data={WATER_FEATURES_DATA} title="We Provide" />
    </>
  );
};

export default Water;
