"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Security-Awareness-Training-Onlin-Banking-img.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const EMPLOYEE_SECURITY_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "If your staff can't recognize a scam, they won't be able to take the right defensive actions against it. Wrong or no action can lead to breaches and fraud which could leave your company open to a costly resolution and loss of data.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight solves the strenuous problems of employee security awareness training and ensures employees are well-equipped to defend against cyberattacks. Our experts help you build security awareness through our Learn Cloud LMS Platform and specialized courseware for your industry and environment.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description: (
      <>
        <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
          InfoSight&apos;s courseware catalog allows you pick from over 150
          courses to meet your goals and industry compliance requirements.
          InfoSight&apos;s courses are designed for all knowledge levels to
          train your staff on how to recognize suspicious activity and take
          preventative measures to help your organization avoid a costly breach
          or accidental data leak.
        </p>
        <p className="py-2">
          Some of our LearnCloud LMS systems courses include:
        </p>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">
            Cybersecurity Awareness Basics
          </span>
        </div>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">Email Security</span>
        </div>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">
            Defense Against Online Threats
          </span>
        </div>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">Password Security</span>
        </div>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">
            Avoiding Identify Theft
          </span>
        </div>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">
            Corporate Account Takeover
          </span>
        </div>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">
            Data Records & Retention
          </span>
        </div>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">Physical Security</span>
        </div>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">
            Essential of Social Engineering & more!
          </span>
        </div>
      </>
    ),
  },
];

const EMPLOYEE_SECURITY_FEATURES_DATA = [
  "Reduce Security Breaches",
  "Increase Knowledge Retention",
  "Close Awareness Gaps",
  "Increate Competitive Advantages",
  "Enhance Reputation",
  "Reduce Potential of Lawsuits, Fines & Mandatory Audits",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Employee Security Awareness Training | InfoSight"
      heroImg={heroImg}
      heroTitle={"Employee Security Awareness Training"}
      path={`Home / Services & Solutions / Training & Education / Employee Security
      Awareness Training`}
      overviewDescription={
        <p className="text-[#444444]">
          Cyberattacks can happen to anyone at any company which means
          employees, all the way up to senior management, remain a significant
          vulnerability within every organization. Cybersecurity awareness
          training can help your staff circumvent a security incident and save
          your organization thousands of dollars in related costs and fines.
        </p>
      }
      downloadLink={`contact`}
      data={EMPLOYEE_SECURITY_DATA}
      dataLabel={"EMPLOYEE_SECURITY_DATA"}
      featuresData={EMPLOYEE_SECURITY_FEATURES_DATA}
      featureTitle={"Key Benefits"}
    />
  );
};

export default page;
