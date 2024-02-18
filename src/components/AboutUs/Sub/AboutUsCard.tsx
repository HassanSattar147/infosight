import Image from "next/image";
import React, { useState } from "react";
import storyIcon from "../../../../public/story-icon.png";
import ContentContainer from "@/components/Elements/ContentContainer";
import Link from "next/link";
import VideoPopup from "@/components/Elements/VideoPopup";
import docIcon from "../../../../public/homepage/document-icon.svg";
import videoIcon from "../../../../public/homepage/video-icon.svg";

const AboutUsCard = () => {
  const [isAboutUsPopupOpen, setIsAboutUsPopupOpen] = useState(false);
  return (
    <>
      <ContentContainer>
        <div className="lg:pb-20 pb-10">
          <div className="p-5 border border-gray-300 rounded-2xl">
            <div className="flex items-center lg:items-start lg:flex-col gap-5">
              <Image src={storyIcon} alt="" />
              <p className="text-[30px]">Established in 1998</p>
            </div>
            <br />
            <p>
              We are a Cyber Security and Risk Management company that provides
              assurance and managed security solutions to organizations across
              the Americas. By developing a continuous threat exposure
              management strategy, we help organizations reduce their attack
              surface and protect digital assets from theft and unauthorized
              access.
            </p>
            <br />
            <p>
              Our skilled team predates the term “Cybersecurity” with decades of
              experience in “Information Security”! Our experience within
              Regulated Industry and Critical Infrastructure spans over 25 years
              bringing the experience-based knowledge that helps organizations
              become Cyber Resilient.
            </p>
            <br />
            <p>
              With our innovative approach to cyber risk management,
              organizations rely on us to design, build, and manage their
              cybersecurity, allowing them to operate securely and achieve an
              optimized state of cyber defense. Clients depend on us 24x7x365 to
              provide the highest level of advice, operational security, and
              incident response.
            </p>
            <br />
            {/* <p>
              Based in Florida and serving clients in the Americas.{" "}
              <span className="text-red-600">
                Cyber Risk Management, 24x7 Threat Monitoring and Incident
                Response.
              </span>
            </p> */}
          </div>
          {/* <div className="lg:p-10 p-5 bg-gray-100">
          <h3 className="text-2xl lg:text-4xl mt-10 mb-5 font-semibold">
            Overview
          </h3>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-28">
              <div className="w-full mb-5 text-justify">
                <p>
                  Our skilled team members predate the term “Cybersecurity” with
                  decades of experience in “Information Security”! Our
                  experience within Regulated Industry spans over two and half
                  decades brining the experience-based knowledge that helps
                  organizations become Cyber Resilient.
                </p>
                <br />
                <p>
                  With our innovative approach to cyber risk management,
                  organizations rely on us to design, build, and manage their
                  cybersecurity, allowing them to operate securely and achieve
                  an optimized state of cyber defense. Clients depend on us
                  24x7x365 to provide the highest level of advice, operational
                  security, and incident response.
                </p>
                <br />
                <p>
                  Based in Florida and serving clients in the Americas.{" "}
                  <span className="text-red-600">
                    Cyber Risk Management, 24x7 Threat Monitoring and Incident
                    Response.
                  </span>
                </p>
              </div>
              <div className="flex items-start  flex-col lg:gap-10 gap-4 mb-6 lg:w-3/12">
                <Link
                  href="/pdfs/InfoSight Penetration Testing.pdf"
                  target="_blank"
                >
                  <div className="flex items-center gap-3 cursor-pointer">
                    <Image src={docIcon} alt="" className="" />
                    <p className="text-[#8C340D] font-semibold">
                      Download Overview
                    </p>
                  </div>
                </Link>
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => {
                    setIsAboutUsPopupOpen(true);
                  }}
                >
                  <Image src={videoIcon} alt="" className="" />
                  <p className="text-[#8C340D] font-semibold">Watch Video</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </ContentContainer>

      {/* <VideoPopup
        isModalOpen={isAboutUsPopupOpen}
        setModalOpen={setIsAboutUsPopupOpen}
        videoLink="/videos/SOCaaS.mp4"
      /> */}
    </>
  );
};

export default AboutUsCard;
