"use client";
import React from "react";
import Image from "next/image";
import videoIcon from "../../../public/homepage/video-icon.svg";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import CybersecurityIRPMHero from "./Sub/CybersecurityIRPMHero";
import CybersecurityIRPMFeatures from "./Sub/CybersecurityIRPMFeatures";
import Link from "next/link";
import PageLayout from "../PageLayout";

const CYBERSECURITY_IRPM_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Having a safe and secure environment is a must but so is knowing what to do in case a successful cyber breach occurs. A cybersecurity Incident Response Plan provides utilities with practical guidance and critical considerations in preparing for a cyber incident. A cybersecurity Incident Response Plan enables staff to take swift, effective action.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight identifies the external response organizations—including law enforcement, information sharing organizations, and cyber mutual assistance groups—the utility might engage during cyber incident response, particularly for severe incidents that outpace utility resources and expertise. Our staff collaborates with your team to outline your incident response requirements as well as timelines in case of an emergency.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "Once your Cybersecurity Incident Response Plan is in place your organization will have a strategic plan in case an attack were to occur.",
  },
];

const CybersecurityIRPM = () => {
  React.useEffect(() => {
    document.title = "Cybersecurity Planning & Management | InfoSight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <CybersecurityIRPMHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Advisory Services / Security /
        Cybersecurity Incident Response Planning & Management
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" text-[#444444]">
              InfoSight&apos;s cybersecurity Incident Response Planning &
              Management will continuously ensure your environment is protected
              and your organization&apos;s data is secure as well as make sure
              you are up to date on industry compliance.
            </p>
            {/* <div className="flex gap-5 flex-col lg:flex-row lg:items-center lg:w-6/12 cursor-pointer">
              <Link href="#">
                <div className="flex gap-5 items-center">
                  <Image src={videoIcon} alt="" />
                  <p className=" text-[#8C340D] font-semibold">Learn More</p>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        {CYBERSECURITY_IRPM_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"CYBERSECURITY_DATA__" + i}
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
      <CybersecurityIRPMFeatures />
    </PageLayout>
  );
};

export default CybersecurityIRPM;
