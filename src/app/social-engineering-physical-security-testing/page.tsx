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
      "In today's war against cybercrime, people have become your new perimeter defense. There is no need to work hard to get through layers of security safeguards if you can fool an employee into giving you, their keys! And today AI is creating deep fakes so good they are nearly impossible to spot! So, it's not a matter of if, but when an employee clicks… ",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "Leveraging Ai-powered tools, we conduct testing in a real-world scenario. Our goal is to measure your employee's ability to detect and alert to a phishing attack, whether its via email, SMS or voice prompts.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "Our reports are actionable and give you the data you need to target security awareness training. We also provide recommendations just training to ensure your social defense efforts are multi-channel.",
  },
];

const SE_FEATURES_DATA = [
  "Email Phishing",
  "FTelephone Impersonation",
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
