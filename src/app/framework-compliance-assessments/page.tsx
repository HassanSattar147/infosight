"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";

const FRAMEWORK_DATA = [
  {
    title: "The Challenge",
    description:
      "How does an organization determine if they are complying with the framework they choose to follow or are required to follow?  Most just go with having internal staff making that determination and end up suffering the consequences of a bad audit, or even worse, a cyber incident or breach. Some entities struggle with using the same assessment provider for several years and are not getting real and fresh results.  How do you really know that you are in compliance with your own company's policies and controls?",
  },
  {
    title: "How We Solve It",
    description:
      "InfoSight has trained staff with years of experience in assessing organizations against a myriad of regulatory requirements and frameworks, from GLBA and FFIEC requirements, to NIST CSF, PCI-DSS, and HIPAA, to name a few.  Our experienced assessors will work with your team to gather evidentiary items to assess your compliance with your chosen framework, then provide you with real documentation and recommendations that can be used to enhance your compliance and cyber security posture.",
  },
  {
    title: "The Outcome",
    description:
      "We provide you with a detailed roadmap showing where you are and where you should be as it relates to compliance with your framework.  In addition, we provide a detailed plan of actions and milestones for you to use on your journey to enhance your existing compliance.  You will be able to show management, your Board, Shareholders, auditors, and anyone else you choose, that you are adhering to your framework thereby having an enhanced cybersecurity posture.  ",
  },
];

const CYBERSECURITY_FEATURES_DATA = [
  "Reduce the risk of a successful attack before it occurs",
  "Identify security issues beyond the capability of automated tools & assessments/tests",
  "Go beyond typical penetration testing and target mission critical applications and operations",
  " Prioritize your risk and quickly take the right remedial and preventative measures",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Framework Compliance Assessments | Infosight"
      heroImg={heroImg}
      heroTitle={"Framework Compliance Assessments"}
      path={`Home / Services & Solutions / Framework Compliance Assessments`}
      overviewDescription={
        <p className=" text-[#444444] text-justify">
          Regulatory entities require that organizations adhere to certain
          guidelines and frameworks because attackers are always on the prowl
          looking for the weak link that will let them in. In addition, many
          organizations that are not regulated may have chosen to follow a
          framework, but don&apos;t know how well they adhere to that framework.
        </p>
      }
      downloadLink={`/pdfs/InfoSight Cybersecurity Assessment.pdf`}
      data={FRAMEWORK_DATA}
      dataLabel={"CYBERSECURITY_DATA"}
      featuresData={CYBERSECURITY_FEATURES_DATA}
      featureTitle={"Key Benefits"}
    />
  );
};

export default page;
