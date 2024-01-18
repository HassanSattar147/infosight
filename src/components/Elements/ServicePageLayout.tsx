import { GenericElements } from "@/types";
import Image, { StaticImageData } from "next/image";
import ImageTextSection, { ITextImageData } from "./ImageTextSection";
import ContentContainer from "./ContentContainer";
import React from "react";
import PageLayout from "../PageLayout";
import Breadcrumbs from "./Breadcrumbs";
import Link from "next/link";
import VideoPopup from "./VideoPopup";
import documentIcon from "/public/homepage/document-icon.svg";
import videoIcon from "/public/homepage/video-icon.svg";
import tickImg from "/public/industries/industries-tick-circle-icon.svg";

interface IServicesPageProps {
  pageTitle: string;
  heroImg: StaticImageData;
  heroTitle: string;
  heroDescription?: string;
  overviewDescription: string | GenericElements;
  downloadLink?: string;
  videoLink?: string;
  data: ITextImageData[];
  dataLabel: string;
  path: string;
  featuresData: string[];
  featuresDescription?: string | GenericElements;
  otherFeaturesData?: string[];
  featureTitle?: string;
  otherFeatureTitle?: string;
}

const ServicePageLayout = ({
  pageTitle,
  heroImg,
  heroTitle,
  heroDescription,
  overviewDescription,
  downloadLink,
  videoLink,
  path,
  featuresData,
  featuresDescription,
  otherFeaturesData,
  featureTitle,
  otherFeatureTitle,
  data,
  dataLabel,
}: IServicesPageProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const heroProps = React.useMemo(
    () => ({ heroImg, heroTitle, heroDescription }),
    [heroImg, heroTitle, heroDescription]
  );

  const overviewProps = React.useMemo(
    () => ({ setIsModalOpen, overviewDescription, downloadLink, videoLink }),
    [setIsModalOpen, overviewDescription, downloadLink, videoLink]
  );

  React.useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <PageLayout hideWeProvide hideOurServices>
        <Hero {...heroProps} />
        <Breadcrumbs path={path} />
        <Overview {...overviewProps} />
        <ImageTextSection data={data} dataLabel={dataLabel} />
        <Features
          data={featuresData}
          title={featureTitle}
          description={featuresDescription}
        />
        <Features data={otherFeaturesData} title={otherFeatureTitle} isOther />
      </PageLayout>

      {videoLink && (
        <VideoPopup
          isModalOpen={isModalOpen}
          setModalOpen={setIsModalOpen}
          videoLink={videoLink}
        />
      )}
    </>
  );
};

export default ServicePageLayout;

function Hero({
  heroImg,
  heroTitle,
  heroDescription,
}: {
  heroImg: StaticImageData;
  heroTitle: string;
  heroDescription?: string;
}) {
  return (
    <ContentContainer bgImage={heroImg}>
      <div className="md:min-h-[40vh] min-h-[0vh] flex justify-center items-center md:justify-start px-5 md:px-2 lg:px-0 py-5">
        <div className="flex flex-col items-start">
          <h1 className="text-white text-center md:text-[55px] text-4xl font-extrabold leading-tight">
            {heroTitle}
          </h1>
          <p className="text-white text-center md:text-xl text-lg ">
            {heroDescription}
          </p>
        </div>
      </div>
    </ContentContainer>
  );
}

function Overview({
  setIsModalOpen,
  overviewDescription,
  downloadLink,
  videoLink,
}: {
  setIsModalOpen: (x: boolean) => void;
  overviewDescription: string | GenericElements;
  downloadLink?: string;
  videoLink?: string;
}) {
  return (
    <ContentContainer>
      <h3 className="px-5 md:px-0 mb-5 text-2xl lg:text-4xl font-semibold">
        Overview
      </h3>
      <div className="px-5 md:px-0 ">
        <div className="border-b border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            {overviewDescription}
            {(downloadLink || videoLink) && (
              <div
                className={`flex gap-5 flex-col lg:flex-row lg:items-center cursor-pointer lg:w-${
                  downloadLink && videoLink ? "6" : "8"
                }/12`}
              >
                {downloadLink && (
                  <Link href={downloadLink} target="_blank">
                    <div className="flex gap-5 items-center">
                      <Image src={documentIcon} alt="" />
                      <p className=" text-[#8C340D] font-semibold">
                        Download Overview
                      </p>
                    </div>
                  </Link>
                )}
                {videoLink && (
                  <div
                    className="flex gap-5 items-center"
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                  >
                    <Image src={videoIcon} alt="" />
                    <p className=" text-[#8C340D] font-semibold">Learn More</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}

function Features({
  data,
  title = "Key Features",
  isOther = false,
  description,
}: {
  data?: string[];
  title?: string;
  isOther?: boolean;
  description?: string | GenericElements;
}) {
  if (!data) return null;
  return (
    <ContentContainer isBgPrimary>
      <div className={"px-5 md:px-0 py-10" + (!!isOther ? "pt-0" : "")}>
        <h3 className="text-white text-2xl lg:text-4xl font-semibold">
          {title}
        </h3>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 py-5 lg:py-10">
          {data.map((el, i) => {
            const key = el.substring(0, 10) + i;

            return (
              <div
                key={key}
                className="flex items-center bg-[#EC6A30] gap-5 h-[130px] p-6 rounded-md"
              >
                <Image src={tickImg} alt="" />
                <p className="text-white font-semibold">{el}</p>
              </div>
            );
          })}
        </div>
        {description}
      </div>
    </ContentContainer>
  );
}