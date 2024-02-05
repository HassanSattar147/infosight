"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";

const MOBILE_API_DATA = [
  {
    title: "The Challenge",
    description:
      "Applications have become a prime target for cybercriminals because of the data stored within them. Weaknesses and flaws in an application's source code or APIs can result in exploitation compromising confidential data. AI poses a growing threat to application security where automation can play a role allowing bad actors to attack at velocity.",
  },
  {
    title: "How We Solve It",
    description: (
      <>
        <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
          We&apos;ll assess your M365 environment and provide security
          recommendations for:
        </p>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">
            Authentication, Access, and Identity Management
          </span>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">Auditing & Logs</span>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">
            Email Security and Content Management
          </span>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">
            Application Permissions
          </span>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">
            Data Storage Management
          </span>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">
            Mobile Device Management
          </span>
        </div>
      </>
    ),
  },
  {
    title: "The Outcome",
    description: (
      <>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">
            Monthly or one-time assessment Microsoft Cloud environment scan and
            risk report.
          </span>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">
            Monthly or one-time assessment Microsoft Cloud management plan to
            mitigate any discovered risks.
          </span>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">
            Audit trail report documenting all changes to the environment and
            who made them.
          </span>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">
            Microsoft Secure Score trend report that compares your business
            security against benchmarks.
          </span>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">
            Optional ongoing analysis of cloud environment structure,
            performance and security.
          </span>
        </div>
        <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
          From data protection and cybersecurity challenges to business
          continuity and cost control, understanding your M365 cloud environment
          is key to your organization achieving its business goals.
        </p>
      </>
    ),
  },
];

const MOBILE_FEATURES_DATA = [
  "Authentication",
  "Authorization",
  "Session management",
  "Data validation",
  "Error handling",
  "Logging",
  "Encryption",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="M365 Security Assessment - Infosight"
      heroImg={heroImg}
      heroTitle={"M365 Security Assessment"}
      path={`Home / Services & Solutions / Advisory Services / Security / M365 Security Assessment`}
      overviewDescription={
        <p className=" text-[#444444] lg:w-10/12">
          Microsoft 365 (M365) is hands down the most common set of cloud-based
          business applications used by most organizations, and this makes it a
          primary target for attackers. M365 security presents several
          challenges that organizations need to address to protect their data,
          because although cloud providers have robust security measures,
          misconfigurations or weak access controls can be exploited by bad
          actors. M365 security is a shared responsibility model with default
          configurations set in favor of open, collaborative working, but secure
          configuration remains the customer&apos;s responsibility.
        </p>
      }
      downloadLink={`/pdfs/InfoSight  Mobile, API & Code Review.pdf`}
      videoLink="https://www.infosightinc.com/Videos/InfoSight-Mobile-APITesting.mp4"
      data={MOBILE_API_DATA}
      dataLabel={"MOBILE_API_DATA"}
      featuresData={MOBILE_FEATURES_DATA}
      featureTitle={"Key Security Tests"}
    />
  );
};

export default page;
