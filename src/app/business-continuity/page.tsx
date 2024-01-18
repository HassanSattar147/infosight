"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Business-Planning-Disaster-Recovery-img.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const PLANNING_DISASTER_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "In today's world we have both a war against cybercrime and the need for systems services to be available 24x7x365., To further exasperate this challenge is a tighter budget and fewer resources. Additionally, having a plan that addresses all risk, even Pandemics is critical to success!",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "We recognize that BCP & DR planning isn't just about natural disaster, but also man-made events and pandemic circumstances never taken seriously in the past. Additionally, all BCP & DR plans should be cyber-resilient to protect against attacks by bad actors and even rogue employees. We provide you with a 5-step approach that to showcase current security posture by testing your network, recommending where to improve so we can come up with a strong plan and then continuously testing that plan to ensure it upholds against attacks.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "A plan that is more than a document, but a workable plan you employees can follow to ensure successful operations during a crucial time. We develop not just a BCP document but an “Emergency Response Plan” your employees can actually follow! With our process you can feel secure knowing your organization has the most up to date plan to restore operations quickly.",
  },
];

const PLANNING_FEATURES_DATA = [
  "Step 1: Risk Assessment",
  "Step 2: Business Impact Analysis",
  "Step 3: Technology Strategy",
  "Step 4: Documentation",
  "Step 5: Testing",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Business Continuity | InfoSight"
      heroImg={heroImg}
      heroTitle={"Business Continuity Planning& Disaster Recovery"}
      path={`Home / Services & Solutions / Advisory Services / Business Continuity
      Planning & Disaster Recovery`}
      overviewDescription={
        <p>
          InfoSight&apos;s Certified Business Continuity Planners (CBCP&apos;s)
          utilize years of experience in Business Continuity Planning and
          Disaster Recovery experience to develop a specific plan for your
          organization that ensures you can continue operations before, during
          and after adverse events.
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/InfoSight-Business-Continuity-Planning.pdf`}
      data={PLANNING_DISASTER_DATA}
      dataLabel={"PLANNING_DISASTER_DATA"}
      featuresData={PLANNING_FEATURES_DATA}
      featureTitle={"Our 5 Step Approach"}
    />
  );
};

export default page;
