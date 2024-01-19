import React from "react";
import Card, { CardProps } from "./Card";

interface Props {
  cardsData: CardProps[];
  conatinerClass?: string;
}

const Cards: React.FC<Props> = ({ cardsData, conatinerClass }) => {
  return (
    <div
      className={
        "grid items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 " +
        conatinerClass
      }
    >
      {cardsData.map((cardData, i) => {
        return <Card key={"Cards_Data__" + i} {...cardData} />;
      })}
    </div>
  );
};

export default Cards;
