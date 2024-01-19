"use client";
import React from "react";
import NavBar from "../Elements/NavBar";

const SecurityService = () => {
  React.useEffect(() => {
    document.title = "Security as a Service | InfoSight";
  }, []);

  return (
    <div>
      <NavBar />
      <iframe
        src="https://www.mitigatorvm.com/"
        width={"100%"}
        style={{
          height: "calc(100vh - 80px)",
        }}
      ></iframe>
    </div>
  );
};

export default SecurityService;

/* 

"use client";
import React from "react";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import SecurityServiceFeatures from "./Sub/SecurityServiceFeatures";
import SecurityServiceHero from "./Sub/SecurityServiceHero";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import Link from "next/link";
import PageLayout from "../PageLayout";

const SECURITY_SERVICES_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "In today's cybersecurity environment staffing for quality experts is a constant challenge due to sheer demand. Additionally, sourcing quality tools that are implemented to full feature capacity and keeping them that way requires a large and constant effort. And it's a 24x7x365 job too! Security as a service (SECaaS) allows you to outsource these challenging tasks around the clock to ensure your organizations cybersecurity and incident response plan is as effective as possible against cyberattack and systems compromise.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      " With security as a service (SECaaS), we implement a variety of services and solutions to defend your network and respond to potential incidents 24x7. We also put into place a vulnerability management program that matches your operational risk level. InfoSight's SECaaS offering simplifies your overall cybersecurity effort into an affordable subscription-based “pay as you go” model. It reduces the challenges associated with hiring and retaining cybersecurity experts and managing a 24x7 internal team saving your organization time and money!",
  },
];

const SecurityService = () => {
  React.useEffect(() => {
    document.title = "Security as a Service | InfoSight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <SecurityServiceHero />
      <p className="p-5 lg:px-20">Home / Services & Solutions / SECaaS</p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-60 justify-between">
            <p >
              InfoSight&apos;s Security as a Service (SECaaS) detects cyber
              threats quickly and simplifies incident response 24x7x365. Our
              SECaaS offering streamlines your cybersecurity defenses into one
              affordable subscription-based model.
            </p>
            <Link
              href="https://www.infosightinc.com/pdf/InfoSight-Security-as-a-Service-SECaaS.pdf"
              target="_blank"
              className="lg:w-5/12"
            >
              <div className="flex gap-5 items-center cursor-pointer">
                <Image src={documentIcon} alt="" />
                <p className=" text-[#8C340D] font-semibold">
                  Download Overview
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        {SECURITY_SERVICES_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"SECURITY_SERVICES_DATA__" + i}
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
      <SecurityServiceFeatures />
    </PageLayout>
  );
};

export default SecurityService;

*/
