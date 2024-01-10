import Image from "next/image";
import React from "react";
import PCIImg from "../../../../public/compliance/pc-dss-img.png";
import infoImg1 from "../../../../public/compliance/pc-dss-info-img1.png";
import infoImg2 from "../../../../public/compliance/pc-dss-info-img2.png";
import PCIFeatures from "./PCIFeatures";

const PCIDSS_DADA = [
  {
    img: infoImg1,
    title: "What is PCI DSS?",
    description:
      "The Payment Card Industry Data Security Standard (PCI DSS) is a set of security compliances to ensure credit and debit card information is safe from theft.You should be performing PCI Gap Analysis to review your IT infrastructure, network design, application architecture and policies to help you identify any gaps between your current security posture and PCI requirements.",
  },
  {
    img: infoImg2,
    title: "How can InfoSight help?",
    description:
      "As a part of the PCI DSS Compliance Process, most organizations  are wise to assess their readiness prior to an official audit. It  is an extremely valuable exercise that puts your organization in  the best possible position for a successful audit and a sound  security program. But finding vulnerabilities is only the first  step toward addressing associated risks. Addressing these risks  with a sound remediation roadmap is arguably the most critical  step in the process. InfoSight can perform an initial PCI Gap Analysis to review your  IT infrastructure, network design, application architecture and  policies to help you identify any gaps between your current  security posture and PCI requirements. InfoSight provides a  variety of tools, guidance, training resources and other IT  security services to assist organizations seeking to achieve PCI  compliance. We can help you build and maintain a high security  posture, help you understand what is involved in PCI DSS  compliance, and assist in developing policies and practices that  best fit your needs.",
  },
];

const PCIDSSCard = () => {
  return (
    <div>
      <div className="p-5 lg:px-20">
        <div className="flex flex-col gap-3">
          <Image src={PCIImg} alt="" className="w-full" />

          <p className="text-[#222222] py-1 px-2 text-xs lg:text-base border-b-2 border-gray-300 pb-5">
            InfoSight&apos;s comprehensive enterprise security solutions provide
            the products and services necessary to comply with PCI DSS
            requirements. We can assess the ongoing security of your cardholder
            data environment, and protect your network against security
            breaches. We simplify PCI DSS compliance and security with flexible
            options that meet your specific needs and protect your business.
          </p>
        </div>
        {PCIDSS_DADA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"PCIDSS_DADA__" + i}
              className={`py-5 lg:py-10 flex flex-col-reverse lg:flex-row justify-between gap-5 +
              ${i % 2 === 1 ? " lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              <Image src={img} alt="" className="w-full rounded-lg" />
              <div className="flex flex-col justify-between w-full">
                <h1 className="lg:text-2xl text-gray-900 font-semibold">
                  {title}
                </h1>
                <p className="text-gray-900 text-sm lg:text-base py-1">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <PCIFeatures />
    </div>
  );
};

export default PCIDSSCard;
