"use client";
import React from "react";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import ManagedEDRHero from "./Sub/ManagedRDRHero";
import ManagedEDRFeatures from "./Sub/ManagedEDRFeatures";
import PageLayout from "../PageLayout";
import Link from "next/link";

const MANAGED_EDR_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Endpoints represent a significant security risk to all organization's no matter the industry. Relying solely on alerts to end users and overloaded network administrators is no longer the best and most effective method to protect against threats. Responding to endpoint-focused attacks has never been more challenging and is a 24x7 task that exhausts IT personnel.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's EDR Service monitors triages and remediates malware attacks and infections and significantly enhances visibility of attacks targeting endpoint devices. Our trusted professional's quickly coordinate remediation support and incident response solutions through patterns and repetition as well as new adjustments for immediate endpoint protection saving your organization time and money.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "Our goal is to work with your team to ensure 24x7 security, incident response and remediation to improve your overall security posture and minimize cyber risk. InfoSight's team of expert analysts alleviate resource constrained IT teams by providing the knowledge and EDR expertise needed to defend and respond against any attacks missed at the endpoint.",
  },
];

const ManagedEDR = () => {
  React.useEffect(() => {
    document.title = "Managed EDR | Infosight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <ManagedEDRHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Managed Services / Managed EDR
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" text-justify text-[#444444]">
              Early detection of attacks targeting endpoints is critical to
              protecting networks from all types of attacks including
              ransomware. However, without a team of security experts working
              24x7x365 to proactively hunt for threats, it&apos;s unlikely to achieve
              the outcome in threat prevention everyone is looking to achieve.
              <br />
              <br />
              InfoSight&apos;s Endpoint Detection & Response (EDR) provides you
              with real time incident response, enterprise remediation and
              threat containment 24x7x365. Coupled with our Security Operations
              Center (SOC), we serve as your own trusted cybersecurity team.
            </p>
            <div className="flex gap-5 flex-col lg:flex-row lg:items-center lg:w-8/12 cursor-pointer">
              <Link
                href={
                  "https://www.infosightinc.com/pdf/InfoSight-Endpoint-Detection-Response.pdf"
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
        {MANAGED_EDR_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"MANAGED_EDR_DATA__" + i}
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
      <ManagedEDRFeatures />
    </PageLayout>
  );
};

export default ManagedEDR;
