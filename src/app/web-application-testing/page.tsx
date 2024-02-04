"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";

const WEB_APP_DATA = [
  {
    title: "The Challenge",
    description:
      "Web Applications are very common today, however so are their vulnerabilities. There are many reasons these applications are so insecure. First, many have inadequate Authentication and Authorization which can lead to unauthorized access to sensitive data or functionality. They often have Insecure Dependencies that rely on third-party plugins and open-source code. Additionally, sometimes they lack Encryption so data can be intercepted and stolen. They can also have File Upload Vulnerabilities, allowing users to upload files without proper validation and controls which can lead to malware injection.  And of course, there's always the Zero Day, so assessing security routinely is wise.",
  },
  {
    title: "Our Methodology",
    description: (
      <div>
        <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
          We take all these insecurities into consideration and help you to
          better:
        </p>
        <div className="p-2 flex">
          <span className="pr-2 font-bold">1.</span>
          {/* <span className="pr-2 font-bold">&bull;</span> */}
          <p>
            <span className="font-bold text-orange-500">
              Design & Develop -{" "}
            </span>{" "}
            plays an important role in building strong applications. We&apos;ll
            assess your run time environment and check for security flaws
            introduced during coding.
          </p>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 font-bold">2.</span>
          {/* <span className="pr-2 font-bold">&bull;</span> */}
          <p>
            <span className="font-bold text-orange-500">
              Test & Implement -{" "}
            </span>{" "}
            one of the most important functions in the SDLC. It allows us to
            verify if security controls and requirements are fulfilled correctly
            before implementing and promoting applications to production-level.
            We employ a broad security assessment of your application before
            hitting production.
          </p>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 font-bold">3.</span>
          {/* <span className="pr-2 font-bold">&bull;</span> */}
          <p>
            <span className="font-bold text-orange-500">
              Maintain & Check -{" "}
            </span>{" "}
            continuous and periodic security assessments are required in several
            different industry regulations and is also a key function in your
            SDLC. Making sure that changes to your web application will not
            break its security maturity level is important to manage
            vulnerabilities and security risks.
          </p>
        </div>
      </div>
    ),
  },
  {
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
          Web application server penetration testing reveals vulnerabilities
          that expose organizations to cyber risks that traditional firewalls
          and IDS networks aren&apos;t designed to protect against.
          <br />
          <br />
          InfoSight&apos;s Web Application Server Penetration Testing provides
          the most complete and effective suite for web security assessments
          checks to enhance the overall security of your Web Applications
          against a wide range of vulnerabilities and sophisticated attack
          vectors.
          <br />
          <br />
          InfoSight&apos;s suite of services allows for assessment of Web
          Applications during different phases of the application develop life
          cycle.
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
