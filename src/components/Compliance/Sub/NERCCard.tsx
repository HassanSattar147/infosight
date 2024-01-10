import Image from "next/image";
import React from "react";
import NERCImg from "../../../../public/compliance/nerc-img.png";
import infoImg1 from "../../../../public/compliance/nerc-info-img.png";
import documentIcon from "../../../../public/homepage/document-icon.svg";
import NERCFeatures from "./NERCFeatures";

const NERCCard = () => {
  return (
    <div>
      <div className="p-5 lg:px-20">
        <div className="flex flex-col gap-3 border-b-2 border-gray-300 pb-5">
          <Image src={NERCImg} alt="" className="w-full" />
          <p className="text-[#222222] py-1 px-2 text-xs lg:text-base ">
            No enterprise is completely immune to cyber-attacks or breaches, but
            a proactive, all-encompassing strategy can eliminate many of these
            threats. <br />
            <br /> Today, many Electrical Utilities and Cooperatives do not have
            the layered security controls in place to defend against or identify
            an attack in a timely fashion.InfoSight&apos;s CIP Gap Analysis
            addresses the &#x201C;Required Entities&#x201D; and requirements
            that fall under the NERC &#x2010; CIP. This Gap Analysis identifies
            gaps in security systems and processes and assists organizations in
            attaining total NERC &#x2010; CIP Compliance. Our information
            security assessors will work closely with your organization&apos;s
            information assurance, management and technical teams to strengthen
            the overall compliance posture of the organization. <br /> <br />{" "}
            Our Gap Analysis can also be expanded to provide recommendations to
            adequately address risks with a &#x201C;Remediation Roadmap&#x201D;.
          </p>
          <div className="flex items-start gap-3 lg:py-5">
            <Image src={documentIcon} alt="" className=" cursor-pointer" />
            <div>
              <h1 className="text-[#8C340D] font-semibold pb-1 cursor-pointer">
                Download Now
              </h1>
              <p className="lg:text-sm text-xs lg:w-7/12">
                Download InfoSight&apos;s Control Objective Outline to view the
                Control Objective our experts assess along with the most up to
                date NERC &#x2010; CIP Requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5">
          <div className="flex flex-col justify-between w-full">
            <h1 className="lg:text-2xl text-gray-900 font-semibold">
              What is NERC-CIP?
            </h1>
            <p className="text-gray-900 text-sm lg:text-base py-1">
              The North American Electric Reliability Corporation Critical
              Infrastructure Protection (NERC &#x2010; CIP) consists of 45
              requirements and 9 standards that are designed to secure assets
              for operating in North America&apos;s bulk electric system. If you
              are a Required Entity operating a Bulk Electric System (BES), you
              fall under CIP Compliance Requirements, meaning you must have an
              appropriate plan of action in place to ensure the security of all
              assets. BES Cyber Assets must be classified as High, Medium or Low
              Impact and meet all CIP Regulatory compliance and regulations. It
              is the responsibility of the Required Entity to safeguard BES
              Cyber Assets and prevent an attack that can do irreparable damage
              and lead to severe consequences, which are subject to penalties
              under federal law.
            </p>
          </div>
          <Image src={infoImg1} alt="" className="w-full rounded-lg" />
        </div>
      </div>
      <NERCFeatures />
    </div>
  );
};

export default NERCCard;
