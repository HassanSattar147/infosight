"use client";
import React from "react";
import Image from "next/image";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import NetworkCloudHero from "./Sub/NetworkCloudHero";
import NetworkCloudFeatures from "./Sub/NetworkCloudFeatures";
import PageLayout from "../PageLayout";

const NetworkCloud = () => {
  React.useEffect(() => {
    document.title = "Managed Network & Cloud Support | InfoSight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <NetworkCloudHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Managed Services / Managed Network & Cloud
        Support Services
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" text-justify text-[#444444]">
              Today&apos;s networks are mixed environments with a variety of
              traditional LAN/WAN, Wireless, data center, and cloud estates.
              Most environments are a heterogenous mix of many different vendor
              technology solutions with no single management platform. This adds
              great complexity to network management and requires a varied and
              wide skillset of IT personnel. As a result, many businesses have
              become overwhelmed with the task associated with managing and
              supporting these environments and miss both their operational and
              business objectives by not having the required resources to meet
              performance demands.
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5">
          <div className="flex flex-col justify-between w-full">
            <h1 className="lg:text-2xl text-gray-900 font-semibold">
              What are InfoSight&apos;s Managed Network and Cloud Support
              Services
            </h1>
            <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
              InfoSight&apos;s Managed Network and Support Services provide the
              appropriate skillsets to achieve the ideal level of network
              management required for your specific environment. We employ a
              personalized approach to design the perfect Network Management and
              Support program for your Business to achieve the best possible
              outcome.
            </p>
          </div>
          <Image src={infoImg1} alt="" className="w-full rounded-lg" />
        </div>
      </div>
      <NetworkCloudFeatures />
    </PageLayout>
  );
};

export default NetworkCloud;
