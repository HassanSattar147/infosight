import Image from "next/image";
import React from "react";
import oilGasImg from "../../../../public/industries/industries-oil-gas-img.png";
import { CardProps } from "@/components/Elements/Card";
import Cards from "@/components/Elements/Cards";
import ContentContainer from "@/components/Elements/ContentContainer";
import { Features } from "@/components/Elements/ServicePageLayout";

const OIL_GAS_CARDS_DATA: CardProps[] = [
  {
    imgType: "FUEL",
    title: "Oil & Gas",
    description: "Client success story",
    tag: "Oil & Gas",
    link: "#",
  },
];

const OIL_GAS_FEATURES_DATA = [
  "SCADA & ICS Vulnerability Asessments",
  "Disaster Recovery Planning",
  "Social Engineering",
  "Security Compliances, Policy & Procedure Updates",
  "Industrial Control & IoT Services Security Compliances",
  "Risk Management",
  "24x7x365 Managed Security Services & SEIM",
  "Employee Security Awareness Training",
];

const OilGas = () => {
  return (
    <>
      <ContentContainer>
        <div className="py-5">
          <div className="flex flex-col gap-3">
            <Image src={oilGasImg} alt="" className="w-full" />
            <div className="flex items-start">
              <span className="pr-2">&bull;</span>
              <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
                With <span className="font-semibold">cyber attacks</span> on the
                rise, oil & gas companies need to have{" "}
                <span className="font-semibold">
                  layered security controls{" "}
                </span>
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
            <div className="flex items-start">
              <span className="pr-2">&bull;</span>
              <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
                No organization is immune to{" "}
                <span className="font-semibold">cyber attacks</span>, but a
                proactive strategy can make your{" "}
                <span className="font-semibold">
                  OT & IT networks more &apos;&apos;cyber-resilient&apos;&apos;
                </span>{" "}
                to attacks and bad actors.
              </p>
            </div>
            <div className="flex items-start">
              <span className="pr-2">&bull;</span>
              <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
                In the oil and gas industry, attacks leading to{" "}
                <span className="font-semibold">
                  Industrial Control Systems failure
                </span>{" "}
                can be catastrophic on multiple levels.
              </p>
            </div>
            <div className="flex items-start">
              <span className="pr-2">&bull;</span>
              <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
                InfoSight&apos;s{" "}
                <span className="font-semibold">
                  Vulnerability Assessment and 24x7x365 threat monitoring
                </span>{" "}
                can reduce the risk of a successful cyber attack. We can assist
                your organization by creating the most effective incident
                response and recover plans for your environment.
              </p>
            </div>
          </div>
          <div className=" py-5 lg:py-10">
            <h1 className="lg:text-lg text-[#222222] font-semibold">
              Client&apos;s Success Stories
            </h1>
            <p className="text-gray-900 text-sm lg:text-base py-1">
              Check out some of our Financial Client Success Stories for real
              life examples on how InfoSight provides solutions for maximum
              financial security.
            </p>
            <Cards cardsData={OIL_GAS_CARDS_DATA} conatinerClass="mt-5" />
          </div>
        </div>
      </ContentContainer>
      <Features
        data={OIL_GAS_FEATURES_DATA}
        title="For Oil & Gas Industry We Provide"
      />
    </>
  );
};

export default OilGas;
