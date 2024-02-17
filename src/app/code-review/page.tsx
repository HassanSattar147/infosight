"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";

const MOBILE_API_DATA = [
  {
    title: "The Challenge",
    description:
      "There are several challenges that developers face when attempting to write secure code. The shear complexity of security and keeping up with the ever-evolving security landscape can be daunting. This is exacerbated by the pressure to deliver applications quickly. Additionally, trying to balance Security and Usability can add to the effort because having a positive end-user experience is key to achieving business goals. There are also other challenges such as Legacy Code and Dependencies, a Lack of Resources, Human Error and Compliance and Regulatory Requirements.",
  },
  {
    title: "How We Solve It",
    description:
      "To address these challenges, we first familiarize ourselves with the Application in scope. We approach the code review with the goal of helping the developer. We ensure that the code follows the established coding guidelines, style, and best practices of the project. We verify the code performs as it's intended. We then look for potential issues by checking for logic errors, functional bugs, and review error handling and edge cases to ensure robustness. Then, we scrutinize the code for potential security vulnerabilities, and common issues like input validation issues, SQL injection, cross-site scripting (XSS), and sensitive data exposure. In the final stages of the review, we consider performance by examining the code for performance bottlenecks or inefficient algorithms, and we also evaluate the use of resources like memory and CPU. We conclude by reviewing documentation to ensure that comments and code annotations are clear, informative, and up to date.",
  },
  {
    title: "The Outcome",
    description:
      "Our reporting is actionable! It allows developers to not only secure code but make it more efficient thereby increasing performance. Our goal of the code review is to assist developers in delivering high-quality software that meets functional, security, and maintainability requirements. We help organizations prioritize security as an integral part of the development process and foster a security-conscious culture within their development teams. ",
  },
];

const MOBILE_FEATURES_DATA = [
  "Authentication",
  "Authorization",
  "Session management",
  "Data validation",
  "Error handling",
  "Logging",
  "Encryption",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Code Review - Infosight"
      heroImg={heroImg}
      heroTitle={"Code Review"}
      path={`Home / Services & Solutions / Advisory Services / Security / Code Review`}
      overviewDescription={
        <p className="text-justify text-[#444444] lg:w-10/12">
          The primary goal of a code review is to identify and address issues,
          bugs, security vulnerabilities, and maintainability concerns in the
          codebase before it is deployed into the production environment. A
          secondary goal is to ensure the security of the code over its life and
          changes are made. Code reviews can take place at various stages of the
          development process, such as during development, before a release, or
          as part of ongoing maintenance to address code security and adherence
          to best practices.
        </p>
      }
      downloadLink={`/pdfs/InfoSight  Mobile, API & Code Review.pdf`}
      videoLink="https://www.infosightinc.com/Videos/InfoSight-Mobile-APITesting.mp4"
      data={MOBILE_API_DATA}
      dataLabel={"MOBILE_API_DATA"}
      featuresData={MOBILE_FEATURES_DATA}
      featureTitle={"Key Security Tests"}
    />
  );
};

export default page;
