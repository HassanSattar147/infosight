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
      "Our API Security Assessments assist in identifying underlying security issues with your application by providing a comprehensive review that meets the latest security best practice standards.",
  },
  {
    title: "The Outcome",
    description:
      "Actionable reporting and recommendations that enable your development team, or that of your partners', to secure APIs  better!",
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
      pageTitle="Code Review - Infosight"
      heroImg={heroImg}
      heroTitle={"Code Review"}
      path={`Home / Services & Solutions / Advisory Services / Security / Code Review`}
      overviewDescription={
        <p className=" text-[#444444] lg:w-full">
          APIs have become a prime target for bad actors because many
          applications are integrated, and utilize open-source code, so
          you&apos;re only as secure as the weakest link in your application
          supply chain. Weaknesses and flaws in an application&apos;s APIs can
          result in exploitation compromising confidential data. And with large
          amounts data being exchanged via APIs, it&apos;s no surprise they have
          become a large attack target, and it&apos;s gaining momentum.
        </p>
      }
      // downloadLink={`https://www.infosightinc.com/pdf/InfoSight%20-%20Mobile,%20API%20&%20Code%20Review.pdf`}
      // videoLink="https://www.infosightinc.com/Videos/InfoSight-Mobile-APITesting.mp4"
      data={MOBILE_API_DATA}
      dataLabel={"MOBILE_API_DATA"}
      featuresData={MOBILE_FEATURES_DATA}
      featureTitle={"Key Security Tests"}
    />
  );
};

export default page;
