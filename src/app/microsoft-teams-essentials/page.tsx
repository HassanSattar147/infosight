"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Managed-XDR-img.png";
import infoImg1 from "/public/services-solutions/microsoft-challenge-image.webp";
import infoImg2 from "/public/services-solutions/microsoft-solution.png";
import infoImg3 from "/public/services-solutions/microsoft-outcome.png";

const MUCCCS_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Traditional phone systems are hardware-driven, inflexible and have a high cost of ownership. Also, they rarely support video and when they do it's unaffordable! Additionally, they are often proprietary so migrating from one platform to another requires a forklift!",
    isImgContained: true,
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "Microsoft Teams with a phone plan allows you to use your existing workstations to seamlessly have voice conversations with video and messaging all from the same platform, all at one time. You can also include contact center for larger environments",
    isImgContained: true,
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "A voice and video platform for today that supports your workforce no matter where they are!",
    isImgContained: true,
  },
];

const MUCCCS_FEATURES_DATA = [
  "Cloud-based phone system",
  "Includes phone number with metered outbound calling minutes from Microsoft",
  "Unlimited inbound calling",
  "Call queue, auto attendant, recording, transcription, transfer between devices",
  "Unlimited meetings and messaging",
  "File sharing, tasks, and polling",
  "10 GB of cloud storage per user",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Microsoft Teams Essentials With Voice | infoSight"
      heroImg={heroImg}
      heroTitle={"Microsoft Teams Essentials With Voice"}
      path={`Home / Services & Solutions / Managed Services / Managed Unified
      Communications, Collaboration & Connect Services`}
      overviewDescription={
        <>
          <p className="text-[#444444] text-justify">
            Using Microsoft Team Essentials with Microsoft Team Phone, you can
            power business growth by combining the collaboration tools your
            business needs with the advanced phone connectivity options to keep
            your employees connected.
          </p>
        </>
      }
      data={MUCCCS_DATA}
      dataLabel={"MUCCCS_DATA"}
      featuresData={MUCCCS_FEATURES_DATA}
      featureTitle={"Key Features"}
    />
  );
};

export default page;
