"use client";
import React from "react";
import PlanningHero from "./Sub/PlanningHero";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import PlanningFeatures from "./Sub/PlanningFeatures";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import PageLayout from "../PageLayout";
import Link from "next/link";

const PLANNING_DISASTER_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "In today's world we have both a war against cybercrime and the need for systems services to be available 24x7x365., To further exasperate this challenge is a tighter budget and fewer resources. Additionally, having a plan that addresses all risk, even Pandemics is critical to success!",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "We recognize that BCP & DR planning isn't just about natural disaster, but also man-made events and pandemic circumstances never taken seriously in the past. Additionally, all BCP & DR plans should be cyber-resilient to protect against attacks by bad actors and even rogue employees. We provide you with a 5-step approach that to showcase current security posture by testing your network, recommending where to improve so we can come up with a strong plan and then continuously testing that plan to ensure it upholds against attacks.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "A plan that is more than a document, but a workable plan you employees can follow to ensure successful operations during a crucial time. We develop not just a BCP document but an “Emergency Response Plan” your employees can actually follow! With our process you can feel secure knowing your organization has the most up to date plan to restore operations quickly.",
  },
];

const BusinessContinuity = () => {
  React.useEffect(() => {
    document.title = "Business Continuity | InfoSight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <PlanningHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Advisory Services / Business Continuity
        Planning & Disaster Recovery
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-60 justify-between">
            <p className=" ">
              InfoSight&apos;s Certified Business Continuity Planners
              (CBCP&apos;s) utilize years of experience in Business Continuity
              Planning and Disaster Recovery experience to develop a specific
              plan for your organization that ensures you can continue
              operations before, during and after adverse events.
            </p>
            <div className="flex gap-5 items-center lg:w-5/12 cursor-pointer">
              <Link
                className=" inline-flex items-center gap-3"
                href={
                  "https://www.infosightinc.com/pdf/InfoSight-Business-Continuity-Planning.pdf"
                }
                target="_blank"
              >
                <Image src={documentIcon} alt="" />
                <p className=" text-[#8C340D] font-semibold">
                  Download Overview
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        {PLANNING_DISASTER_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"PLANNING_DISASTER_DATA__" + i}
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
      <PlanningFeatures />
    </PageLayout>
  );
};

export default BusinessContinuity;
