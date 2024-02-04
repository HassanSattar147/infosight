import { GenericElements } from "@/types";
import { StaticImageData } from "next/image";
import ContentContainer from "./ContentContainer";
import challengeIllustration from "../../../public/services-solutions/challenge-illustration.svg";
import solveIllustration from "../../../public/services-solutions/solve-illustration.svg";
import outcomeIllustration from "../../../public/services-solutions/outcome-illustration.svg";

const illustrations: StaticImageData[] = [
  challengeIllustration,
  solveIllustration,
  outcomeIllustration,
];

export interface ITextImageData {
  img?: StaticImageData;
  mblImg?: StaticImageData;
  title: string | GenericElements;
  description: string | GenericElements;
  imgContain?: boolean;
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
  imgContain = false,
  mblImg,
}: ITextImageProps) => {
  const noImage = typeof img === "undefined";
  const imgSrc = noImage ? illustrations[index || 0].src : img.src;
  const hasMobileImg = typeof mblImg !== "undefined";
  return (
    <>
      <div className={`ImageText ${isLeft ? "left" : "right"}`}>
        <div
          className={`ImageText__img ${hasMobileImg ? `ImageText__img--lg` : ""}`}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: noImage || imgContain ? "contain" : "cover",
            height: imgContain ? "100%" : "",
          }}
        />
        {hasMobileImg && (
          <div
            className="ImageText__img ImageText__img--mbl "
            style={{
              backgroundImage: `url(${mblImg.src})`,
              backgroundSize: noImage || imgContain ? "contain" : "cover",
              height: imgContain ? "100%" : "",
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
