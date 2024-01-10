import Image from "next/image";
import React from "react";
import featuredIcon1 from "../../../../public/casestudy/Featured-icon-1.svg";
import featuredIcon2 from "../../../../public/casestudy/Featured-icon-2.svg";
import featuredIcon3 from "../../../../public/casestudy/Featured-icon-3.svg";
import featuredIcon4 from "../../../../public/casestudy/Featured-icon-4.svg";
import featuredIcon5 from "../../../../public/casestudy/Featured-icon-5.svg";
import featuredIcon6 from "../../../../public/casestudy/Featured-icon-6.svg";

const WHYINFOSIGHT_DATA = [
  {
    img: featuredIcon1,
    title: "Us Based SOC/NOC",
    description:
      "Our service allows systems and their staff to secure and build businesses with ease due their trust in Certified SOC/NOC from the top level of this country.",
  },
  {
    img: featuredIcon2,
    title: "25+ Years Regulatory Compliance",
    description:
      "Our service allows systems and their staff to secure and build businesses with ease due to 25+ years of regulatory compliance experience.",
  },
  {
    img: featuredIcon3,
    title: "Certified SOC/NOC",
    description:
      "Our service allows systems and their staff to secure and build  businesses with ease due their trust in Certified SOC/NOC from the  top level of this country.",
  },
  {
    img: featuredIcon4,
    title: "MSSP Services",
    description:
      "Our service allows systems and their staff to secure and build businesses with ease due their trust in MSSP services from the top level of this country.",
  },
  {
    img: featuredIcon5,
    title: "Cybersecurity Trainings",
    description:
      " Our service allows systems and their staff to secure and build businesses with ease as we provide cybersecurity trainings to the management and resources.",
  },
  {
    img: featuredIcon6,
    title: "Flexible Pricing Models",
    description:
      "Our service allows systems and their staff to secure and build businesses with ease due flexible pricing models.",
  },
];

const InfoSight = () => {
  return (
    <div className="px-5 py-5 lg:py-10 lg:px-20">
      <h1 className="text-2xl lg:text-4xl mb-5 font-semibold">
        Why InfoSight?
      </h1>
      <p>
        Powerful product which helps you grow engage, and retain make more
        clients. Trusted by over 4,000+ Clients.
      </p>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-10 mt-8">
        {WHYINFOSIGHT_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              className="flex items-start flex-col gap-2 px-8 py-5 bg-[#E9F0F7] rounded-md shadow-md shadow-gray-300"
              key={"WHYINFOSIGHT_DATA__" + i}
            >
              <Image src={img} alt=""  />
              <h1 className=" lg:text-xl mt-5 font-semibold text-[#274A68]">
                {title}
              </h1>
              <p className="text-[#3B719F] text-sm lg:text-base">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoSight;
