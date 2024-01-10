import ButtonGrp from "@/components/Elements/ButtonGrp";
import React from "react";
import WebCard from "./WebCard";

const WebDemand = () => {
  return (
    <div className="p-5 lg:px-20">
      <div className="flex justify-between items-center">
        <h1 className="text-gray-900 text-lg lg:text-4xl font-semibold ">
          Webinars on Demand
        </h1>
      </div>
      <WebCard />
    </div>
  );
};

export default WebDemand;
