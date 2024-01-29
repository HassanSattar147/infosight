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
  title: string | GenericElements;
  description: string | GenericElements;
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
}: ITextImageProps) => {
  const noImage = typeof img === "undefined";
  const imgSrc = noImage ? illustrations[index || 0].src : img.src;
  return (
    <>
      <div className={`ImageText ${isLeft ? "left" : "right"}`}>
        <div
          className="ImageText__img"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: noImage ? "contain" : "cover",
          }}
        />
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
