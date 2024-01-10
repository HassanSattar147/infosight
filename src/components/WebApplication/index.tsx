"use client";
import React from "react";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import WebAppHero from "./Sub/WebAppHero";
import WebAppFeatures from "./Sub/WebAppFeatures";
import PageLayout from "../PageLayout";
import Link from "next/link";

const WebApplication = () => {
  React.useEffect(() => {
    document.title = "Web Application Testing - InfoSight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <WebAppHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Advisory Services / Security / Web
        Application Assessments
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className="text-[#444444]">
              InfoSight&apos;s Web Application Assessments provide the most
              complete and effective suite of security testing to protect
              against a wide range of vulnerabilities and sophisticated hacker
              attacks. Our comprehensive testing will provide both detailed
              technical remediation reporting for internal teams, and an
              executive-level report that can be shared to validate your
              applications&apos; security.
            </p>
            <div className="flex gap-5 flex-col lg:flex-row lg:items-center lg:w-8/12 cursor-pointer">
              <Link
                href={
                  "https://www.infosightinc.com/pdf/InfoSight-Web-Application-Testing.pdf"
                }
                target="_blank"
              >
                <div className="flex gap-5 items-center">
                  <Image src={documentIcon} alt="" />
                  <p className=" text-[#8C340D] font-semibold">
                    Download Overview
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5">
          <div className="flex flex-col justify-between w-full">
            <h1 className="lg:text-2xl text-gray-900 font-semibold ">
              Our Methodology
            </h1>
            <h4 className="text-gray-900 text-sm lg:text-base font-semibold py-1 pt-2 text-justify">
              Design & Develop
            </h4>
            <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
              Plays an important role in building strong applications.
              We&apos;ll assess your run time environment and check for security
              flaws introduced during coding.
            </p>
            <h4 className="text-gray-900 text-sm lg:text-base pt-3 font-semibold pb-1 text-justify">
              Test & Implement
            </h4>
            <p className="text-gray-900 text-sm lg:text-base pb-3 text-justify">
              One of the most important functions in the SDLC. It allows us to
              verify if security controls and requirements are fulfilled
              correctly before implementing and promoting applications to
              production-level. We employ a broad security assessment of your
              application before hitting production.
            </p>
            <h4 className="text-gray-900 text-sm lg:text-base font-semibold py-1 text-justify">
              Maintain & Check
            </h4>
            <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
              Continuous and periodic security assessments are required in
              several different industry regulations and is also a key function
              in your SDLC. Making sure that changes to your web application
              will not break its security maturity level is important to manage
              vulnerabilities and security risks.
            </p>
          </div>
          <Image src={infoImg1} alt="" className="w-full rounded-lg" />
        </div>
      </div>
      <WebAppFeatures />
    </PageLayout>
  );
};

export default WebApplication;
