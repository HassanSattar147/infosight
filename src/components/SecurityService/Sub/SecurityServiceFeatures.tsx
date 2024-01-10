import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const SS_FEATURES_DATA = [
  {
    img: tickImg,
    title: [
      "SOCaaS",
      "Managed MDR",
      "Managed EDR",
      "Managed XDR & SIEM",
      "VISO and VCISO",
      "DLP Solutions",
      "Access and Identity Management",
      "And more…",
    ],
  },
];

const SecurityServiceFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Key Service Features
        </h1>
        <div className="grid lg:grid-cols-4 gap-5 py-5 lg:py-10">
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt=""  />
            <p className="text-white font-semibold">SOCaaS</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt=""  />
            <p className="text-white font-semibold">Managed MDR</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt=""  />
            <p className="text-white font-semibold">Managed EDR</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt=""  />
            <p className="text-white font-semibold">Managed XDR & SIEM</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt=""  />
            <p className="text-white font-semibold">VISO and VCISO</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt=""  />
            <p className="text-white font-semibold">DLP Solutions</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt=""  />
            <p className="text-white font-semibold">
              Access and Identity Management
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt=""  />
            <p className="text-white font-semibold">And more…</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityServiceFeatures;
