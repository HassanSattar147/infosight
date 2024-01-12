import Button from "@/components/Elements/Button";
import VideoPopup from "@/components/Elements/VideoPopup";
import Image from "next/image";
import React from "react";
import aboutImg from "../../../../public/homepage/homepage-about-us-img.png";

const WeAre = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <div className="bg-[#3B719F] p-8 lg:p-20">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="text-white">
            <h1 className="text-2xl lg:text-4xl font-semibold">Who are we?</h1>
            <p className="text-sm lg:text-lg my-8">
              InfoSight is an innovative cybersecurity company. Years of working
              with highly regulated customers where information security is
              mature makes InfoSight well suited to accelerate growth where
              commercial customers demand top level security.
              <br />
              <br />
              Organizations nationwide rely on InfoSight to design, protect,
              manage and advise on their network security, allowing them to
              maximize their investment in every circumstance. InfoSight
              provides the highest level of expertise, support, and customer
              service available.
            </p>
            <Button text="Watch Video" onClick={handleOpenModal} />
          </div>
          <Image src={aboutImg} alt="" />
        </div>
      </div>
      <VideoPopup
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        videoLink="https://www.infosightinc.com/Videos/infosight-video.mp4"
      />
    </>
  );
};

export default WeAre;
