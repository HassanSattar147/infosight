"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const SOCIAL_ENGG_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "InfoSight's Penetration Testing services reduce the risk of a successful attacks before they occur. With over two decades of experience in security, compliance and risk management, our experienced security assessors identify security issues beyond the capability of automated tools and assessments/tests.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description: "Leveraging AI-powered tools",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "Our reports are actionable and give you the data you need to target security awareness training. We also provide recommendations beyond just training to ensure your social defense efforts are multi-channel.",
  },
];

const SE_FEATURES_DATA = [
  "Email Phishing",
  "Telephone Impersonation",
  "Trojan & Virus Testing",
  "Onsite Impersonation",
  "Website Subversion",
  "Camera Placement Testing",
  "Key Control Testing",
  "Clean Desktop Testing",
  "Suspicious Activity Testing",
  "Physical Penetration Testing",
  "Dumpster Diving & Shred Testing",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Social Engineering Testing | InfoSight"
      heroImg={heroImg}
      heroTitle={"Social Engineering Services"}
      path={`Home / Services & Solutions / Advisory Services / Security / Social
      Engineering & Physical Security Testing`}
      overviewDescription={
        <p className="text-[#444444]">
          InfoSight&apos;s Penetration Testing services reduce the risk of a
          successful attacks before they occur. With over two decades of
          experience in security, compliance and risk management, our experts
          work as ethical hackers to identify security issues beyond the
          capability of automated tools and assessments/tests. As cyberattacks
          continue to rise everyday it is important to perform penetration tests
          regularly.
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/InfoSight-Social%20Engineering-2.pdf`}
      data={SOCIAL_ENGG_DATA}
      dataLabel={"SOCIAL_ENGG_DATA"}
      featuresData={SE_FEATURES_DATA}
      featureTitle={"Key Security Tests"}
    />
  );
};

export default page;
