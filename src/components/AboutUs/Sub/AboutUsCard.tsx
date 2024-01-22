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
          <p className="py-5">
            Our skilled team members predate the term “Cybersecurity” with
            decades of experience in “Information Security”!
            <br />
            <br />
            We are a Cyber Security and Risk Management Company that helps
            organizations become Cyberresllient through Continuous Threat
            Exposure Management (CTEM), Risk Management, and real-time 24x7
            Threat Monitoring and Incident Response.
            <br />
            <br />
            Based in Florida and serving clients in North America and the
            Caribbean.
          </p>
          {/* <p className="py-5">
            InfoSight has digitally transformed clients by achieving unheralded
            business outcomes through our{" "}
            <span className="text-gray-600 font-bold">
              Managed Security & Advisory Services.
            </span>{" "}
            From the <span className="text-gray-600 font-bold">Datacenter</span>{" "}
            to the <span className="text-gray-600 font-bold">Cloud</span>, We{" "}
            <span className="text-gray-600 font-bold">
              architect, secure and manage both IT and OT/ICS critical network
              data 24x7x365.
            </span>{" "}
            Our team delivers goal-oriented security assessments to help
            minimize cyber risk and meet compliance requirements by creating an{" "}
            <span className="text-gray-600 font-bold">
              enterprise cyber risk program.
            </span>
          </p> */}
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
