import ContentContainer from "@/components/Elements/ContentContainer";
import React from "react";

const CareerCard = () => {
  return (
    <ContentContainer isBgPrimary>
      <div className=" py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row">
          <div className="text-white">
            <h3 className="text-2xl lg:text-4xl text-center font-semibold pr-10 lg:pr-0">
              About Us
            </h3>
            <p className="text-sm lg:text-xl mt-5">
              InfoSight is an innovative cybersecurity company. Years of working
              with highly regulated customers where information security is
              mature makes InfoSight well suited to accelerate growth where
              commercial customers demand top level security. Organizations
              nationwide rely on InfoSight to design, protect, manage and advise
              on their network security, allowing them to maximize their
              investment in every circumstance. InfoSight provides the highest
              level of expertise, support, and customer service available.
            </p>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default CareerCard;
