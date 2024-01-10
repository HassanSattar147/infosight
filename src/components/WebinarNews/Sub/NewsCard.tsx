import Image from "next/image";
import React from "react";
import profileImg from "../../../../public/webinars/webinar-profile-img.png";
import chevronIcon from "../../../../public/homepage/right-chevron-icon.svg";
import MainComponent from "./MainComp";

const NEWS_PROFILE_DATA = [
  {
    img: profileImg,
    title: "Welcoming Chris Fridley, InfoSight's NEW COO to the Team!",
    description:
      "As InfoSight's new Chief Operating Officer (COO) Chris will initially oversee our company's technical operations to ensure operations are optimized to deliver superior outcomes for our clients.",
  },
  {
    img: profileImg,
    title: "Welcoming Chris Fridley, InfoSight's NEW COO to the Team!",
    description:
      "As InfoSight's new Chief Operating Officer (COO) Chris will initially oversee our company's technical operations to ensure operations are optimized to deliver superior outcomes for our clients.",
  },
];

const NewsCard = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-7 py-10">
      {NEWS_PROFILE_DATA.map(({ img, title, description }, i) => {
        return (
          <div
            key={`NEWS_PROFILE_DATA__${i + 1}`}
            className="rounded-lg border border-gray-300 flex flex-col lg:flex-row items-start p-5"
          >
            <Image src={img} alt="" className="h-[177px]" />
            <div>
              <h1 className="text-[#2F5A7E] lg:px-4 text-xl lg:mt-0 mt-2">
                {title}
              </h1>
              <p className="text-gray-500 text-sm lg:text-base mt-2 lg:px-4">
                {description}
              </p>
              <MainComponent />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCard;
