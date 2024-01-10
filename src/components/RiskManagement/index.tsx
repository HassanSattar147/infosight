"use client";
import React from "react";
import RiskMangementHero from "./Sub/RiskMangHero";
import RiskManagementFeatures from "./Sub/RiskManagementFeatures";
import RiskMangementInfo from "./Sub/RiskMangementInfo";
import PageLayout from "../PageLayout";

const RiskManagement = () => {
  React.useEffect(() => {
    document.title = "Enterprise Risk Management | InfoSight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <RiskMangementHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Advisory Services / Risk Management /
        Enterprise Risk Management
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-60 justify-between">
            <p>
              InfoSight takes a holistic approach to risk management by
              developing strategies to mitigate risks at an enterprise level
              across the entire organization. InfoSight&apos;s experts work with
              you and your risk management team leveraging a risk-based approach
              to help you make well-informed risk management decisions that
              align with your business operations. This approach assists in
              justifying investments in the risk management process.
            </p>
          </div>
        </div>
      </div>
      <RiskMangementInfo />
      <RiskManagementFeatures />
    </PageLayout>
  );
};

export default RiskManagement;
