import Image from "next/image";
import React from "react";
import serviceIcon1 from "../../../../public/homepage/service-icon1.svg";
import serviceIcon2 from "../../../../public/homepage/service-icon2.svg";
import serviceIcon3 from "../../../../public/homepage/service-icon3.svg";
import serviceIcon4 from "../../../../public/homepage/service-icon4.svg";
import serviceIcon5 from "../../../../public/homepage/service-icon5.svg";
import serviceIcon6 from "../../../../public/homepage/service-icon6.svg";
import Link from "next/link";
import ContentContainer from "@/components/Elements/ContentContainer";

const WEPROVIDE_DATA = [
  {
    img: serviceIcon1,
    title: "Managed Network & Cloud Support Services",
    link: "managed-network-support-services",
  },
  {
    img: serviceIcon2,
    title: "Penetration Testing Services",
    link: "penetration-testing",
  },
  {
    img: serviceIcon3,
    title: "Managed Security Services",
    link: "SECaaS",
  },
  {
    img: serviceIcon4,
    title: "BCP/DR Planning",
    link: "business-continuity",
  },
  {
    img: serviceIcon5,
    title: "Managed EDR",
    link: "managed-EDR",
  },
  {
    img: serviceIcon6,
    title: "Industrial Control & IoT Assessments",
    link: "industrial-control-IoT-security-assessments",
  },
];

const WeProvide = () => {
  return (
    <ContentContainer isBgPrimary>
      <div className="py-5 lg:py-20">
        <h2 className="text-2xl text-white lg:text-4xl font-semibold">
          We Provide
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10 mt-8">
          {WEPROVIDE_DATA.map(({ img, title, link }, i) => {
            return (
              <Link
                href={link}
                key={title + i}
                className="flex flex-col gap-4 px-8 py-5 bg-white rounded-md hover:bg-gray-200"
              >
                <Image src={img} alt="" className="w-14" />
                <h3 className="mt-2 font-semibold">{title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </ContentContainer>
  );
};

export default WeProvide;
