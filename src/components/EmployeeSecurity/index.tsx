"use client";
import React from "react";
import Image from "next/image";
import videoIcon from "../../../public/homepage/video-icon.svg";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import EmpSecurityHero from "./Sub/EmplSecurityHero";
import EmpSecurityFeatures from "./Sub/EmpSecurityFeatures";
import PageLayout from "../PageLayout";
import Link from "next/link";

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

const EmployeeSecurityAwareness = () => {
  React.useEffect(() => {
    document.title = "Employee Security Awareness Training | InfoSight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <EmpSecurityHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Training & Education / Employee Security
        Awareness Training
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" text-justify text-[#444444]">
              Cyberattacks can happen to anyone at any company which means
              employees, all the way up to senior management, remain a
              significant vulnerability within every organization. Cybersecurity
              awareness training can help your staff circumvent a security
              incident and save your organization thousands of dollars in
              related costs and fines.
            </p>
            <div className="flex gap-5 flex-col lg:flex-row lg:items-center lg:w-8/12 cursor-pointer">
              <Link href={"contact"}>
                <div className="flex gap-5 items-center">
                  <Image src={videoIcon} alt="" />
                  <p className=" text-[#8C340D] font-semibold">
                    Book a Demo Now
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        {EMPLOYEE_SECURITY_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"EMPLOYEE_SECURITY_DATA__" + i}
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
      <EmpSecurityFeatures />
    </PageLayout>
  );
};

export default EmployeeSecurityAwareness;
