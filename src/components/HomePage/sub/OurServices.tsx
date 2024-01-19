import React from "react";
import serviceIcon1 from "../../../../public/homepage/service-icon1.svg";
import serviceIcon2 from "../../../../public/homepage/service-icon2.svg";
import serviceIcon3 from "../../../../public/homepage/service-icon3.svg";
import serviceIcon4 from "../../../../public/homepage/service-icon4.svg";
import serviceIcon5 from "../../../../public/homepage/service-icon5.svg";
import serviceIcon6 from "../../../../public/homepage/service-icon6.svg";
import Image from "next/image";
import Link from "next/link";
import ContentContainer from "@/components/Elements/ContentContainer";

const OURSERVICES_DATA = [
  {
    img: serviceIcon1,
    title: "Managed Security Services",
    description:
      "InfoSight's Security Operations Center (SOC) leverages sound and repeatable processes to mitigate threats in a systematic approach delivering superior outcomes with no alert fatigue ever.",
    link: "SECaaS",
  },
  {
    img: serviceIcon2,
    title: "Penetration Testing Services",
    description:
      "Our Penetration testing goes beyond basic Network testing to include, Applications, APIs, Mobile, Web Applications, SCADA systems and more.",
    link: "penetration-testing",
  },
  {
    img: serviceIcon3,
    title: "Managed Network & Cloud Support Services",
    description:
      "InfoSight's Managed Network and Support Services provide the appropriate skillsets to achieve the ideal level of network management required for your specific environment.",
    link: "managed-network-support-services",
  },
  {
    img: serviceIcon4,
    title: "BCP/DR Planning",
    description:
      "InfoSight's Certified Business Continuity Planners (CBCP's) utilize years of experience in Business Continuity Planning and Disaster Recovery experience to develop a specific plan for your organization.",
    link: "business-continuity",
  },
  {
    img: serviceIcon5,
    title: "Managed EDR",
    description:
      "InfoSight's Endpoint Detection & Response (EDR) provides you with real time incident response, enterprise remediation and threat containment 24x7x365. Coupled with our Security Operations Center (SOC).",
    link: "managed-EDR",
  },
  {
    img: serviceIcon6,
    title: "Industrial Control & IoT Assessments",
    description:
      "InfoSight performs Industrial Control & OT Security Assessments to provide a complete evaluation and holistic view of your organization's security posture.",
    link: "industrial-control-IoT-security-assessments",
  },
];

const OurServices = ({
  heading = "What We also Provide",
}: {
  heading?: string;
}) => {
  return (
    <ContentContainer>
      <div className="py-5 lg:py-20">
        <h1 className="text-2xl lg:text-4xl font-semibold">{heading}</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-8">
          {OURSERVICES_DATA.map(({ img, title, description, link }, i) => {
            return (
              <Link key={title + i} href={link}>
                <div className="flex items-start gap-4 p-3 border border-gray-300 rounded-md hover:bg-gray-50 h-[100%]">
                  <Image src={img} alt="" className="w-10 lg:w-20" />
                  <div>
                    <h1 className="lg:text-xl mb-2 font-semibold">{title}</h1>
                    <p className="text-sm lg:text-base">{description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </ContentContainer>
  );
};

export default OurServices;
