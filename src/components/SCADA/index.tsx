"use client";
import React from "react";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import SCADAFeatures from "./Sub/SCADAFeatures";
import SCADAHero from "./Sub/SCADAHero";
import PageLayout from "../PageLayout";
import Link from "next/link";

const SCADA_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Today all organizations face the risk of cyberattacks. Being prepared prior to an attack is critical to minimize impact and quickly recover. When unprepared, hackers are nearly 100% successful. By regularly testing systems and controls an attacker's success rate plumets! This is where we come in.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's experienced engineers test your network manually to identify the extent your system could currently be compromised by a real-life attacker. Our SCADA ICS risk and vulnerability assessments can be used to test your security policy compliance, the effectiveness of your employee security awareness training and your organization's ability to identify and respond to security incidents. InfoSight provides remediation reports going in-depth on steps to take your overall security to the next level. Our team can act as an extension of your team to assist in the remediation process to ensure cybersecurity right away.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "InfoSight's security experts conduct real-world attacks to determine your security weaknesses. Our extensive knowledge of the most current attack vectors, along with our expertise on network types including on-premise Data Centers, Cloud or Hybrid environments will provide the assurance and confidence you need. Throughout the process, our team will work closely with your company's information security and technical teams to provide the most concise view your overall security posture and to provide technical recommendations for dealing with risks appropriately.",
  },
];

const SocialEngineering = () => {
  React.useEffect(() => {
    document.title = "SCADA ICS Risk Assessments - InfoSight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <SCADAHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Advisory Services / Security / SCADA/ICS
        Risk & Vulnerability Assessments
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" text-justify text-[#444444]">
              InfoSight performs SCADA/ICS Risk and Vulnerability Assessments to
              provide a complete evaluation and holistic view of your
              organization&apos;s security posture. Our skilled security
              assessor team conducts multi-disciplinary, multifaced reviews to
              your company&apos;s current OT ICS network and SCADA systems to
              identify vulnerabilities and control gaps that could be exploited
              by an attacker. As cyberattacks continue to rise everyday it is
              important to perform security assessments regularly.
            </p>
            <div className="flex gap-5 flex-col lg:flex-row lg:items-center lg:w-8/12 cursor-pointer">
              <Link
                href={
                  "https://www.infosightinc.com/pdf/InfoSight-SCADA-ICS-Risk-Vulnerability-Assessments.pdf"
                }
                target="_blank"
              >
                <div className="flex gap-5 items-center">
                  <Image src={documentIcon} alt="" />
                  <p className=" text-[#8C340D] font-semibold">
                    Download Overview
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        {SCADA_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"SCADA_DATA__" + i}
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
      <SCADAFeatures />
    </PageLayout>
  );
};

export default SocialEngineering;
