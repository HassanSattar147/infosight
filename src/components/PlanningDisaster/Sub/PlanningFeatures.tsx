import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const PLANNING_FEATURES_DATA = [
  "Step 1: Risk Assessment",
  "Step 2: Business Impact Analysis",
  "Step 3: Technology Strategy",
  "Step 4: Documentation",
  "Step 5: Testing",
];

const PlanningFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Our 5 Step Approach
        </h1>
        <div className="grid lg:grid-cols-3 gap-5 py-5 lg:py-10">
          {PLANNING_FEATURES_DATA.map((el, i) => {
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

export default PlanningFeatures;
