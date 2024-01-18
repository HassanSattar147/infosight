"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Managed-Detection-Response-img.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const DETECTION_RESPONSE_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Most organizations have limited IT staffing and tight cybersecurity budgets, making holistic information security seem impossible. The requirement for threat monitoring and incident response is a 24x7x365 job with extended security needed. For most companies this is a lot to ask for on top of keeping a successful up and running organization.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight brings a co-managed approach to security monitoring by becoming an extension to your IT team to monitor your most critical assets and data sources24x7x365. We deliver enterprise threat management through a layered security model where all assets in the datacenter or the Cloud can be viewed in a “single pane of glass” by both your IT team and our SOC simultaneously. This allows your team to focus on day-to-day concerns thereby improving overall efficiency and operational effectiveness.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description: (
      <>
        <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
          Our goal is to work with your team to ensure 24x7 security, incident
          response and remediation to improve your overall security posture and
          minimize cyber risk. We help your organization:
        </p>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <p>
            <span className="font-bold text-gray-600">Detect & Analyze:</span>{" "}
            InfoSight believes in a proactive rather than a reactive approach.
            We analyze and scan your networks 24x7 to ensure security and
            discover any suspicious activity.
          </p>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <p>
            <span className="font-bold text-gray-600">
              Recognize & Respond:{" "}
            </span>{" "}
            InfoSight&apos;s experts quickly investigate suspicious cases
            leaving your organization with no alert fatigue or false positive
            outcomes.
          </p>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 text-gray-600">&bull;</span>
          <p>
            <span className="font-bold text-gray-600">
              Remediate & Strengthen Security:{" "}
            </span>{" "}
            Our unique understanding and experience allows us to provide
            remediation solutions regardless of your device or data source
          </p>
        </div>
      </>
    ),
  },
];

const DETECTION_RESPONSE__FEATURES_DATA = [
  "24x7 Comprehensive Security Monitoring",
  "Threat Detection & Investigation",
  "Incident Response",
  "Mitigation & Remediation",
  "Notification & Alerting",
  "Reporting & Analytics",
  "Attack Intelligence",
  "Vulnerability Management",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="24x7-managed-detection-&-response"
      heroImg={heroImg}
      heroTitle={"24 x 7 Managed Detection & Response"}
      path={`Home / Services & Solutions / 24x7 Managed Detection & Response`}
      overviewDescription={
        <p className="">
          InfoSight&apos;s Security Operations Center (SOC) serves as your own
          trusted cybersecurity team providing you with real time incident
          response, enterprise remediation and threat confinement 24x7x365.
          <br />
          <br />
          We leverage sound and repeatable processes to mitigate threats in a
          systematic approach delivering superior outcomes with no alert fatigue
          ever!
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/InfoSight-24x7-IT-Managed-Detection-Response.pdf`}
      data={DETECTION_RESPONSE_DATA}
      dataLabel={"DETECTION_RESPONSE_DATA"}
      featuresData={DETECTION_RESPONSE__FEATURES_DATA}
      featureTitle={"Key Benefits"}
    />
  );
};

export default page;
