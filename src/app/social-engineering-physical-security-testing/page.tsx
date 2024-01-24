"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";

const SOCIAL_ENGG_DATA = [
  {
    title: "The Challenge",
    description: `With AI -assisted Social Engineering attacks, and new Deep Fakes almost impossible to detect, it's not a matter of if you'll have an incident, just when. There is also a call for the government to outlaw ransomware payments, what then?! If it becomes a crime to pay to get your data back, you'd better have a solid Incident Response Plan (IRP). The key is to become Cyberresllient, where responding to an attack is swift and effective yet collateral damage is limited. However, achieving the goal with limited resources and budget is the challenge.`,
  },
  {
    title: "How We Solve It",
    description:
      "Leveraging AI-powered tools, our experienced security assessors custom tailor social engineering campaigns that benchmark your current proficiency level. Our campaigns can be via email, SMS text, voice or onsite. Our goal is to deliver a roadmap to effective employee security awareness training initiatives.",
  },
  {
    title: "The Outcome",
    description:
      "Our reports are actionable and give you the data you need to target security awareness training. We also provide recommendations beyond just training to ensure your social defense efforts are multi-channel.",
  },
];

const SE_FEATURES_DATA = [
  "Email Phishing",
  "Telephone Impersonation",
  "Trojan & Virus Testing",
  "Onsite Impersonation",
  "Website Subversion",
  "Camera Placement Testing",
  "Key Control Testing",
  "Clean Desktop Testing",
  "Suspicious Activity Testing",
  "Physical Penetration Testing",
  "Dumpster Diving & Shred Testing",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Social Engineering Testing | InfoSight"
      heroImg={heroImg}
      heroTitle={"Social Engineering Services"}
      path={`Home / Services & Solutions / Advisory Services / Security / Social
      Engineering & Physical Security Testing`}
      overviewDescription={
        <p className="text-[#444444]">
          InfoSight&apos;s Social Engineering Testing services reduce the risk
          of a successful phishing attacks before they occur. With over two
          decades of experience in security, compliance and risk management, our
          experienced security assessors custom tailor social engineering
          campaigns.
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/InfoSight-Social%20Engineering-2.pdf`}
      data={SOCIAL_ENGG_DATA}
      dataLabel={"SOCIAL_ENGG_DATA"}
      featuresData={SE_FEATURES_DATA}
      featureTitle={"Key Security Tests"}
    />
  );
};

export default page;
