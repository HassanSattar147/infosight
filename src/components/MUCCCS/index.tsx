"use client";
import React from "react";
import Image from "next/image";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import MUCCCSHero from "./Sub/MUCCCSHero";
import MUCCCSFeatuers from "./Sub/MUCCCSFeatures";
import PageLayout from "../PageLayout";

const NetworkCloud = () => {
  React.useEffect(() => {
    document.title = "Managed Communications | infoSight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <MUCCCSHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Managed Services / Managed Unified
        Communications, Collaboration & Connect Services
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" text-justify text-[#444444]">
              Today more than ever, workforces need to be agile enough to work
              from anywhere and still maintain the same level of operational
              efficiency and creativity. Unified communications and
              collaboration (UCC) facilitates the convergence of disparate
              voice, video, contact center, and collaboration service networks
              creating a virtual workforce. However, UCC technological
              complexities can be a drain on internal resources, which can be
              overrun with the sheer volume of operational support requirements.
              This ever-evolving virtual workforce initiative can be very
              difficult for many IT teams to deploy and manage.
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5">
          <div className="flex flex-col justify-between w-full">
            <h1 className="lg:text-2xl text-gray-900 font-semibold">
              Why are InfoSight&apos;s Unified Communications, Collaboration &
              Connect Services Important?
            </h1>
            <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
              InfoSight&apos;s Managed Unified Communications, Collaboration &
              Connect Support Services can provide the appropriate skillsets to
              achieve the ideal level of UCC acumen required for your specific
              environment. We employ a personalized approach to design the ideal
              Managed Unified Communications, Collaboration & Connect Services
              program for your business to achieve the best possible outcome.
            </p>
          </div>
          <Image src={infoImg1} alt="" className="w-full rounded-lg" />
        </div>
      </div>
      <MUCCCSFeatuers />
    </PageLayout>
  );
};

export default NetworkCloud;
