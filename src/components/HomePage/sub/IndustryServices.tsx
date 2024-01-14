import Image from "next/image";
import React from "react";
import servicesImg1 from "../../../../public/homepage/service-img1.png";
import servicesImg2 from "../../../../public/homepage/service-img2.png";
import servicesImg3 from "../../../../public/homepage/service-img3.png";
import servicesImg4 from "../../../../public/homepage/service-img4.png";
import servicesImg5 from "../../../../public/homepage/service-img5.png";
import servicesImg6 from "../../../../public/homepage/service-img6.png";
import chevronRightIcon from "../../../../public/homepage/right-chevron-icon.svg";
import Link from "next/link";
import ContentContainer from "@/components/Elements/ContentContainer";

const INDUSTRY_SERVICE_DATA = [
  {
    img: servicesImg1,
    title: "Government",
    description:
      "InfoSight understands that Government agencies are increasingly targeted every day. We can help you protect sensitive data.",
    link: "/industries?s=2",
  },
  {
    img: servicesImg2,
    title: "Financial",
    description:
      "InfoSight provides solutions for financial industries to improve overall compliance, security and financial infrastructure.",
    link: "/industries?s=0",
  },
  {
    img: servicesImg3,
    title: "Energy/Electrical",
    description:
      "Cyberattacks leading to ICS failures can be catastrophic. InfoSight can provide solutions to reduce the risk of a successful attack.",
    link: "/industries?s=1",
  },
  {
    img: servicesImg4,
    title: "Oil & Gas",
    description:
      "Protecting your SCADA & ICS are crucial to running your business. InfoSight can provide the security services you need.",
    link: "/industries?s=3",
  },
  {
    img: servicesImg5,
    title: "Healthcare",
    description:
      "Our HIPAA compliant solutions can optimize how your networks perform & ensure patient information security.",
    link: "/industries?s=7",
  },
  {
    img: servicesImg6,
    title: "Manufacturing & Indusstries",
    description:
      "InfoSight's SCADA strategies and services can reduce the risk of compromised data from your information control systems.",
    link: "/industries?s=4",
  },
];

const IndustryServices = () => {
  return (
    <ContentContainer isBgPrimary>
      <div className="bg-[#3B719F] py-5 px-5 md:px-0 lg:py-20">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Services by Industry
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-5 lg:mt-10">
          {INDUSTRY_SERVICE_DATA.map(({ img, title, description, link }, i) => {
            return (
              <div
                className="bg-white rounded-xl"
                key={"INDUSTRY_SERVICE_DATA__" + i}
              >
                <Image src={img} alt="" className="w-full" />
                <div className="p-6">
                  <h1 className="text-xl text-[#2F5A7E] font-medium">
                    {title}
                  </h1>
                  <p className="text-gray-500 mt-2">{description}</p>
                  <Link href={link}>
                    <button className="text-[#EC6A30] py-4 font-medium flex items-center gap-1">
                      Learn More
                      <span>
                        <Image src={chevronRightIcon} alt="" className="w-5" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ContentContainer>
  );
};

export default IndustryServices;
