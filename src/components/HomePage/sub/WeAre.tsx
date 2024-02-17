import Button from "@/components/Elements/Button";
import VideoPopup from "@/components/Elements/VideoPopup";
import Image from "next/image";
import React from "react";
import videoIcon from "../../../../public/homepage/video-icon.svg";
import aboutImg from "../../../../public/homepage/homepage-about-us-img.jpg";
import ContentContainer from "@/components/Elements/ContentContainer";

const WeAre = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <ContentContainer isBgPrimary>
        <div className="py-10 lg:py-20">
          <div className="flex flex-col items-center lg:flex-row gap-10">
            <div className="text-white lg:w-7/12 ">
              <h2 className="text-2xl lg:text-4xl font-semibold">
                Who are we?
              </h2>
              <p className="text-sm lg:text-lg my-8 text-justify">
                InfoSight is an innovative cybersecurity and risk management
                firm with over two decades of successful outcomes. Working
                within regulated and critical industries where security is
                crucial, makes us well suited to deliver high level security
                solutions.
                <br />
                <br />
                Organizations nationwide rely on us to design, build and manage
                their cybersecurity, allowing them to operate securely and at an
                optimum level. We provide the highest level of expertise, advice
                and support available anywhere.
              </p>
              {/* <Button text="Watch Video" onClick={handleOpenModal} /> */}
              <button
                onClick={handleOpenModal}
                className="bg-gray-100 hover:bg-gray-300 text-red-800 font-semibold flex items-center gap-2 px-3 py-2 rounded-lg"
              >
                <Image src={videoIcon} alt="" />
                Learn More
              </button>
            </div>
            <Image
              src={aboutImg}
              alt=""
              className="lg:w-5/12  border-2 border-gray-50 rounded-lg"
            />
          </div>
        </div>
      </ContentContainer>
      <VideoPopup
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        videoLink="/videos/Cyber-Risk-Mgt.mp4"
      />
    </>
  );
};

export default WeAre;
