import { GenericElements } from "@/types";
import { StaticImageData } from "next/image";
import ContentContainer from "./ContentContainer";
import challengeIllustration from "../../../public/services-solutions/challenge-illustration.svg";
import solveIllustration from "../../../public/services-solutions/solve-illustration.svg";
import outcomeIllustration from "../../../public/services-solutions/outcome-illustration.svg";

import infoImg1 from "/public/services-solutions/challenge-person-illustation.svg";
import infoImg2 from "/public/services-solutions/solution-person-illustration-2.svg";
import infoImg2Mbl from "/public/services-solutions/solution-person-illustration-1.svg";
import infoImg3 from "/public/services-solutions/outcome-person-illustration.svg";

const illustrations: StaticImageData[] = [
  challengeIllustration,
  solveIllustration,
  outcomeIllustration,
];

const illustrations2: string[][] = [
  infoImg1.src,
  [infoImg2.src, infoImg2Mbl.src],
  infoImg3.src,
];

export interface ITextImageData {
  img?: StaticImageData;
  title: string | GenericElements;
  description: string | GenericElements;
  useType2?: boolean;
  useWheelIllustration?: boolean;
  isImgContained?: boolean;
}

interface ITextImageProps extends ITextImageData {
  isLeft?: boolean;
  hideHr?: boolean;
  index?: number;
}

const ImageText = ({
  isLeft = true,
  title,
  description,
  img,
  hideHr,
  index,
  useType2 = false,
  useWheelIllustration = false,
  isImgContained = false,
}: ITextImageProps) => {
  const noImage = typeof img === "undefined";
  const type2ImgSrc = (
    index === 1
      ? useWheelIllustration
        ? illustrations2[1][0]
        : illustrations2[1][1]
      : illustrations2[index || 0]
  ) as string;

  const imgSrc = useType2
    ? type2ImgSrc
    : noImage
    ? illustrations[index || 0].src
    : img.src;
  return (
    <>
      <div className={`ImageText ${isLeft ? "left" : "right"}`}>
        <div
          className={`ImageText__img ${useType2 ? `ImageText__img--lg` : ""}`}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize:
              noImage || useType2 || isImgContained ? "contain" : "cover",
            height: useType2 ? "100%" : "",
          }}
        />
        {useType2 && (
          <div
            className="ImageText__img ImageText__img--mbl "
            style={{
              backgroundImage: `url(${
                index === 1 && useType2 ? illustrations2[1][1] : imgSrc
              })`,
              backgroundSize:
                noImage || useType2 || isImgContained ? "contain" : "cover",
              height: useType2 ? "100%" : "",
            }}
          />
        )}
        <div className="ImageText__content">
          <h3 className="lg:text-2xl text-gray-900 font-semibold">{title}</h3>
          <p className="text-gray-900 text-sm lg:text-base py-1">
            {description}
          </p>
        </div>
      </div>
      {typeof hideHr === "boolean" && hideHr ? null : <hr />}
    </>
  );
};

const ImageTextSection = ({
  data,
  dataLabel,
}: {
  data: ITextImageData[];
  dataLabel: string;
}) => {
  return (
    <ContentContainer>
      <div className="py-5">
        {data.map((imgTextProps, index) => {
          const isLeft = index % 2 !== 0;
          const hideHr = data.length - 1 === index;
          const key = dataLabel + "__" + index;
          const props = {
            ...imgTextProps,
            isLeft,
            hideHr,
            index,
          };
          return <ImageText key={key} {...props} />;
        })}
      </div>
    </ContentContainer>
  );
};

export default ImageTextSection;
