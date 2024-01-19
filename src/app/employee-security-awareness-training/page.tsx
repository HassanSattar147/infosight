"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Security-Awareness-Training-Onlin-Banking-img.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const EMPLOYEE_SECURITY_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "If your staff can't recognize a scam, they won't be able to take the right defensive actions against it. And today, AI-enabled social engineering is creating deep fakes so good they are nearly impossible to spot! These threats are using social media to launch sophisticated phishing attacks - so, it’s not a matter of if, but when an employee clicks!",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "Our employee security awareness training course library has courses such as Cybersecurity Awareness Basics, Email Security, Password Security, Avoiding Identify Theft, Corporate Account Takeover, Physical Security, Essential of Social Engineering & more!",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "InfoSight's courseware catalog allows you to select from over 150 courses to meet your goals and industry compliance requirements. InfoSight's courses are designed for all knowledge levels to train your staff on how to recognize suspicious activity and take preventative measures to help your organization avoid a costly breach or accidental data leak.",
  },
];

const EMPLOYEE_SECURITY_FEATURES_DATA = [
  "Reduce Security Breaches",
  "Increase Knowledge Retention",
  "Close Awareness Gaps",
  "Increate Competitive Advantages",
  "Enhance Reputation",
  "Reduce Potential of Lawsuits, Fines & Mandatory Audits",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Employee Security Awareness Training | InfoSight"
      heroImg={heroImg}
      heroTitle={"Employee Security Awareness Training"}
      path={`Home / Services & Solutions / Training & Education / Employee Security
      Awareness Training`}
      overviewDescription={
        <p className="text-[#444444]">
          Your employees have become the latest perimeter defense safeguarding
          your data. Educating them on how to spot social engineering and other
          attacks is key! Having a cyber security awareness training program is
          the best way to keep security and defense reminders top of mind.
        </p>
      }
      downloadLink={`contact`}
      downloadLinkLabel="Book a Demo Now"
      useVideoIconInDownloadbtn
      data={EMPLOYEE_SECURITY_DATA}
      dataLabel={"EMPLOYEE_SECURITY_DATA"}
      featuresData={EMPLOYEE_SECURITY_FEATURES_DATA}
      featureTitle={"Key Benefits"}
    />
  );
};

export default page;
