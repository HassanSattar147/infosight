import React from "react";
import { GenericElements } from "@/types";
import { StaticImageData } from "next/image";

const CC = `ContentContainer__`;

const ContentContainer = ({
  children,
  isBgPrimary = false,
  bgImage,
}: {
  children: GenericElements;
  isBgPrimary?: boolean;
  bgImage?: StaticImageData;
}) => {
  const wrapperStyle: React.CSSProperties = React.useMemo(() => {
    if (bgImage) {
      return { backgroundImage: `url(${bgImage.src})` };
    } else if (typeof isBgPrimary == "boolean") {
      return {
        backgroundColor: isBgPrimary ? "#3b719f" : "",
      };
    } else return {};
  }, [bgImage, isBgPrimary]);

  return (
    <div className={CC + "wrapper"} style={wrapperStyle}>
      <div className={CC + "container"}>{children}</div>
    </div>
  );
};

export default ContentContainer;
