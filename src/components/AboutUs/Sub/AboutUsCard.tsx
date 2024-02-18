import Image from "next/image";
import React from "react";
import storyIcon from "../../../../public/story-icon.png";
import ContentContainer from "@/components/Elements/ContentContainer";

const AboutUsCard = () => {
  return (
    <ContentContainer>
      <div className="lg:pb-20 pb-10">
        <div className="p-5 border border-gray-300 rounded-2xl">
          <div className="flex items-center lg:items-start lg:flex-col gap-5">
            <Image src={storyIcon} alt="" />
            <p className="text-[30px]">Established in 1998</p>
          </div>
          <br />
          <p className="">
            We are a Cyber Security and Risk Management company that provides
            assurance and managed security solutions to organizations
            nationwide. By developing a continuous threat exposure management
            strategy, we help organizations reduce their attack surface and
            protect digital assets from theft and unauthorized access.
          </p>
          <br />
          <p>
            Our skilled team members predate the term “Cybersecurity” with
            decades of experience in “Information Security”! Our experience
            within Regulated Industry spans over two and half decades brining
            the experience-based knowledge that helps organizations become Cyber
            Resilient.
          </p>
          <br />
          <p>
            With our innovative approach to cyber risk management, organizations
            rely on us to design, build, and manage their cybersecurity,
            allowing them to operate securely and achieve an optimized state of
            cyber defense. Clients depend on us 24x7x365 to provide the highest
            level of advice, operational security, and incident response.
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
      </div>
    </ContentContainer>
  );
};

export default AboutUsCard;

// Established in 1998

// Our skilled team members predate the term “Cybersecurity” with decades of experience in “Information Security”!

// We are a Cyber Security and Risk Management Company that helps organizations become Cyberresllient through Continuous Threat Exposure Management (CTEM), Risk Management, and real-time 24x7 Threat Monitoring and Incident Response.

// Based in Florida and serving clients in North America and the Caribbean.
