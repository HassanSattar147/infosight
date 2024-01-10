"use client";
import React from "react";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import ManagedXDRHero from "./Sub/ManagedXDRHero";
import ManagedXDRFeatures from "./Sub/ManagedXDRFeatures";
import PageLayout from "../PageLayout";
import Link from "next/link";

const MANAGED_XDR_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Having many different types of devices and data sources to monitor can put your organization at higher risk for a security incident. It can be overwhelming to monitor, analyze and respond to thousands of alerts each day. The threat analysis is a full-time job within itself and InfoSight wants to make it easier on you.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's Managed XDR services, er take your data sources where our experts to monitor them from a “single pane of glass” 24x7x365. Additionally, Security Orchestration and Automation (SOAR) helps automate and speed up incident response and recovery in the instance of a breach. When data sources are normalized and no threats are apparent, our SOC analyst conduct threat hunting exercises to proactive look for threats.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      " You can be at ease 24x7x365 that InfoSight&apos;s Managed XDR services are at work even when you're not! Our Managed XDR can make response times quicker, smarter, more efficient, and more cost effective. Leveraging our XDR resources will allow you to experience better cybersecurity and act quickly on any threats that come your way!",
  },
];

const ManagedXDR = () => {
  React.useEffect(() => {
    document.title = "Managed XDR | Infosight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <ManagedXDRHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Managed Services / Managed XDR
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" text-justify text-[#444444]">
              InfoSight&apos;s Managed Extended Detection & Response (XDR)
              Services can detect and respond to incidents 24x7x365 regardless
              of the source. Most organizations find it difficult to find the
              right staff to monitor and manage their own detection and response
              systems 24x7x365. InfoSight&apos;s XDR services consolidates your
              on-premise, hybrid and/or Cloud environments into one cohesive
              overview to monitor and manage vulnerabilities.
              <br />
              <br />
              Securing information assets and sensitive data is a complex task
              that can only be achieved by understanding the threat environment
              and employing the right technologies, processes, training and
              people.
              <br />
              <br />
              <span className="font-semibold">
                That&apos;s where WE come in!
              </span>
            </p>
            <div className="flex gap-5 flex-col lg:flex-row lg:items-center lg:w-8/12 cursor-pointer">
              <Link
                href={
                  "https://www.infosightinc.com/pdf/InfoSight-Managed-Extended-Detection-Response.pdf"
                }
                target="_blank"
              >
                <div className="flex gap-5 items-center">
                  <Image src={documentIcon} alt="" />
                  <p className=" text-[#8C340D] font-semibold">
                    View Managed XDR Brief
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        {MANAGED_XDR_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"MANAGED_XDR_DATA__" + i}
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
      <ManagedXDRFeatures />
    </PageLayout>
  );
};

export default ManagedXDR;
