"use client";
import React from "react";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import videoIcon from "../../../public/homepage/video-icon.svg";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import CyberSecurityyHero from "./Sub/CyberSecurityHero";
import CyberSecurityFeatures from "./Sub/CyberSecurityFeatures";
import Link from "next/link";
import PageLayout from "../PageLayout";
import VideoPopup from "../Elements/VideoPopup";

const CYBERSECURITY_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Today all organizations across every industry face the risks of cybercriminals and breached networks. Often times organizations lack the cybersecurity budget and internal expertise required to analyze all security events while doing day to day activities. We understand it is difficult to find a trustworthy third party that understands your industry specific compliance as well as your overall security system. That's where we come in.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's experienced engineers test your network manually to identify the extent your system could currently be compromised by a real-life attacker. Our vulnerability and security assessments can be used to test your security policy compliance, the effectiveness of your employee security awareness training and your organization's ability to identify and respond to security incidents. InfoSight provides remediation reports going in-depth on steps to take your overall security to the next level. Our team can act as an extension of your team to assist in the remediation process to ensure cybersecurity right away.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "InfoSight's security engineers conduct comprehensive vulnerability assessments with extensive knowledge of the most current attack vectors, no matter the network types which includes On-Premise Data Centers, Cloud or Hybrid environments. Following our security assessments, we will help you understand and prioritize the most critical threats on your network along with managing.",
  },
];

const CyberSecurity = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  React.useEffect(() => {
    document.title = "Vulnerability & CybersSecurity Solution | Infosight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <CyberSecurityyHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Advisory Services / Security /
        Vulnerability & CybersSecurity Assessments
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" text-[#444444]  lg:w-11/12">
              InfoSight&apos;s Vulnerability & Cybersecurity Assessments reduce
              the risk of successful attacks before they occur. With over two
              decades of experience in security, compliance and risk management,
              our experts work as ethical hackers to identify security issues
              beyond the capability of automated tools and assessments/tests. As
              cyberattacks continue to rise everyday it is important to perform
              penetration tests regularly.
            </p>
            <div className="flex gap-5 flex-col lg:flex-row lg:items-center lg:w-6/12 cursor-pointer">
              <Link
                href="https://www.infosightinc.com/pdf/InfoSight-Vulnerability-Cybersecurity-Assessments.pdf"
                target="_blank"
              >
                <div className="flex gap-5 items-center">
                  <Image src={documentIcon} alt="" />
                  <p className=" text-[#8C340D] font-semibold">
                    Download Overview
                  </p>
                </div>
              </Link>

              <div
                className="flex gap-5 items-center"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                <Image src={videoIcon} alt="" />
                <p className=" text-[#8C340D] font-semibold">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        {CYBERSECURITY_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"CYBERSECURITY_DATA__" + i}
              className={`py-5 lg:py-10 flex flex-col-reverse lg:flex-row justify-between gap-5 +
              ${i % 2 === 1 ? " lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              <Image src={img} alt="" className="w-full rounded-lg" />
              <div className="flex flex-col justify-between w-full">
                <h1 className="lg:text-2xl text-gray-900 font-semibold">
                  {title}
                </h1>
                <p className="text-gray-900 text-sm lg:text-base py-1">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <CyberSecurityFeatures />
      <VideoPopup
        isModalOpen={isModalOpen}
        setModalOpen={setIsModalOpen}
        videoLink="https://www.infosightinc.com/Videos/infosight-video.mp4"
      />
    </PageLayout>
  );
};

export default CyberSecurity;
