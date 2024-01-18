"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const SCADA_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Today all organizations face the risk of cyberattacks. Being prepared prior to an attack is critical to minimize impact and quickly recover. When unprepared, hackers are nearly 100% successful. By regularly testing systems and controls an attacker's success rate plumets! This is where we come in.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's experienced engineers test your network manually to identify the extent your system could currently be compromised by a real-life attacker. Our SCADA ICS risk and vulnerability assessments can be used to test your security policy compliance, the effectiveness of your employee security awareness training and your organization's ability to identify and respond to security incidents. InfoSight provides remediation reports going in-depth on steps to take your overall security to the next level. Our team can act as an extension of your team to assist in the remediation process to ensure cybersecurity right away.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "InfoSight's security experts conduct real-world attacks to determine your security weaknesses. Our extensive knowledge of the most current attack vectors, along with our expertise on network types including on-premise Data Centers, Cloud or Hybrid environments will provide the assurance and confidence you need. Throughout the process, our team will work closely with your company's information security and technical teams to provide the most concise view your overall security posture and to provide technical recommendations for dealing with risks appropriately.",
  },
];

const SCADA_FEATURES_DATA = [
  "Reduce the risk of a successful attack before it occurs",
  "Identify security issues beyond the capability of automated tools",
  "Prioritize your risks and quickly take the right preventative measures",
  "Help meet compliance requirements before deadlines",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="SCADA ICS Risk Assessments - InfoSight"
      heroImg={heroImg}
      heroTitle={"SCADA/ICS Risk & Vulnerability Assessments"}
      path={`Home / Services & Solutions / Advisory Services / Security / SCADA/ICS
      Risk & Vulnerability Assessments`}
      overviewDescription={
        <p className="text-[#444444]">
          InfoSight performs SCADA/ICS Risk and Vulnerability Assessments to
          provide a complete evaluation and holistic view of your
          organization&apos;s security posture. Our skilled security assessor
          team conducts multi-disciplinary, multifaced reviews to your
          company&apos;s current OT ICS network and SCADA systems to identify
          vulnerabilities and control gaps that could be exploited by an
          attacker. As cyberattacks continue to rise everyday it is important to
          perform security assessments regularly.
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/InfoSight-SCADA-ICS-Risk-Vulnerability-Assessments.pdf`}
      data={SCADA_DATA}
      dataLabel={"SCADA_DATA"}
      featuresData={SCADA_FEATURES_DATA}
      featureTitle={"Key Benefits"}
    />
  );
};

export default page;
