import React from "react";
import Image from "next/image";
// import heroImg from "../../../../public/homepage/hero-img-desktop.svg";
import heroImg from "../../../../public/homepage/hero-map-bg.png";
import heroImgMob from "../../../../public/homepage/Mask group.png";
import Button from "../../Elements/Button";
import NavBar from "../../Elements/NavBar";
import Link from "next/link";
import PopupModal from "@/components/WebinarNews/Sub/Popup";
import {
  btnStyles,
  wrapperStyles,
  containerStyles,
} from "@/components/utlis/constants";
import "@/styles/landingpage.css";
import VideoPopup from "@/components/Elements/VideoPopup";

const HeroSection = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div
        className="landingpage-hero-section"
        style={{
          backgroundImage: `url(${heroImg.src})`,
        }}
      >
        <div className="col-left">
          <h1>InfoSight Network & Cyber Security Training</h1>
          <h2>
            The experience-based knowledge you need to guard against Cyber
            Attacks and simplify Risk Management.
          </h2>
          <Button text="Watch Video" onClick={handleOpenModal} />
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

export default HeroSection;
