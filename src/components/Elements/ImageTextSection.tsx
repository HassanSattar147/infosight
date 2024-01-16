import { GenericElements } from "@/types";
import { StaticImageData } from "next/image";

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
      <div className={`ImageText`}>
        <div
          className="ImageText__img"
          style={{
            backgroundImage: `url(${img.src})`,
            order: isLeft ? 1 : 2,
          }}
        />
        <div
          className="ImageText__content"
          style={{
            order: isLeft ? 2 : 1,
          }}
        >
          <h3 className="lg:text-2xl text-gray-900 font-semibold">{title}</h3>
          <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
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
    <div className="p-5 lg:px-20">
      {data.map((imgTextProps, i) => {
        const isLeft = i % 2 !== 0;
        const hideHr = data.length - 1 === i;
        const key = dataLabel + "__" + i;
        return (
          <ImageText key={key} {...imgTextProps} {...{ isLeft, hideHr }} />
        );
      })}
    </div>
  );
};

export default ImageTextSection;
