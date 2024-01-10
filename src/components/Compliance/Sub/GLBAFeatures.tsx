import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const GLBA_FEATURES_DATA = [
  "Evaluating the processes by which the institution monitors and tests the effectiveness of the institution's information security-related controls and their relationship with its Institution's information security risk assessment",
  "Meeting GLBA requirements",
  "Reviewing current policies and procedures regarding privacy disclosures",
  "Evaluating the Board of Directors approval and oversight of the institution's ISP and supervision of its development, implementation and maintenance, including a review of management reports concerning the effectiveness of the ISP",
  "Building security & compliance reports in a language your C-Suite and Board will understand",
  "Addressing the protection of NPI and notification to the institution of any information security breaches.",
];

const GLBAFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Key Features
        </h1>
        <div className="grid lg:grid-cols-2 gap-5 py-5 lg:py-10">
          {GLBA_FEATURES_DATA.map((el, i) => {
            return (
              <div
                key={i}
                className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md"
              >
                <Image src={tickImg} alt=""  />
                <p className="text-white font-semibold">{el}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GLBAFeatures;
