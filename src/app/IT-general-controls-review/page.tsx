"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import Image from "next/image";
import heroImg from "/public/audit/Audit-img.png";
import auditInfoImg1 from "/public/audit/Audit-info-img1.png";
import generalinfoImg1 from "/public/audit/IT-General-Control-Review-img1.png";
import generalinfoImg2 from "/public/audit/IT-General-Control-Review-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import ContentContainer from "@/components/Elements/ContentContainer";

const IT_GENERAL_CONTROL_DATA = [
  {
    img: generalinfoImg1,
    title: "The Challenge",
    description:
      "Controls for smaller institutions has no shortage of challenges including limited resources, personnel, and technological capabilities. Whether it's a smaller workforce, which can make it challenging to designate individuals solely responsible for risk management, a complex regulatory environment, there never seems to be enough time of budget to get everything accomplished to the satisfaction or regulating bodies. Additionally, third-party risk seems to be on the risk due to supply chain compromises and cyberthreat trends.",
  },
  {
    img: generalinfoImg2,
    title: "How We Solve it",
    description:
      "Our advisors review your institutions' organizational structure and operating environment to conduct an IT Controls Review based upon FFIEC guidelines and your appetite for risk. We prioritize the control environment and assist in leveraging cost-effective technology solutions for risk assessment, data analytics, and cybersecurity to enhance risk management capabilities. ",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "The outcome is a proactive and strategic approach to It Controls that helps your institution build resilience and effectively manage risks within your limitations.",
  },
];

const IT_GC_FEATURES_DATA = [
  "Review risk reviews for control requirements",
  "Review management's response to issues raised at, or since the last exam",
  "Review past reports for outstanding issues or previous problems.",
  "Interview management pre-examination information requests to identify changes to the technology infrastructure or new products and services that might increase the institution's risk.",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="IT General Control Review | Infosight"
      heroImg={heroImg}
      heroTitle={"IT General Controls Review"}
      path={` Home / Advisory Services / Audit & Assurance / IT General Control Review`}
      overviewComp={
        <>
          <ContentContainer>
            <h2 className="text-2xl lg:text-4xl font-semibold mb-5 mt-5">
              Overview
            </h2>
            <div>
              <p>
                With decades of Banking and Credit Union experience, InfoSight
                advisors understand your Financial Institutions&apos; control
                environment. We understand your institutions&apos; FFIEC
                compliance requirements in addition to overall control
                environment best practices.
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
        </>
      }
      data={IT_GENERAL_CONTROL_DATA}
      dataLabel={"IT_GENERAL_CONTROL_DATA"}
      featuresData={IT_GC_FEATURES_DATA}
      featureTitle={"At InfoSight, Our experts:"}
    />
  );
};

export default page;
