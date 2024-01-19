"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/audit/Audit-img.png";
import auditInfoImg1 from "/public/audit/Audit-info-img1.png";
import auditInfoImg2 from "/public/audit/Audit-info-img2.png";
import Image from "next/image";
import ContentContainer from "@/components/Elements/ContentContainer";

const ITAUDIT_DATA = [
  {
    img: auditInfoImg2,
    title:
      "What the difference between an IT Audit and a Vulnerability Assessment?”",
    description:
      "An IT audit and a vulnerability assessment are related but distinct processes that serve different purposes within the realm of information technology security and compliance. While both IT audits and vulnerability assessments play essential roles in ensuring the security and compliance of an organization's IT environment, they have distinct focuses and scopes. An IT audit provides a comprehensive evaluation of IT governance, security, and compliance, while a vulnerability assessment specifically identifies and quantifies vulnerabilities within the IT infrastructure. These assessments can complement each other, with the findings of a vulnerability assessment informing the broader IT audit process.",
  },
  {
    img: auditInfoImg2,
    title: "Why are IT Audits Important?",
    description:
      "IT audits are essential for several reasons, as they play a critical role in ensuring the security, compliance, and efficiency of an organization's information technology (IT) systems and processes. IT audits are a proactive and essential tool for organizations to assess and improve their IT security, compliance, and overall operational effectiveness. They help organizations identify and mitigate risks, enhance data protection, and ensure that IT practices align with business goals and regulatory requirements. By investing in IT audits, organizations can better protect their assets, reputation, and stakeholders' trust",
  },
];

const ITAUDIT_FEATURES_DATA = [
  "IT Audit Testing",
  "IT Audit Support",
  "IT Audit Deficiency Remediation",
  "IT Audit Program Design & Review",
  "IT Audit Training",
  "Audit Automation Software Implementation & Configuration",
  "Compliance Standards based on Industry",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="IT Audits under ISACA | Infosight"
      heroImg={heroImg}
      heroTitle={"IT Audit"}
      path={`Home / Advisory Services / Audit & Assurance / IT Audit`}
      overviewComp={
        <ContentContainer>
          <h2 className="text-2xl lg:text-4xl font-semibold mb-5 mt-5">
            What is an IT Audit?
          </h2>
          <div>
            <p>
              An IT audit, or an Information Technology audit, is a systematic
              evaluation and examination of an organization's information
              technology systems, processes, policies, and controls. The primary
              purpose of an IT audit is to assess the effectiveness, security,
              and compliance of an organization's IT environment. IT audits can
              encompass a wide range of areas within the IT domain, including,
              Information Security, Data Management, Network Infrastructure,
              Application Controls, Compliance with Regulations, Risk
              Management, Change Management, Incident Response, Business
              Continuity and Disaster Recovery, IT Governance, Vendor Management
              and Infrastructure and Asset Management.
            </p>
            <div
              className="ImageText__img mt-6"
              style={{
                backgroundImage: `url(${auditInfoImg1.src})`,
                height: "350px",
              }}
            />
          </div>
          <hr className="mt-10 mb-5" />
        </ContentContainer>
      }
      data={ITAUDIT_DATA}
      dataLabel={"ITAUDIT_DATA"}
      featuresData={ITAUDIT_FEATURES_DATA}
      featureTitle={"InfoSight's IT Audit Service Offers"}
    />
  );
};

export default page;
