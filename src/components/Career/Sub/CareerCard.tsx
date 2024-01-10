import React from "react";

const CareerCard = () => {
  return (
    <div className="bg-[#3B719F] py-10 px-8 lg:p-20">
      <div className="flex flex-col lg:flex-row">
        <div className="text-white">
          <h1 className="text-2xl lg:text-4xl text-center font-semibold pr-10 lg:pr-0">
            About Us
          </h1>
          <p className="text-sm lg:text-xl mt-5">
            InfoSight is an innovative cybersecurity company. Years of working
            with highly regulated customers where information security is mature
            makes InfoSight well suited to accelerate growth where commercial
            customers demand top level security. Organizations nationwide rely
            on InfoSight to design, protect, manage and advise on their network
            security, allowing them to maximize their investment in every
            circumstance. InfoSight provides the highest level of expertise,
            support, and customer service available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
