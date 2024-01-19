"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const SCADA_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Risk management for smaller institutions has no shortage of challenges due to limited resources, personnel, and technological capabilities. Whether it's a smaller workforce, which can make it challenging to designate individuals solely responsible for risk management, a complex regulatory environment, there never seems to be enough time of budget to get everything accomplished to the satisfaction or regulating bodies. Additionally, third-party risk seems to be on the risk due to supply chain compromises and cyberthreat trends.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description: (
      <>
        <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
          Our advisors review your institutions&apos; organizational structure
          and operating environment to conduct a risk assessment based upon
          FFIEC guidelines and your appetite for risk. We prioritize risk
          management and assist in leveraging cost-effective technology
          solutions for risk assessment, data analytics, and cybersecurity to
          enhance risk management capabilities. We deliver methods to regularly
          assess and update risk assessments to identify emerging risks and
          prioritize risk mitigation efforts.
        </p>
        <h4 className="text-gray-700 py-2">
          Our Services include, but are not limited to:
        </h4>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">
            GLBA Risk Assessment
          </span>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">
            Online Banking Risk Assessment
          </span>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">
            Mobile Banking Risk Assessment
          </span>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">
            ACH & Wire Transfer Risk Assessment
          </span>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <span className="font-semibold text-gray-700">
            IT Risk Assessment
          </span>
        </div>
      </>
    ),
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "The outcome is a proactive and strategic approach to Risk management and assessments that helps your institution build resilience and effectively manage risks within your limitations.",
  },
];

const SCADA_FEATURES_DATA = [
  "Reduce the risk of a successful attack before it occurs",
  "Identify security issues beyond the capability of automated tools",
  "Prioritize your risks and quickly take the right preventative measures",
  "Help meet compliance requirements before deadlines",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Risk Assessments for Financial Institutions | InfoSight"
      heroImg={heroImg}
      heroTitle={"Risk Assessments for Financial Institutions"}
      path={`Home / Services & Solutions / Advisory Services / Security / Risk Assessments for Financial Institutions`}
      overviewDescription={
        <p className="text-[#444444]">
          With decades of Banking and Credit Union experience, InfoSight
          advisors understand your Financial Institutions&apos; risk categories
          as we as what Examiners are looking for in a Risk Management plan. We
          understand your institutions&apos; FFIEC compliance requirements in
          addition to overall risk management best practices.
        </p>
      }
      data={SCADA_DATA}
      dataLabel={"SCADA_DATA"}
      featuresData={SCADA_FEATURES_DATA}
      featureTitle={"Key Benefits"}
    />
  );
};

export default page;
