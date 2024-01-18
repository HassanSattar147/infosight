"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const CYBERSECURITY_IRPM_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Having a safe and secure environment is a must but so is knowing what to do in case a successful cyber breach occurs. A cybersecurity Incident Response Plan provides utilities with practical guidance and critical considerations in preparing for a cyber incident. A cybersecurity Incident Response Plan enables staff to take swift, effective action.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight identifies the external response organizations—including law enforcement, information sharing organizations, and cyber mutual assistance groups—the utility might engage during cyber incident response, particularly for severe incidents that outpace utility resources and expertise. Our staff collaborates with your team to outline your incident response requirements as well as timelines in case of an emergency.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "Once your Cybersecurity Incident Response Plan is in place your organization will have a strategic plan in case an attack were to occur.",
  },
];

const CYBERSECURITYIRPM_FEATURES_DATA = [
  "Understand your system and environment",
  "Identify the response procedures the CERT will take to investigate, contain, eradicate, and recover from a variety of different incidents",
  "Develop strategic communication procedures for cyber incidents.",
  "Define response procedures and responsibilities of the utility's legal team during cyber incident investigation and response.",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Cybersecurity Planning & Management | InfoSight"
      heroImg={heroImg}
      heroTitle={"Cybersecurity Incident Response Planning & Management"}
      path={`Home / Services & Solutions / Advisory Services / Security /
      Cybersecurity Incident Response Planning & Management`}
      overviewDescription={
        <p className="text-[#444444]">
          InfoSight&apos;s cybersecurity Incident Response Planning & Management
          will continuously ensure your environment is protected and your
          organization&apos;s data is secure as well as make sure you are up to
          date on industry compliance.
        </p>
      }
      data={CYBERSECURITY_IRPM_DATA}
      dataLabel={"CYBERSECURITY_IRPM_DATA"}
      featuresData={CYBERSECURITYIRPM_FEATURES_DATA}
      featureTitle={"Key Services"}
    />
  );
};

export default page;
