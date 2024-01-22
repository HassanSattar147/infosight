"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/SOCaaS-img.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const SECURITY_OPERATIONS_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description: (
      <>
        <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
          Attackers work 24x7, while most organizations IT departments
          don&apos;t… Additionally, tight cybersecurity budgets and the effort
          required to analyze all security events can be exhausting leading to
          employee fatigue and turnover. Recruiting and retaining cybersecurity
          analysts is probably the most challenging it has been in decades. Your
          team should be focused on more strategic objectives that support
          business goals and not fighting cybersecurity fires.
        </p>
        <h4 className="py-2 font-bold">We Solve Three Major Issues:</h4>
        <div className="p-2 flex">
          <span className="pr-2 font-bold">1.</span>
          <p>
            <span className="font-bold">Detect & Alert Fatigue - </span> With so
            many data sources and devices along with the growing threat
            landscape all creating thousands or even millions of alerts per
            second, alert fatigue will set in even for a 24x7 shop.
          </p>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 font-bold">2.</span>
          <p>
            <span className="font-bold">Tool Overload - </span> Adding tools for
            specific components across the data center and the cloud leads to
            tool overload, and in many cases many of the tools are not fully
            implemented.
          </p>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 font-bold">3.</span>
          <p>
            <span className="font-bold">Untuned Data Sources - </span> Data
            Sources must be tuned to eliminate information, unnecessary and
            false positive events/alarms. Doing this allows for only actionable
            alerts and easier visibility to spot trends. And it saves money when
            on ingestion-based cloud platforms!
          </p>
        </div>
      </>
    ),
  },
  {
    img: infoImg2,
    title: "How We Deliver It",
    description: (
      <>
        <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
          InfoSight brings a co-managed approach to security monitoring by
          becoming an extension to your IT team to monitor your most critical
          assets and data sources 24x7x365. We deliver enterprise threat
          management through a layered security model where all assets in the
          datacenter or the cloud can be viewed in a “single pane of glass” by
          both your IT team and our SOC simultaneously. This allows your team to
          focus on day-to-day concerns thereby improving overall efficiency and
          operational effectiveness. We accomplish our tasks by:
        </p>
        <div className="px-2 flex">
          <span className="pr-2 ">&bull;</span>
          <p>
            <span className="font-bold">Monitoring & Threat Detection - </span>{" "}
            We provide 24x7x365 continuous and proactive monitoring of your
            environment.
          </p>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 ">&bull;</span>
          <p>
            <span className="font-bold">
              Incident Response & Remediation -{" "}
            </span>{" "}
            Our Analysts adhere to the SLA&apos;s runbooks to remediate issues
            or to triage and escalate to your team.
          </p>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 ">&bull;</span>
          <p>
            <span className="font-bold">Incident/Problem Management - </span> We
            own incident/problem management from creation to closure.
          </p>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 ">&bull;</span>
          <p>
            <span className="font-bold">
              Ownership of runbook maintenance -{" "}
            </span>{" "}
            We will work closely with your team to leverage any existing runbook
            collaterals and IT Teams knowledge as we build, manage, and maintain
            the runbook.
          </p>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 ">&bull;</span>
          <p>
            <span className="font-bold">
              Ongoing monitoring enhancements -{" "}
            </span>{" "}
            We are responsible for managing the monitoring tools to ensure tools
            remain updated, tuned, and deliver the monitoring outputs desired by
            the client.
          </p>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 ">&bull;</span>
          <p>
            <span className="font-bold">Incident Case Management - </span> Case
            Management Tickets are automatically created by the monitoring tools
            or manually created by authorized InfoSight, Client or Client staff
            to track incident investigations to closure.
          </p>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 ">&bull;</span>
          <p>
            <span className="font-bold">Global Threat Intelligence - </span>{" "}
            Threat Intelligence helps gain insights into real threats in your
            attack surface, helping you make more informed security decisions.
          </p>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 ">&bull;</span>
          <p>
            <span className="font-bold">Incident Communications - </span> We
            alert the client of incidents via escalation protocols based on
            environment and the severity of the incident. All incident creation,
            documentation and closure will be maintained in InfoSight&apos;s
            ITSM via automated or manual updates.
          </p>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 ">&bull;</span>
          <p>
            <span className="font-bold">Monthly Reporting - </span> We provide
            monthly incident-based reporting.
          </p>
        </div>
      </>
    ),
  },
  {
    img: infoImg3,
    title: "Just the Facts",
    description: (
      <>
        <div className="px-2 flex">
          <span className="pr-2">&bull;</span>
          <span className="font-semibold">100% US based SOC.</span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2">&bull;</span>
          <span className="font-semibold">
            Only W2 US-based employee, no outsourcing or offshoring!
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2">&bull;</span>
          <span className="font-semibold">SOC 2 Certified annually.</span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2">&bull;</span>
          <span className="font-semibold">
            True 24x7x365 Staffed SOC - “eyes on glass” at all times.
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2">&bull;</span>
          <span className="font-semibold">
            Cyber liability insurance coverage
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2">&bull;</span>
          <span className="font-semibold">
            Federally regulated and critical infrastructure clients experience{" "}
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2">&bull;</span>
          <span className="font-semibold">
            Providing both Security and Infrastructure Support - (SOC + NOC =
            SNOC)
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2">&bull;</span>
          <span className="font-semibold">
            Cloud, Hybrid and Datacenter on-premises coverage for all IT
            assets/systems
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2">&bull;</span>
          <span className="font-semibold">
            Monitoring of Applications, DBs, Security, Infrastructure, Server or
            Serverless
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2">&bull;</span>
          <span className="font-semibold">
            Device or consumption-based pricing models
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2">&bull;</span>
          <span className="font-semibold">
            27x7 or off-peak 7pm-7am coverage available
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2">&bull;</span>
          <span className="font-semibold">
            25+ years of successful outcomes
          </span>
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
      pageTitle="SOCaaS"
      heroImg={heroImg}
      heroTitle={"Security Operations Center as a Service (SOCaaS)"}
      overviewDescription={
        <p className=" text-justify text-[#444444]">
          InfoSight&apos;s Security Operations Center (SOC) operates as your own
          trusted cybersecurity team providing you with real time 24x7 threat
          monitoring, analysis, containment, triage, remediation, escalation,
          and reporting. All with no alert fatigue ever! Additionally, we can
          leverage your cloud native toolsets or ours, the choice is yours!
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/InfoSight-SOCaaS.pdf`}
      videoLink="https://www.infosightinc.com/Videos/InfoSight-SOCaaS.mp4"
      path={`Home / Services & Solutions / SOCaaS`}
      data={SECURITY_OPERATIONS_DATA}
      dataLabel={"SECURITY_OPERATIONS_DATA"}
      featuresData={SO_FEATURES_DATA}
      featureTitle={"Key Service Features"}
    />
  );
};

export default page;
