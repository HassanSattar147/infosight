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
      "Today, AI-enabled social engineering is creating deep fakes so good they are nearly impossible to spot! These threats are using social media to launch sophisticated phishing attacks - so, it's not a matter of if, but when a customer clicks… With cyberattacks on the rise, it is critical that your online banking clients can spot phishing attacks whether they are via email, SMS or voice-drive. Additionally, FFIEC compliance requirements mandate all institutions have an online banking client cybersecurity awareness and training program. That's where we come in!",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's CSAP (Cyber Security Awareness Program) helps you educate your online banking customers about the dangers from bad actors with Videos, Newsletters, Email and Social Media and other vehicles. Our security awareness content is designed to protect your OLB customers from ACH & wire fraud, malware, phishing and more. Our convenient web portal makes it easy to create awareness and train your online banking customers with a complete library of ready-to-use content and materials.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "Our CSAP program will give you the tools you need to create awareness and check compliance boxes at the same time. It will leave your customers with the knowledge they need to be able to spot fraud and learn key skills to protect themselves from fraud.",
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
      heroTitle={"Online Banking Cyber Security Awareness Program"}
      path={`Home / Services & Solutions / Training & Education / Security Awareness Training for Online Banking`}
      overviewDescription={
        <p className="text-[#444444]">
          The FFIEC requires all financial institutions to provide security
          awareness training and education for their online banking clients, and
          that is exactly what our program is designed for - your OLB client
          base! Our targeted security awareness content for your both commercial
          and retail customers is “delivery-ready” and can be customized by our
          team or yours.
        </p>
      }
      downloadLink={`/contact`}
      downloadLinkLabel="Find out more!"
      hideDownloadIcon
      data={SECURITY_AWARENESS_DATA}
      dataLabel={"SECURITY_AWARENESS_DATA"}
      featuresData={SA_FEATURES_DATA}
      featureTitle={"The Tools You Need"}
    />
  );
};

export default page;
