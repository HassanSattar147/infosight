"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";

const CYBERSECURITY_CONTROLL_DATA = [
  {
    title: "The Challenge",
    description:
      "An organization that wants to keep their cyber systems safe and keep threat actors out, may wonder if they are doing the right things to achieve those goals. They may wonder how they are doing compared to other organizations and may wonder if their staff is abiding by their own policies and controls. An organization shouldn't rely solely on their own staff to make these determinations, they should rely on an independent third party.",
  },
  {
    title: "How We Solve It",
    description:
      "Our Cyber Controls Gap Assessment begins with a meticulous evaluation of an organization's cybersecurity controls, policies, and procedures. We identify areas of weakness or non-compliance with industry standards and regulatory requirements. Leveraging our expertise and industry insights, we develop tailored remediation strategies to effectively address identified gaps.",
  },
  {
    title: "The Outcome",
    description:
      "At the completion of the Cyber Controls Gap Assessment, you will know where you stand with your cybersecurity posture and maturity. You will also have a plan of action and milestones to provide your organization with a roadmap on how to move your cybersecurity posture and maturity to meet and exceed best practices and regulatory requirements. Thus, giving your organization some peace of mind that you are doing what you need to, in order to keep your systems safe and attackers at bay.",
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
      pageTitle="Cyber Controls Gap Assessment | Infosight"
      heroImg={heroImg}
      heroTitle={"Cyber Controls Gap Assessment"}
      path={`Home / Services & Solutions / Cyber Controls Gap Assessment`}
      overviewDescription={
        <p className=" text-[#444444] text-justify">
          A Cyber Controls Gap Assessment is a comprehensive evaluation of an
          organization&apos;s existing cybersecurity controls compared to
          industry best practices, regulatory requirements, and internal
          policies. The primary goal of this assessment is to identify any
          weaknesses or gaps in the organization&apos;s cybersecurity posture
          that could potentially lead to security breaches, data leaks, or other
          cyber threats.
        </p>
      }
      downloadLink={`/pdfs/InfoSight Cybersecurity Assessment.pdf`}
      data={CYBERSECURITY_CONTROLL_DATA}
      dataLabel={"CYBERSECURITY_DATA"}
      featuresData={CYBERSECURITY_FEATURES_DATA}
      featureTitle={"Key Benefits"}
    />
  );
};

export default page;
