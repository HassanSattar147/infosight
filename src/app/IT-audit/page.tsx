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
    title: "Why are IT Audits Important?",
    description:
      " IT Audits provide independent objective assurance that controls are working as they are intended. The scope of an IT Audit is determined by the results of a risk assessment that includes qualitative and quantitative criteria as well as historic and current information. IT Audits may also be required to demonstrate that all mitigation programs are working as intended. This can be a key element of monitoring and governance oversight.",
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
      heroTitle={"Audit & Assurance"}
      heroDescription="The compliance service ensures that a business adheres to external
      rules and internal controls."
      path={`Home / Advisory Services / Audit & Assurance / IT Audit`}
      overviewComp={
        <ContentContainer>
          <h2 className="text-2xl lg:text-4xl font-semibold mb-5 mt-5">
            IT Audit
          </h2>
          <div>
            <p>
              InfoSight conducts IT Audits under ISACA (Information Systems
              Audit and Control Association) standards to provide your
              organization with the best planning, fieldwork, knowledge and
              reporting on current IT systems, controls and processes to meet
              your compliance requirements. InfoSight&apos;s experts understand
              the requirements of general and industry specific guidelines and
              compliance to ensure you a successful IT Audit unique to your
              company. Our experts conduct your custom IT Audits around your
              organization&apos;s standards, requirements and best practices to
              provide you with a one stop shop in planning, testing and
              reporting activities.
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
