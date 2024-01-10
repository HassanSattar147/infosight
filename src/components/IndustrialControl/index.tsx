"use client";
import React from "react";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import videoIcon from "../../../public/homepage/video-icon.svg";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import IndustrialControlHero from "./Sub/IndustrialControlHero";
import IndustrialControlFeatures from "./Sub/IndustrialControlFeatures";
import PageLayout from "../PageLayout";

const INDUSTRIAL_CONTROL_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "To achieve the level of protection needed for critical IT and OT infrastructures, and to meet the AWIA requirements, security needs to grow from a collection of disparate technologies and practices to an effective business process. Securing information, systems and networks is a complex task that can be achieved by employing planning, common sense, understanding of business requirements and people aspects—as well as employing the right technologies.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight performs Industrial Control & OT Security Assessments to provide a complete evaluation and holistic view of your organization's security posture. Our skilled security assessor team conducts multi-disciplinary, multifaced reviews to your company's current OT ICS network, SCADA systems to identify vulnerabilities that could be exploited by a Cyber Attacker. Every assessment is different, and a unique approach is required based upon the system functionality and what security measures may already in place.",
  },
  {
    img: infoImg3,
    title: " The Outcome",
    description:
      "Throughout the process, our team will work closely with the company's information assurance and technical teams in order to provide the clearest picture available of the overall security posture of the organization. We provide both logistic and technical recommendations and concise recommendations for dealing with risks appropriately. Our Industrial Control & IoT Security Assessment services include an expansive group of technical tests that inspect the security controls of industrial installations, resources, utilities, materials, information and IoT applications that are essential to safeguarding it from unauthorized access, service interruption or damage.",
  },
];

const IndustrialControl = () => {
  React.useEffect(() => {
    document.title = "IoT Security Assessments";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <IndustrialControlHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Advisory Services / Security / Industrial
        Control & IoT Security Assessments
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" text-justify text-[#444444]">
              InfoSight&apos;s Vulnerability & Cybersecurity Assessments reduce
              the risk of successful attacks before they occur. With over two
              decades of experience in security, compliance and risk management,
              our experts work as ethical hackers to identify security issues
              beyond the capability of automated tools and assessments/tests. As
              cyberattacks continue to rise everyday it is important to perform
              penetration tests regularly.
            </p>
            <div className="flex gap-5 flex-col lg:flex-row lg:items-center lg:w-8/12 cursor-pointer">
              <div className="flex gap-5 items-center">
                <Image src={documentIcon} alt="" />
                <p className=" text-[#8C340D] font-semibold">
                  Download Overview
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <Image src={videoIcon} alt="" />
                <p className=" text-[#8C340D] font-semibold">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        {INDUSTRIAL_CONTROL_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"INDUSTRIAL_CONTROL_DATA__" + i}
              className={`py-5 lg:py-10 flex flex-col-reverse lg:flex-row justify-between gap-5 +
              ${i % 2 === 1 ? " lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              <Image src={img} alt="" className="w-full rounded-lg" />
              <div className="flex flex-col justify-between w-full">
                <h1 className="lg:text-2xl text-gray-900 font-semibold">
                  {title}
                </h1>
                <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <IndustrialControlFeatures />
    </PageLayout>
  );
};

export default IndustrialControl;
