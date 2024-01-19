"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Security-Awareness-Training-Onlin-Banking-img.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const SECURITY_AWARENESS_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Today financial services providers are extremely busy and don't have the time to train employees on the importance of security awareness. This could lead to accidental internal leaks, clicking on links that they shouldn't and giving out confidential information. All of these instances could hurt your banks overall security posture and cost your company thousands to fix.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      " InfoSight's CSAP (Cybersecurity Awareness Program) helps you educate your online banking customers about the dangers from bad actors that create ACH & wire fraud, malware, phishing and more. Our convenient web portal makes it easy to create awareness and train your online banking customers with a complete library of ready-to-use content and materials.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "InfoSight's security experts refresh the content on our portal weekly to ensure you are getting the latest and greatest information. We offer a hands-on approach and a hands-off approach where your organization can pick and choose where you need our assistance or if you want to take the reins yourself! Our CSAP portal will leave your employees with the knowledge they need to be able to spot a cybercriminal and learn key tactics on how to avoid breaches.",
  },
];

const SA_FEATURES_DATA = [
  "Cybercrime Defense Strategies",
  " Cybersecurity Tools & Checklists for Business Customers",
  "Webinars & Training Presentations",
  "Newsletters",
  "Quick Clip Videos",
  "Social Media Posts",
  "Email Campaigns",
  "Posters and Statement Stuffers",
  "Website Content",
  "Website Security Templates & more!",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Bank Security Awareness Training | (877) 557-9703"
      heroImg={heroImg}
      heroTitle={"Security Awareness Training for Online Banking"}
      path={`Home / Services & Solutions / Training & Education / Security Awareness
      Training for Online Banking`}
      overviewDescription={
        <p className="text-[#444444]">
          Your clients play a key role in protecting their own confidential but
          sometimes they can be their own worst enemy. With cyberattacks on the
          rise it is critical that your online banking clients are aware how to
          prevent data breaches and cybercrime. Additionally, FFIEC compliance
          requirements mandate all institutions have an online banking client
          cybersecurity awareness and training program. That&apos;s where we
          come in!
        </p>
      }
      downloadLink={`contact`}
      downloadLinkLabel="Book a Demo Now"
      useVideoIconInDownloadbtn
      data={SECURITY_AWARENESS_DATA}
      dataLabel={"SECURITY_AWARENESS_DATA"}
      featuresData={SA_FEATURES_DATA}
      featureTitle={"The Tools You Need"}
    />
  );
};

export default page;
