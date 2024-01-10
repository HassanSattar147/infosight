"use client";
import React from "react";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import videoIcon from "../../../public/homepage/video-icon.svg";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import VirtualInformationHero from "./Sub/VirtualInformationHero";
import VirtualInformationFeatures from "./Sub/VirtualInformationFeatures";
import Link from "next/link";
import PageLayout from "../PageLayout";
import VideoPopup from "../Elements/VideoPopup";

const VIRTUAL_INFO_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Most organizations face budget constraints and/or their corporate structure doesn't support adding a full-time senior executive for information and cyber security management. This leaves many organizations at risk. Cyberattacks stop at nothing and no industry is immune.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "We provide your organization with a Virtual ISO who serves as an extension of your business and is responsible for making recommendations for the development, implementation and management of your organization's corporate security vision, strategy, and programs. Your appointed VISO is retained on a contractual basis and facilitates conversations that lead to executive critical decision-making related to information security issues. Our Tactical VISO Program offers an ISO in an advisory roe to review organizational security policies, processes and reporting. Whereas our Strategic VISO Program combines our Tactical VISO Program with added organizational oversight, mitigation activity tracking, resource assignments and risk assessment preparation utilizing our GRC (Governance, Risk & Compliance) Platform.",
  },
];

const VirtualInformation = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  React.useEffect(() => {
    document.title = "Virtual ISO | InfoSight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <VirtualInformationHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Advisory Services / Security / Virtual
        Information Security Officer (VISO)
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className="lg:w-11/12 text-[#444444]">
              Today, Information Security Officer (ISO) resources are stretched
              thin due to limited staff and tight cybersecurity budgets. The
              need for an ISO is critical but can be overlooked because of
              budget constraints. When a crisis hits, valuable response times
              can be wasted figuring out how to respond leaving your
              organization at risk of breached, data stolen or worse held for
              ransom. You need a trained expert around full-time.
            </p>
            <div className="flex gap-5 flex-col lg:flex-row lg:items-center lg:w-6/12 cursor-pointer">
              <Link
                href="https://www.infosightinc.com/pdf/InfoSight-VISO-2.pdf"
                target="_blank"
              >
                <div className="flex gap-5 items-center">
                  <Image src={documentIcon} alt="" />
                  <p className=" text-[#8C340D] font-semibold">
                    Download Overview
                  </p>
                </div>
              </Link>

              <div
                className="flex gap-5 items-center"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                <Image src={videoIcon} alt="" />
                <p className=" text-[#8C340D] font-semibold">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        {VIRTUAL_INFO_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"VIRTUAL_INFO_DATA__" + i}
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
      <VirtualInformationFeatures />
      <VideoPopup
        isModalOpen={isModalOpen}
        setModalOpen={setIsModalOpen}
        videoLink="https://www.infosightinc.com/Videos/InfoSight-VISO.mp4"
      />
    </PageLayout>
  );
};

export default VirtualInformation;
