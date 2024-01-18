"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const MOBILE_API_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Today, Applications have become a tremendous target for cybercriminals because of their heightened value of stored information. Weaknesses and flaws in an application's source code or APIs can result in exploits compromising confidential data.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's API and Code Reviews, which can include Mobile, assist in identifying any underlying security issues with the application by providing a comprehensive review of Application code and API's. This will identify vulnerabilities and ensure your applications meet the latest security standards needed.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "Recommendations for remedial action will be made at the conclusion of the testing procedure, with the option of additional security testing following post-change. Following the reports, we suggest maintaining a change management log of all code changes and/or architectural changes. We can also provide follow up services upon further discussion with your IT team.",
  },
];

const MOBILE_FEATURES_DATA = [
  "SAuthentication",
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
      pageTitle="Code Review, API & Mobile Testing - Infosight"
      heroImg={heroImg}
      heroTitle={"Mobile, API & Code Review"}
      path={`Home / Services & Solutions / Advisory Services / Security / Mobile, API
      & Code Review`}
      overviewDescription={
        <p className=" text-[#444444] lg:w-8/12">
          InfoSight&apos;s Code Review, API & Mobile Testing provides your
          organization the assurance it needs to demonstrate your applications
          are secure with no exploitable vulnerabilities. Our comprehensive
          testing will provide both detailed technical remediation reporting for
          internal teams, and an executive-level report that can be shared to
          validate your applications&apos; security.
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/InfoSight%20-%20Mobile,%20API%20&%20Code%20Review.pdf`}
      videoLink="https://www.infosightinc.com/Videos/InfoSight-Mobile-APITesting.mp4"
      data={MOBILE_API_DATA}
      dataLabel={"MOBILE_API_DATA"}
      featuresData={MOBILE_FEATURES_DATA}
      featureTitle={"Key Security Features"}
    />
  );
};

export default page;
