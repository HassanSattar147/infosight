import React from "react";
import JobCard from "./JobCard";
import ContentContainer from "@/components/Elements/ContentContainer";

const PositionCard = () => {
  return (
    <ContentContainer>
      <div className="py-5 lg:py-10 ">
        <div>
          <h1 className="text-2xl lg:text-4xl font-semibold">Open Positions</h1>
          <p className="text-gray-500 py-2 text-sm lg:text-base">
            InfoSight is an equal opportunity employerwe do not discriminate on
            the basis of disability, race, creed, color,sex, sexual orientation,
            religion, age, national origin, ancestry or any other reason.We are
            committed to hiring a diverse work team.
          </p>
        </div>
        <div>
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
            title="Account Executives and S/BDRs "
            description="Full-time"
            tag="Sales"
          />
          <JobCard
            title="Penetration Tester"
            description="Full-time/Remote"
            tag="Testing & QA"
          />
        </div>
      </div>
    </ContentContainer>
  );
};

export default PositionCard;
