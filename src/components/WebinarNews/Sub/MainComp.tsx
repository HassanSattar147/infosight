// MainComponent.js
import React, { CSSProperties, useState } from "react";
import PopupModal from "./Popup";
import Image from "next/image";
import profileImg from "../../../../public/webinars/webinar-profile-img.png";
import chevronIcon from "../../../../public/homepage/right-chevron-icon.svg";

const NEWS_POPUP_DATA = [
  {
    img: profileImg,
    title: "Welcoming Chris Fridley, InfoSight's NEW COO to the Team!",
    description: [
      "As InfoSight's new Chief Operating Officer (COO) Chris will initially oversee our company's technical operations to ensure operations are optimized to deliver superior outcomes for our clients. Chris brings a wealth of IT experience to the table with over 25 years in the IT arena, including 18 years in the Managed IT services industry. Most recently, Chris served as Chief Operating Officer at Ntiva, an industry award winning Managed IT and Professional services organization, for nearly 4 years. There, Chris led efforts to integrate business and technical operations, creating a global strategy for centralized remote services and regional professional services in 4 major markets and multiple acquisitions. Early in his career, Chris earned his stripes in IT consulting with Computer Associates before transitioning to a Managed Services start-up company, United Messaging. Chris spent several years in the Federal sector working for BAE Systems where he led the network design for DOJ agencies including the US Marshals Service and the DOJ Tax Division. Chris joined mindSHIFT in 2004. Chris was a key leader in the mindSHIFT organization, and served several crucial roles, including VP of Network Operations. As part of the Senior management team, Chris contributed to the overall success and growth of the mindSHIFT organization, helping establish mindSHIFT as an industry leading Managed Services Provider catering to small to medium business organizations across multiple business verticals. Additionally, Chris was a key contributor and role player with company acquisitions and was personally involved in six company acquisitions, including mindSHIFT's acquisition by Best Buy and subsequent acquisition by Ricoh in 2014. Chris earned a BA in English Literature and Political Science from the University of Mary Washington. Chris spends most of his free time chasing around his 2-year-old son. When he's not wrangling a toddler, Chris enjoys Hiking, playing basketball and visiting boutique distilleries and wineries.",
    ],
  },
];

const MainComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="text-[#EA5715] font-semibold flex items-center gap-2 mt-5 lg:px-4"
      >
        Read Full Article
        <span>
          <Image src={chevronIcon} alt="Chevron Icon" />
        </span>
      </button>
      {NEWS_POPUP_DATA.map(({ img, title, description }, i) => {
        return (
          <PopupModal key={i} isOpen={isModalOpen} onClose={handleCloseModal}>
            <div className="rounded-lg border border-gray-300 flex flex-col lg:flex-row items-start lg:p-5 p-4">
              <Image src={img} alt="Webinar news profile image" />
              <div>
                <h1 className="text-[#2F5A7E] lg:px-4 text-xl lg:mt-0 mt-2">
                  {title}
                </h1>
                <p className="text-gray-500 text-sm lg:text-base mt-2 lg:px-4">
                  {description}
                </p>
              </div>
            </div>
          </PopupModal>
        );
      })}
    </div>
  );
};

export default MainComponent;
