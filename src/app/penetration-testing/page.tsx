"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const PENETRATION_DATA = [
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

const PENETRATION_FEATURES_DATA = [
  "Evaluate environments for real-world readiness",
  "Reduce the risk of a successful attack before it occurs",
  "Identify security issues beyond the capability of automated tools & assessments",
  "Exit interviews to provide both executive level and detailed reports",
  "Reduce the risk of a successful attack before it occurs",
  "Goes beyond typical penetration testing to involve mission-oriented Red Teaming operations",
  "Prioritize your risks and quickly take the right preventative measures",
  "Vulnerability Management",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Penetration Testing | InfoSight"
      heroImg={heroImg}
      heroTitle={"Penetration Testing"}
      path={`Home / Services & Solutions / Advisory Services / Security / Penetration
      Testing`}
      overviewDescription={
        <p className=" text-[#444444] lg:w-8/12">
          InfoSight&apos;s Penetration Testing services reduce the risk of a
          successful attacks before they occur. With over two decades of
          experience in security, compliance and risk management, our experts
          work as ethical hackers to identify security issues beyond the
          capability of automated tools and assessments/tests. As cyberattacks
          continue to rise everyday it is important to perform penetration tests
          regularly.
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/InfoSight-Penetration-Testing.pdf`}
      videoLink="https://www.infosightinc.com/Videos/infosight-video.mp4"
      data={PENETRATION_DATA}
      dataLabel={"PENETRATION_DATA"}
      featuresData={PENETRATION_FEATURES_DATA}
      featureTitle={"Key Benefits"}
    />
  );
};

export default page;
