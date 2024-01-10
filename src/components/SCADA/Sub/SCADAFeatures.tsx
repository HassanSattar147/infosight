import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const SCADA_FEATURES_DATA = [
  "Reduce the risk of a successful attack before it occurs",
  "Identify security issues beyond the capability of automated tools",
  "Prioritize your risks and quickly take the right preventative measures",
  "Help meet compliance requirements before deadlines",
];

const SCADAFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Key Benefits
        </h1>
        <div className="grid lg:grid-cols-3 gap-5 py-5 lg:py-10">
          {SCADA_FEATURES_DATA.map((sfd, i) => {
            return (
              <div
                key={"SCADA_FEATURES_DATA__" + i}
                className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md"
              >
                <Image src={tickImg} alt="" />
                <p className="text-white font-semibold">{sfd}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SCADAFeatures;
