"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const WEB_APP_DATA = [
  {
    img: infoImg1,
    title: "Our Methodology",
    description: (
      <>
        <h4 className="text-gray-900 text-sm lg:text-base font-semibold py-1 pt-2 text-justify">
          Design & Develop
        </h4>
        <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
          We&apos;ll assess your run time environment and check for security
          flaws introduced during coding. This step plays an important role in
          building strong applications.
        </p>
        <h4 className="text-gray-900 text-sm lg:text-base pt-3 font-semibold pb-1 text-justify">
          Test & Implement
        </h4>
        <p className="text-gray-900 text-sm lg:text-base pb-3 text-justify">
          This is one of the most important functions within the SDLC. It allows
          us to verify if security controls and requirements are fulfilled
          correctly before implementing and promoting applications to
          production-level. We employ a broad security assessment of your
          application before hitting production.
        </p>
        <h4 className="text-gray-900 text-sm lg:text-base font-semibold py-1 text-justify">
          Maintain & Check
        </h4>
        <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
          Here, continuous, and periodic security assessments are a key function
          within your SDLC and can be required as part of regulatory compliance
          requirements. Ensuring changes to your web application will not break
          its security maturity level is important to manage vulnerabilities and
          security risks.
        </p>
      </>
    ),
  },
];

const WEBAPP_FEATURES_DATA = [
  "SQL / Code Injection",
  "File & Directory Analysis",
  "Web Server Vulnerabilities",
  "3rd Party Package Vulnerabilities",
  "Server-Side Template Injection",
  "Cross-Site Scripting",
  "OWASP Top 10",
  "Parameter Tampering",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Web Application Testing - InfoSight"
      heroImg={heroImg}
      heroTitle={"Web Application Assessments"}
      path={`Home / Services & Solutions / Advisory Services / Security / Web
      Application Assessments`}
      overviewDescription={
        <p className="text-[#444444]">
          InfoSight&apos;s Web Application Assessment provides the most complete
          and effective suite of security testing to protect against a wide
          range of vulnerabilities and sophisticated cyberattacks. Our
          comprehensive testing will provide both detailed technical remediation
          reporting for internal teams, and an executive-level report that can
          be shared to demonstrate your applications&apos; security.
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/InfoSight-Web-Application-Testing.pdf`}
      data={WEB_APP_DATA}
      dataLabel={"WEB_APP_DATA"}
      featuresData={WEBAPP_FEATURES_DATA}
      featureTitle={"Key Security Tests"}
    />
  );
};

export default page;
