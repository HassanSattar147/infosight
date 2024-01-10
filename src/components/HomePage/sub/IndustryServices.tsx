import Image from "next/image";
import React from "react";
import servicesImg1 from "../../../../public/homepage/service-img1.png";
import servicesImg2 from "../../../../public/homepage/service-img2.png";
import servicesImg3 from "../../../../public/homepage/service-img3.png";
import servicesImg4 from "../../../../public/homepage/service-img4.png";
import servicesImg5 from "../../../../public/homepage/service-img5.png";
import servicesImg6 from "../../../../public/homepage/service-img6.png";
import chevronRightIcon from "../../../../public/homepage/right-chevron-icon.svg";

const INDUSTRY_SERVICE_DATA = [
  {
    img: servicesImg1,
    title: "Government",
    description:
      "InfoSight understands that Government agencies are increasingly targeted every day. We can help you protect sensitive data.",
  },
  {
    img: servicesImg2,
    title: "Financial",
    description:
      "InfoSight provides solutions for financial industries to improve overall compliance, security and financial infrastructure.",
  },
  {
    img: servicesImg3,
    title: "Energy/Electrical",
    description:
      "Cyberattacks leading to ICS failures can be catastrophic. InfoSight can provide solutions to reduce the risk of a successful attack.",
  },
  {
    img: servicesImg4,
    title: "Oil & Gas",
    description:
      "Protecting your SCADA & ICS are crucial to running your business. InfoSight can provide the security services you need.",
  },
  {
    img: servicesImg5,
    title: "Healthcare",
    description:
      "Our HIPAA compliant solutions can optimize how your networks perform & ensure patient information security.",
  },
  {
    img: servicesImg6,
    title: "Manufacturing & Indusstries",
    description:
      "InfoSight's SCADA strategies and services can reduce the risk of compromised data from your information control systems.",
  },
];

const IndustryServices = () => {
  return (
    <div className="bg-[#3B719F] p-5 lg:p-20">
      <h1 className="text-white text-2xl lg:text-4xl font-semibold">
        Services by Industry
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-5 lg:mt-10">
        <div className="bg-white rounded-xl">
          <Image src={servicesImg1} alt="" className="w-full" />
          <div className="p-6">
            <h1 className="text-xl text-[#2F5A7E] font-medium">Government</h1>
            <p className="text-gray-500 mt-2">
              InfoSight understands that Government agencies are increasingly
              targeted every day. We can help you protect sensitive data.
            </p>
            <button className="text-[#EC6A30] py-4 font-medium flex items-center gap-1">
              Learn More
              <span>
                <Image src={chevronRightIcon} alt="" className="w-5" />
              </span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl">
          <Image src={servicesImg2} alt="" className="w-full" />
          <div className="p-6">
            <h1 className="text-xl text-[#2F5A7E] font-medium">Financial</h1>
            <p className="text-gray-500 mt-2">
              InfoSight provides solutions for financial industries to improve
              overall compliance, security and financial infrastructure.
            </p>
            <button className="text-[#EC6A30] py-4 font-medium flex items-center gap-1">
              Learn More
              <span>
                <Image src={chevronRightIcon} alt="" className="w-5" />
              </span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl">
          <Image src={servicesImg3} alt="" className="w-full" />
          <div className="p-6">
            <h1 className="text-xl text-[#2F5A7E] font-medium">
              Energy/Electrical
            </h1>
            <p className="text-gray-500 mt-2">
              Cyberattacks leading to ICS failures can be catastrophic.
              InfoSight can provide solutions to reduce the risk of a successful
              attack.
            </p>
            <button className="text-[#EC6A30] py-4 font-medium flex items-center gap-1">
              Learn More
              <span>
                <Image src={chevronRightIcon} alt="" className="w-5" />
              </span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl">
          <Image src={servicesImg4} alt="" className="w-full" />
          <div className="p-6">
            <h1 className="text-xl text-[#2F5A7E] font-medium">Oil & Gas</h1>
            <p className="text-gray-500 mt-2">
              Protecting your SCADA & ICS are crucial to running your business.
              InfoSight can provide the security services you need.
            </p>
            <button className="text-[#EC6A30] py-4 font-medium flex items-center gap-1">
              Learn More
              <span>
                <Image src={chevronRightIcon} alt="" className="w-5" />
              </span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl">
          <Image src={servicesImg5} alt="" className="w-full" />
          <div className="p-6">
            <h1 className="text-xl text-[#2F5A7E] font-medium">Healthcare</h1>
            <p className="text-gray-500 mt-2">
              Our HIPAA compliant solutions can optimize how your networks
              perform & ensure patient information security.
            </p>
            <button className="text-[#EC6A30] py-4 font-medium flex items-center gap-1">
              Learn More
              <span>
                <Image src={chevronRightIcon} alt="" className="w-5" />
              </span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl">
          <Image src={servicesImg6} alt="" className="w-full" />
          <div className="p-6">
            <h1 className="text-xl text-[#2F5A7E] font-medium">
              Manufacturing & Indusstries
            </h1>
            <p className="text-gray-500 mt-2">
              InfoSight&apos;s SCADA strategies and services can reduce the risk
              of compromised data from your information control systems.
            </p>
            <button className="text-[#EC6A30] py-4 font-medium flex items-center gap-1">
              Learn More
              <span>
                <Image src={chevronRightIcon} alt="" className="w-5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryServices;
