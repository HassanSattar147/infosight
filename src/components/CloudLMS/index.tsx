"use client";
import React from "react";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import CloudLMSHero from "./Sub/CloudLMSHero";
import CloudLMSFeatures from "./Sub/CloudLMSFeatures";
import PageLayout from "../PageLayout";
import Link from "next/link";

const CLOUDMS_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Today all organizations across every industry face the risks of cybercriminals and breached networks. If your staff can't recognize a scam, they won't be able to take the right defensive actions against it. Wrong or no action can lead to breaches and fraud which could leave your company open to a costly resolution and loss of data.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "With our LearnCloud platform your organization will have 24x7 access to your training portal and be provided with training courseware and mentoring services depending on the subscription purchases. Our experts provide your administrators with special training so you get the full scope of LearnCloud and how it can be used from an admin standpoint as well as from an employee standpoint.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description: (
      <>
        <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
          InfoSight&apos;s LearnCloud is intended to educate employees on
          important areas of security and awareness initiatives to prevent
          fraud. Some courses are designed to meet regulatory requirements,
          statutory directives, and security best practices under which the
          organization operates while others can check on their cybersecurity
          knowledge.
        </p>
        <p className="py-2">Our Subscription services offer:</p>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">
            A Client Branded Portal
          </span>
        </div>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">
            Current News Features
          </span>
        </div>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">
            Online Document Library Modules
          </span>
        </div>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">
            Reporting & Administration Modules
          </span>
        </div>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">
            Policy Digital Signature & Tracking Modules
          </span>
        </div>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">
            Messaging Systems for Courses & Compliance Reminders
          </span>
        </div>
        <div className="px-1 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-600">
            Certificates of Completion
          </span>
        </div>
      </>
    ),
  },
];

const CloudLMS = () => {
  React.useEffect(() => {
    document.title = "Learn Cloud LMS | InfoSight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <CloudLMSHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Training & Education / Learn Cloud LMS
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" text-justify text-[#444444]">
              InfoSight offers our specialized LearnCloud Learning Management
              System, a multi-faceted education offering designed specifically
              for customers in regulated industries. LearnCloud includes a
              company-branded training portal and access to a large course
              catalog.
            </p>
            <div className="flex gap-5 flex-col lg:flex-row lg:items-center lg:w-8/12 cursor-pointer">
              <Link
                href={
                  "https://www.infosightinc.com/pdf/LearnCloud-Course-Catalog-InfoSight.pdf"
                }
                target="_blank"
              >
                <div className="flex gap-5 items-center">
                  <Image src={documentIcon} alt="" />
                  <p className=" text-[#8C340D] font-semibold">
                    View Course Catalog
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        {CLOUDMS_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"CLOUDMS_DATA__" + i}
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
      <CloudLMSFeatures />
    </PageLayout>
  );
};

export default CloudLMS;
