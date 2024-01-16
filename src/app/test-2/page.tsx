import { ServicePageLayout } from "@/components/PatchVulnerability";
import React from "react";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import heroImg from "/public/services-solutions/SOCaaS-img.png";

const SECURITY_OPERATIONS_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "The limitations on cybersecurity funds and internal IT staff make holistic information security seem impossible. The result of these issues are teams to extend beyond basic security operations and are requested to actively threat hunt and research zero-day attacks. This can easily exhaust personnel and create unnecessary risk for most organizations.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's Security Operations Center as a Service (SOCaaS) detects cyber threats quickly and provides containment, mitigation and remediation services to ensure a safe running environment 24x7x365. Additionally, internal threats can be detected to protect against insider compromise.We deliver enterprise threat management through a layered security model where all assets in the datacenter or the Cloud can be viewed in a “single pane of glass” by both your IT team and our SOC simultaneously. This allows your team to focus on day-to-day concerns thereby improving overall efficiency and operational effectiveness.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description: (
      <>
        <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
          Our goal is to ensure 24x7 security, incident response and remediation
          to improve your overall security posture and minimize cyber risk. We
          help your organization:
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

const SO_FEATURES_DATA = [
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
      heroImg={heroImg}
      heroTitle="Security Operations Center as a Service (SOCaaS)"
      path="Home / Services & Solutions / SOCaaS"
      overviewDescription={
        <p className=" text-justify text-[#444444]">
          InfoSight&apos;s Security Operations Center (SOC) serves as your own
          trusted cybersecurity team providing you with real time incident
          response, enterprise remediation and threat confinement 24x7x365.
          <br />
          <br />
          <span className="font-bold">
            We leverage sound and repeatable processes to mitigate threats in a
            systematic approach delivering superior outcomes with no alert
            fatigue ever!
          </span>
        </p>
      }
      downloadLink="https://www.infosightinc.com/pdf/InfoSight-SOCaaS.pdf"
      videoLink="https://www.infosightinc.com/Videos/InfoSight-SOCaaS.mp4"
      data={SECURITY_OPERATIONS_DATA}
      dataLabel="SECURITY_OPERATIONS_DATA"
      featureTitle="Key Service Features"
      featuresData={SO_FEATURES_DATA}
    />
  );
};

export default page;
