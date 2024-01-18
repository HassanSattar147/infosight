"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import Image from "next/image";
import heroImg from "/public/audit/Audit-img.png";
import auditInfoImg1 from "/public/audit/Audit-info-img1.png";
import generalinfoImg1 from "/public/audit/IT-General-Control-Review-img1.png";
import generalinfoImg2 from "/public/audit/IT-General-Control-Review-img2.png";
import Link from "next/link";

const IT_GENERAL_CONTROL_DATA = [
  {
    img: generalinfoImg1,
    title: "What is an IT General Controls Review?",
    description:
      "ITGC are the basic controls that support an organization's IT infrastructure. ITGC are related to IT systems such as operating systems, databases and applications to make sure that they are working and operating properly. They abide by policies, procedures and compliances related to your specific industry.",
  },
  {
    img: generalinfoImg2,
    title: "How can InfoSight Help?",
    description:
      "InfoSight's goal is to provide management and assurance to assets and safeguard controls against lost and compromised data. Our experts work with your team to assist with IT Management, Information Security, BCP/DRP, outsourcing technology & more. Our team assists your company to continuously improve your security posture, making your organization aware of emerging security threats.",
  },
];

const IT_GC_FEATURES_DATA = [
  "Review risk reviews for control requirements",
  "Review management's response to issues raised at, or since the last exam",
  "Review past reports for outstanding issues or previous problems.",
  "Interview management pre-examination information requests to identify changes to the technology infrastructure or new products and services that might increase the institution's risk.",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="IT General Control Review | Infosight"
      heroImg={heroImg}
      heroTitle={"Audit & Assurance"}
      heroDescription="The compliance service ensures that a business adheres to external
      rules and internal controls."
      path={` Home / Advisory Services / Audit & Assurance / IT General Control Review`}
      overviewDescription={
        <>
          <h1 className="px-5 md:px-0 text-2xl lg:text-4xl font-semibold">
            IT General Control Review
          </h1>
          <div className="px-5 md:px-0">
            <p>
              InfoSight conducts General IT Controls Reviews (GITCR) to identify
              principle IT control policies and analyze the current condition of
              such policies to make necessary changes to ensure regulatory
              compliance. This review will also provide the foundation to assist
              your organization in aligning its control environment with
              industry standards and best practices. Overall, InfoSight&apos;s
              GITCR serves as a tool for managing risk levels as your company
              moves forward with future growth strategies.
            </p>
            <Image src={auditInfoImg1} alt="" className="w-full pt-3" />
          </div>
        </>
      }
      data={IT_GENERAL_CONTROL_DATA}
      dataLabel={"IT_GENERAL_CONTROL_DATA"}
      featuresData={IT_GC_FEATURES_DATA}
      featureTitle={"At InfoSight, Our experts:"}
      featuresDescription={
        <>
          <p className="text-white lg:text-xl px-5 md:px-0">
            <span className="text-[#EC6A30] hover:text-[#9e4c26] font-bold">
              <Link
                href="https://www.infosightinc.com/pdf/InfoSight-IT-General-Controls-Overview.pdf"
                target="_blank"
              >
                CLICK HERE
              </Link>
            </span>{" "}
            For more information on our objectives for IT Management,
            Outsourcing Technologies, Information Security and BCP/DRP.
          </p>
        </>
      }
    />
  );
};

export default page;
