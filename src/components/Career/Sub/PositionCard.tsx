import React from "react";
import JobCard from "./JobCard";

const PositionCard = () => {
  return (
    <div className="p-5 lg:py-10 lg:px-20">
      <div>
        <h1 className="text-2xl lg:text-4xl font-semibold">Open Positions</h1>
        <p className="text-gray-500 py-2 text-sm lg:text-base">
          InfoSight is an equal opportunity employerwe do not discriminate on
          the basis of disability, race, creed, color,sex, sexual orientation,
          religion, age, national origin, ancestry or any other reason.We are
          committed to hiring a diverse work team.
        </p>
      </div>
      <div className="flex gap-5 py-5">
        <button className="text-[#274A68] font-semibold text-sm lg:text-base bg-[#E9F0F7] px-4 py-1 rounded-md hover:bg-gray-200">
          All
        </button>
        <button className="text-gray-600 font-semibold text-sm lg:text-base lg:hover:text-gray-500 ">
          Full-time Jobs
        </button>
        <button className="text-gray-600 font-semibold text-sm lg:text-base lg:hover:text-gray-500 ">
          Part-time Jobs
        </button>
      </div>
      <div >
        <div className="flex flex-col gap-1 py-5">
          <label htmlFor="" className="text-gray-700 text-sm">
            Search Job or Keyword
          </label>
          <input
            type="text"
            placeholder="Type here..."
            className="text-gray-300 p-3 rounded-xl border border-gray-300"
          />
        </div>
        <JobCard
          title="SNOC Analyst"
          description="Full-time"
          tag="Cybersecurity"
        />
        <JobCard
          title="Sales Professional"
          description="Part-time"
          tag="Sales"
        />
        <JobCard
          title="Penetration Tester"
          description="Full-time/Remote"
          tag="Testing & QA"
        />
      </div>
    </div>
  );
};

export default PositionCard;
