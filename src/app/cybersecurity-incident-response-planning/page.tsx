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
      "With AI -assisted Social Engineering attacks, and new Deep Fakes almost impossible to detect, it's not a matter of if you'll have an incident, just when. There is also a call for the government to outlaw ransomware payments, what then?! If it becomes a crime to pay to get your data back, you'd better have a solid Incident Response Plan (IRP). The key is to become Cyberresllient, where responding to an attack is swift and effective yet collateral damage is limited. However, achieving the goal with limited resources and budget is the challenge. ",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's 18-step methodology helps organizations identify, assess, and quantify risks to create an IRP that is truly effective. From Risk Analysis and 3rd party collaboration to testing and maintenance, our approach is comprehensive. Our staff collaborates with your team to create an IRP that is unique to your organization.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "InfoSight's cybersecurity Incident Response Planning & Management will ensure your organization is truly Cyberresllient and your data is protected. We'll help you create cyberresiliency through an ongoing process that helps you assess cybersecurity posture routinely to adapt to emerging threats to stay ahead of cybercriminals. ",
  },
];

const CYBERSECURITYIRPM_FEATURES_DATA = [
  "Reduce Costs by Maximizing IT Budget & Strategic Planning",
  "Provide Independent Oversight of IT Security Controls",
  "Perform Annual IT Security Risk Assessments",
  "Leverage the Most Current Threat Mitigation Strategies",
  "Assist in Security Process Development & Incident Response Planning",
  "Provide Recommendations & Reporting",
  "Enhance & Integrate IT/InfoSec Policies & Procedures",
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
          A cybersecurity Incident Response Plan provides organizations with
          practical guidance and critical considerations in preparing for a
          cyber incident. A cybersecurity Incident Response Plan (IRP) enables
          an organization to take swift, effective action to minimize damage on
          all levels. It&apos;s crucial for organizations to protect themselves
          against cyber threats and recover quickly in case of a security
          breach.
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
