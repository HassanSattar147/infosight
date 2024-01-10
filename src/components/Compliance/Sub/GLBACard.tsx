import Image from "next/image";
import React from "react";
import GLBAImg from "../../../../public/compliance/glba-img.png";
import infoImg1 from "../../../../public/compliance/glba-info-img.png";
import GLBAFeatures from "./GLBAFeatures";

const GLBACard = () => {
  return (
    <div>
      <div className="p-5 lg:px-20">
        <div className="flex flex-col gap-3 border-b-2 border-gray-300 pb-5">
          <Image src={GLBAImg} alt="" className="w-full" />
          <p className="text-[#222222] py-1 px-2 text-xs lg:text-base ">
            InfoSight provides GLBA Risk Assessments to review the GLBA Program
            in your institution based upon FFIEC Standards. Our assessments
            conform to FFIEC regulatory requirements, statutory directives and
            industry best practices which the institution operates under.
            Throughout the process, InfoSight&apos;s assessors will work closely
            with your organization&apos;s risk and information security teams to
            gain a clear view of the institution&apos;s risk relative to GLBA
            compliance requirements.
          </p>
        </div>
        <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5">
          <div className="flex flex-col justify-between w-full">
            <h1 className="lg:text-2xl text-gray-900 font-semibold">
              What is GLBA?
            </h1>
            <p className="text-gray-900 text-sm lg:text-base py-1">
              The Gramm-Leach-Bliley Act (GLBA), is in place to assure the
              confidentiality and security of all customer records and
              information. GLBA guidelines establish administrative, physical
              and technical safeguards to ensure security around unauthorized
              access and unauthorized use of personal information. Why financial
              intuitions care about it? Financial institutions should take GLBA
              guidelines very seriously because it is their responsibility to
              secure personal information from slipping into the wrong hands. It
              is mandatory for financial institutions to have a written security
              program and strictly implement, maintain and manage the written
              security program to ensure a safe zone for customer information.
            </p>
          </div>
          <Image src={infoImg1} alt="" className="w-full rounded-lg" />
        </div>
      </div>
      <GLBAFeatures />
    </div>
  );
};

export default GLBACard;
