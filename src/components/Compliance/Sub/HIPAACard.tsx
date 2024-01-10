import Image from "next/image";
import React from "react";
import HIPAAImg from "../../../../public/compliance/hipaa-img.png";
import infoImg1 from "../../../../public/compliance/hipaa-info-img.png";
import documentIcon from "../../../../public/homepage/document-icon.svg";
import HIPAAFeatures from "./HIPAAFeatures";

const HIPAACard = () => {
  return (
    <div>
      <div className="p-5 lg:px-20">
        <div className="flex flex-col gap-3 border-b-2 border-gray-300 pb-5">
          <Image src={HIPAAImg} alt="" className="w-full" />
          <p className="text-[#222222] py-1 px-2 text-xs lg:text-base ">
            InfoSight provides HIPAA Compliance Reviews, Gap Analysis and Risk &
            Security Assessments to evaluate your currentenvironment and
            determine whether your organization is in the compliance with
            current HIPAA standards. <br /> <br />
            Our assessments can also test your environment security, detecting
            any known vulnerabilities to protect against potentialbreaches and
            provide remediation recommendations and instructions to harden your
            network.
          </p>
          <div className="flex items-start gap-3 lg:py-5">
            <Image src={documentIcon} alt="" className=" cursor-pointer" />
            <div>
              <h1 className="text-[#8C340D] font-semibold pb-1 cursor-pointer">
                Download Now
              </h1>
              <p className="lg:text-sm text-xs lg:w-7/12">
                Download InfoSight&apos;s Five Security Components for Risk
                Management Solution Brief to learn more aboutsecurity mitigation
                strategies and review examples of potential vulnerabilities.
              </p>
            </div>
          </div>
        </div>
        <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5">
          <div className="flex flex-col justify-between w-full">
            <h1 className="lg:text-2xl text-gray-900 font-semibold">
              What is HIPAA Compliance?
            </h1>
            <p className="text-gray-900 text-sm lg:text-base py-1">
              HIPAA or the Health Insurance Portability and Accountability Act
              is in place to protect confidential information, prevent fraud and
              protect the allowable uses and disclosures of personal
              information. Organizations are responsible for ensuring that their
              affiliates and services providers information is secure from and
              protected. In addition, organizations must comply with the
              standards of their Business Associate Agreements (BAA).
            </p>
          </div>
          <Image src={infoImg1} alt="" className="w-full rounded-lg" />
        </div>
      </div>
      <HIPAAFeatures />
    </div>
  );
};

export default HIPAACard;
