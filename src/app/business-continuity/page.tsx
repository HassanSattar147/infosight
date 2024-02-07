"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
// import heroImg from "/public/services-solutions/Business-Planning-Disaster-Recovery-img.png";
import heroImg from "/public/purchased-images/business-continuity-banner.jpg";

const PLANNING_DISASTER_DATA = [
  {
    title: "The Challenge",
    description:
      "BCP/R planning requires great effort and significant resources because it involves every person, process, and function of an organization. It presents challenges such as resource constraints, data management, regulatory compliance, vendor dependencies, supply chain resilience, crisis management and of course, cybersecurity.  Taking all these things into consideration makes the challenge almost too much for many organizations due to a lack of resources, limited budget, and executive support. Additionally, most organizations don't have a Certified Business Continuity Planning (CBCP) on staff.",
  },
  {
    title: "How We Solve It",
    description:
      "We recognize that BCP & DR planning isn't only about natural disasters, but also human error, pandemics and supply chain circumstances, so our goal is to look at each organizations' operations from an intimate perspective enabling our CBCPs to understand your business' unique operating characteristics. With our a 5-step approach we start with a Business Impact Analysis (BIA) and move through a Technology Assessment to determine if your IT/OT systems will support departmental Recovery Time Objectives (RTO) and Recover Point Objectives (RPO) to ensure your technology solutions can deliver on your plan. Our deliverables include a BIA, Risk Assessment, Technology Assessment, a BCP Framework document and Emergency Response Plan.",
  },
  {
    title: "The Outcome",
    description:
      "InfoSight's Certified Business Continuity Planners (CBCP's) utilize decades of experience in BCP/DR disciplines to develop a customized plan for your organization that ensures you can continue operations before, during and after adverse events. We make recommendations along the way to improve processes, technology, and security to make your plan its very best. We deliver more than a BCP document, but a workable plan your employees can follow to ensure successful operations during a critical time.",
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
      heroTitle={"Business Continuity Planning & Disaster Recovery"}
      path={`Home / Services & Solutions / Advisory Services / Business Continuity
      Planning & Disaster Recovery`}
      overviewDescription={
        <p>
          Business Continuity and Disaster Recovery Planning (BCP/R) are
          critical for an organization&apos;s resilience, risk management, and
          ability to navigate unexpected challenges. They not only protect the
          organization&apos;s assets and data but also contribute to its overall
          stability, reputation, and long-term success.
        </p>
      }
      downloadLink={`/pdfs/InfoSight Business-Continuity-Planning.pdf`}
      data={PLANNING_DISASTER_DATA}
      dataLabel={"PLANNING_DISASTER_DATA"}
      featuresData={PLANNING_FEATURES_DATA}
      featureTitle={"Our 5 Step Approach"}
    />
  );
};

export default page;
