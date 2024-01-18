"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Learn-Cloud-LMS-img.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

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

const CLOUD_FEATURES_DATA = [
  "Enforced Compliance",
  "One Centralized Location for Important Company Documents",
  "Quick, Efficient & Easy-to-Navigate Design",
  "Signature Tracking & Acquiring",
  " Tracking & Reporting for Trainings",
  "Flexible Packaging Options",
  "New & Up to Date Content",
  "Custom Dynamic Messages & Alerts",
  "Customer Notifications & Reminders",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Learn Cloud LMS | InfoSight"
      heroImg={heroImg}
      heroTitle={"Learn Cloud Learning Management System"}
      path={`Home / Services & Solutions / Training & Education / Learn Cloud LMS`}
      overviewDescription={
        <p className="text-[#444444]">
          InfoSight offers our specialized LearnCloud Learning Management
          System, a multi-faceted education offering designed specifically for
          customers in regulated industries. LearnCloud includes a
          company-branded training portal and access to a large course catalog.
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/LearnCloud-Course-Catalog-InfoSight.pdf`}
      data={CLOUDMS_DATA}
      dataLabel={"CLOUDMS_DATA"}
      featuresData={CLOUD_FEATURES_DATA}
      featureTitle={"Key Features"}
    />
  );
};

export default page;
