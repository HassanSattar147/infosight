import { GenericElements } from "@/types";
import { StaticImageData } from "next/image";
import ContentContainer from "./ContentContainer";

export interface ITextImageData {
  img: StaticImageData;
  title: string | GenericElements;
  description: string | GenericElements;
}

interface ITextImageProps extends ITextImageData {
  isLeft?: boolean;
  hideHr?: boolean;
}

const ImageText = ({
  isLeft = true,
  title,
  description,
  img,
  hideHr,
}: ITextImageProps) => {
  return (
    <>
      <div className={`ImageText ${isLeft ? "left" : "right"}`}>
        <div
          className="ImageText__img"
          style={{
            backgroundImage: `url(${img.src})`,
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
      <div className="px-5 md:px-0 py-5">
        {data.map((imgTextProps, i) => {
          const isLeft = i % 2 !== 0;
          const hideHr = data.length - 1 === i;
          const key = dataLabel + "__" + i;
          return (
            <ImageText key={key} {...imgTextProps} {...{ isLeft, hideHr }} />
          );
        })}
      </div>
    </ContentContainer>
  );
};

export default ImageTextSection;
