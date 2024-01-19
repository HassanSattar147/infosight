import Image from "next/image";
import React from "react";
import healthImg from "../../../../public/industries/industries-healthcare-img.png";
import healthIcon from "../../../../public/industries/industries-healthcare-icon.svg";
import IndHealthProvide from "./IndHealthProvide";
import Card, { CardProps } from "@/components/Elements/Card";
import Cards from "@/components/Elements/Cards";
import ContentContainer from "@/components/Elements/ContentContainer";
import { Features } from "@/components/Elements/ServicePageLayout";

const HEALTH_CARDS_DATA: CardProps[] = [
  {
    imgType: "HLTH",
    title: "Health Hospital",
    description: "Client success story",
    tag: "Healthcare",
    link: "",
  },
];

const HEALTH_FEATURES_DATA = [
  "Proactive HIPAA compliant IT services networks",
  "Multi-layered HIPAA compliant cybersecurity framework",
  "Ensure customers follow HITECH regulatory standards",
  "Provide support on various EHR systems",
  "Perform HIPAA Risk & Security Assessments",
  "Cloud Solutions & Office 365",
  "24x7x365 Network & Security Monitoring",
];

const Healthcare = () => {
  return (
    <>
      <ContentContainer>
        <div className="py-5">
          <div className="flex flex-col gap-3">
            <Image src={healthImg} alt="" className="w-full" />
            <div className="flex items-start">
              <span className="pr-2">&bull;</span>
              <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
                Cyber attackers are smarter than ever and InfoSight understands{" "}
                <span className="font-semibold">
                  protecting patient information from data loss and theft
                </span>{" "}
                is the crucial in the healthcare industry.
              </p>
            </div>
            <div className="flex items-start">
              <span className="pr-2">&bull;</span>
              <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
                <span className="font-semibold">
                  Our HIPAA compliant, cybersecurity & compliance solutions{" "}
                </span>{" "}
                optimize how your network and mobile systems perform while
                ensuring patient information is safe and secure from the wrong
                hands.
              </p>
            </div>
          </div>
          <div className=" py-5 lg:py-10">
            <h1 className="lg:text-lg text-[#222222] font-semibold">
              Client&apos;s Success Stories
            </h1>
            <p className="text-gray-900 text-sm lg:text-base py-1">
              Check out some of our Healthcare&apos;s Client Success Stories for
              real life examples on how InfoSight provides solutions for maximum
              financial security.
            </p>
            <Cards cardsData={HEALTH_CARDS_DATA} conatinerClass="mt-5" />
          </div>
        </div>
      </ContentContainer>
      <Features
        data={HEALTH_FEATURES_DATA}
        title="For Healthcare Industry We Provide"
      />
    </>
  );
};

export default Healthcare;
