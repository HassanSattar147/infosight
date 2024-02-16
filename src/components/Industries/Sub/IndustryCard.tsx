import ContentContainer from "@/components/Elements/ContentContainer";
import { GenericElements } from "@/types";
import { StaticImageData } from "next/image";
import React from "react";

const IndustryCard = ({
  description,
  img,
}: {
  img: StaticImageData;
  description: GenericElements;
}) => {
  return (
    <ContentContainer>
      <div className="mb-[40px] mt-[20px]">
        <div
          className="industry-card-img"
          style={{
            backgroundImage: `url(${img.src})`,
          }}
        />
        <p className="text-[#222222] my-1 text-[16px] font-medium text-justify">
          {description}
        </p>
      </div>
    </ContentContainer>
  );
};

export default IndustryCard;
