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
    title: "The Challenge",
    description:
      "Web Applications are very common today, however so are their vulnerabilities. There are many reasons these applications are so insecure. First, many have inadequate Authentication and Authorization which can lead to unauthorized access to sensitive data or functionality. They often have Insecure Dependencies that rely on third-party plugins and open-source code. Additionally, sometimes they lack Encryption so data can be intercepted and stolen. They can also have File Upload Vulnerabilities, allowing users to upload files without proper validation and controls which can lead to malware injection.  And of course, there's always the Zero Day, so assessing security routinely is wise.",
  },
  {
    img: infoImg2,
    title: "How We Solve it",
    description: (
      <div>
        <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
          We take all these insecurities into consideration and help you to
          better:
        </p>
        <div className="p-2 flex">
          <span className="pr-2 font-bold">&bull;</span>
          <p>
            <span className="font-bold">Design & Develop - </span> We&apos;ll
            assess your run time environment and check for security flaws
            introduced during coding. This step plays an important role in
            building strong applications.
          </p>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 font-bold">&bull;</span>
          <p>
            <span className="font-bold">Test & Implement - </span> This is one
            of the most important functions within the SDLC. It allows us to
            verify if security controls and requirements are fulfilled correctly
            before implementing and promoting applications to production-level.
            We employ a broad security assessment of your application before
            hitting production.
          </p>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 font-bold">&bull;</span>
          <p>
            <span className="font-bold">Maintain & Check - </span> Here,
            continuous, and periodic security assessments are a key function
            within your SDLC and can be required as part of regulatory
            compliance requirements. Ensuring changes to your web application
            will not break its security maturity level is important to manage
            vulnerabilities and security risks.
          </p>
        </div>
      </div>
    ),
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "To mitigate these security risks, we assist web developers and organizations to follow security best practices, conduct regular security assessments and audits, stay updated on emerging threats, and implement security measures that make your application more secure. Web Application Security is an ongoing process that requires vigilance and continuous improvement.",
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
