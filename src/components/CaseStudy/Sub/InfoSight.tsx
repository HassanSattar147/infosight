import Image from "next/image";
import React from "react";
import featuredIcon1 from "../../../../public/casestudy/Featured-icon-1.svg";
import featuredIcon2 from "../../../../public/casestudy/Featured-icon-2.svg";
import featuredIcon3 from "../../../../public/casestudy/Featured-icon-3.svg";
import featuredIcon4 from "../../../../public/casestudy/Featured-icon-4.svg";
import featuredIcon5 from "../../../../public/casestudy/Featured-icon-5.svg";
import featuredIcon6 from "../../../../public/casestudy/Featured-icon-6.svg";
import ContentContainer from "@/components/Elements/ContentContainer";

const WHYINFOSIGHT_DATA = [
  {
    img: featuredIcon1,
    description: "24x7x365 US-based SOC/NOC",
  },
  {
    img: featuredIcon2,
    description:
      "25+ years Regulatory Compliance experience (GLBA, PCI, HIPAA, NERC, AWIA, etc.)",
  },
  {
    img: featuredIcon3,
    description: "SOC 2 Certified",
  },
  {
    img: featuredIcon5,
    description:
      "Complete MSSP Services that include Monitoring, Real-Time Threat Analysis, Mitigation/Remediation, Alerting, Reporting and Device Management",
  },
  {
    img: featuredIcon5,
    description:
      "Offering comprehensive cybersecurity Awareness Training Solutions",
  },
  {
    img: featuredIcon6,
    description:
      "Managed Services for On-premise Data center, Cloud and Hybrid environments",
  },
  {
    img: featuredIcon4,
    description:
      "Flexible pricing models that can be 24x7, 8x5, OR off-peak 7pm to 7am only coverage",
  },
  {
    img: featuredIcon6,
    description: "MSP & MSSP Solutions for both IT & OT ICS environments",
  },
  {
    img: featuredIcon4,
    description: "Certified Experts (CISSP, CISA, CEH, OSCP, AWS, AWWA, etc.)",
  },
  {
    img: featuredIcon4,
    description:
      "Virtual ISO Programs that bridge the communication gap between IT and OT networks",
  },
];

const InfoSight = () => {
  return (
    <ContentContainer>
      <div className="py-5 md:py-10">
        <h2 className="text-2xl lg:text-4xl mb-5 font-semibold">
          Why InfoSight?
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:gap-10 mt-8">
          {WHYINFOSIGHT_DATA.map(({ img, description }, i) => {
            return (
              <div
                className="flex items-start flex-col gap-5 px-8 py-5 bg-[#E9F0F7] rounded-md shadow-md shadow-gray-300"
                key={"WHYINFOSIGHT_DATA__" + i}
              >
                <Image src={img} alt="" />
                <p className="text-[#3B719F] font-semibold">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </ContentContainer>
  );
};

export default InfoSight;
