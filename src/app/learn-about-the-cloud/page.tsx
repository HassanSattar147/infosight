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
      "Tracking the effectiveness of employee security awareness training can be difficult without an LMS. The fact is it's a necessary requirement for most organizations whether for regulatory compliance or to meet cyber insurance requirements.  Additionally, with AI-enabled social engineering is creating deep fakes so good they are nearly impossible to spot! These threats are using social media to launch sophisticated phishing attacks - so, it's not a matter of if, but when an employee clicks!",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "With our LearnCloud platform your employees have 24x7 access to your training portal and courseware. The portal can be branded with your organization's logo and colors and become your very own training portal. You can assign courses and policies with tracking a full compliance reporting. ",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description: (
      <>
        <p className="py-2">
          InfoSight's LearnCloud LMS can become your portal and includes:
        </p>
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
      heroTitle={"LearnCloud Learning Management System"}
      path={`Home / Services & Solutions / Training & Education / Learn Cloud LMS`}
      overviewDescription={
        <p className="text-[#444444]">
          InfoSight's LearnCloud Learning Management System (LMS) is a learning
          platform that allows you to deliver training content to students and
          track their progress. Additionally, with the online policy module,
          employees can be digitally attest to company policies, handbooks, etc.
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/LearnCloud-Course-Catalog-InfoSight.pdf`}
      downloadLinkLabel="View Course Catalog"
      data={CLOUDMS_DATA}
      dataLabel={"CLOUDMS_DATA"}
      featuresData={CLOUD_FEATURES_DATA}
      featureTitle={"Key Features"}
    />
  );
};

export default page;
