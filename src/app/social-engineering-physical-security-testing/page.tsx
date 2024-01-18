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
      "Today all organizations across every industry face the risks of cybercriminals and breached networks. Regular penetration testing is crucial to ensure network security against sophisticated attackers. We understand it is difficult to find a trustworthy third party that understands your industry specific compliance as well as your overall security system. That's where we come in.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's experienced engineers test your network manually to identify the extent your system could currently be compromised by a real-life attacker. Our penetration testing service can be used to test your security policy compliance, the effectiveness of your employee security awareness training and your organization's ability to identify and respond to security incidents. InfoSight provides remediation reports going in-depth on steps to take your overall security to the next level. Our team can act as an extension of your team to assist in the remediation process to ensure cybersecurity right away.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "InfoSight's security experts conduct real-world attacks to determine your security weaknesses. Our extensive knowledge of the most current attack vectors, along with our expertise network types including on-premise Data Centers, Cloud or Hybrid environments will provide the assurance and confidence you need. This enables your team to concentrate on day-to-day business rather than on the discovery of potential network security risks.",
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
      featureTitle={"Key Security Features"}
    />
  );
};

export default page;
