"use client";
import React from "react";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import DetectionRespHero from "./Sub/DetectionRespHero";
import DetectionRespFeatures from "./Sub/DetectionRespFeatures";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import PageLayout from "../PageLayout";
import Link from "next/link";

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

const DetectionResponse = () => {
  React.useEffect(() => {
    document.title = "24x7 Managed Detection & Response | Infosight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <DetectionRespHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / 24x7 Managed Detection & Response
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-60 justify-between">
            <p className="w-full">
              InfoSight&apos;s Security Operations Center (SOC) serves as your
              own trusted cybersecurity team providing you with real time
              incident response, enterprise remediation and threat confinement
              24x7x365.
              <br />
              <br />
              We leverage sound and repeatable processes to mitigate threats in
              a systematic approach delivering superior outcomes with no alert
              fatigue ever!
            </p>
            <div className="flex gap-5 items-center lg:w-5/12 cursor-pointer">
              <Link
                href="https://www.infosightinc.com/pdf/InfoSight-24x7-IT-Managed-Detection-Response.pdf"
                target="_blank"
              >
                <div className="flex gap-3 items-center">
                  <Image src={documentIcon} alt="" />
                  <p className=" text-[#8C340D] font-semibold">
                    Download Overview
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        {DETECTION_RESPONSE_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"DETECTION_RESPONSE_DATA__" + i}
              className={`py-5 lg:py-10 flex flex-col-reverse lg:flex-row justify-between gap-5 +
              ${i % 2 === 1 ? " lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              <Image src={img} alt="" className="w-full rounded-lg" />
              <div className="flex flex-col justify-between w-full">
                <h1 className="lg:text-2xl text-gray-900 font-semibold">
                  {title}
                </h1>
                <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <DetectionRespFeatures />
    </PageLayout>
  );
};

export default DetectionResponse;
