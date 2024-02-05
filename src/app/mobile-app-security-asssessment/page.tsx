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
    description:
      "InfoSight's API and Code Reviews, which can include Mobile operating systems, assist in identifying any underlying security issues with the application by providing a comprehensive review of Application code and API's. By leveraging AI-powered tools and decades of experience, our team ensures applications are hardened for today's threat landscape.",
  },
  {
    title: "The Outcome",
    description:
      "Our reporting is actionable! Recommendations for remedial action are made at the conclusion of testing, with the option of retesting post remediation.  Our personalized approach will help quantify your cyber risk, prioritize the most critical threats, and create a continuous threat exposure management roadmap.",
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
      pageTitle="Mobile App Security Assessment - Infosight"
      heroImg={heroImg}
      heroTitle={"Mobile App Security Assessment"}
      path={`Home / Services & Solutions / Advisory Services / Security / Mobile App Security Assessment`}
      overviewDescription={
        <p className=" text-[#444444] lg:w-full">
          InfoSight&apos;s Code Review, API & Mobile Testing provides your
          organization the assurance it needs to demonstrate your applications
          are secure with no exploitable vulnerabilities. Our comprehensive
          testing will provide both detailed technical remediation reporting for
          internal teams, and an executive-level report that can be shared to
          validate your applications&apos; security.
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
