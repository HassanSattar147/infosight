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
      <div className="py-5 mb-[40px]">
        <div
          style={{
            backgroundImage: `url(${img.src})`,
            width: "100%",
            height: "200px",
            borderRadius: "8px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            marginBottom: "24px",
          }}
        />
        <p className="text-[#222222] my-1 text-[18px]" style={{fontWeight: '500'}}>
          {description}
        </p>
      </div>
    </ContentContainer>
  );
};

export default IndustryCard;
