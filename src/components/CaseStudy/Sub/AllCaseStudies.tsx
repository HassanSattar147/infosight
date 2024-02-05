import React from "react";
import DropDown from "@/components/Elements/ButtonGrp";
import Cards from "@/components/Elements/Cards";
import { CardProps } from "@/components/Elements/Card";
import ContentContainer from "@/components/Elements/ContentContainer";

const FINANCIAL_CARDS_DATA: CardProps[] = [
  {
    imgType: "WLT",
    title: "South Georgia Bank",
    description: "Client success story",
    tag: "Financial",
    link: "/casestudy/pdfs/InfoSight - South GA Bank Client Success Story.pdf",
  },
  {
    imgType: "WLT",
    title: "Banco de Brasil",
    description: "Client success story",
    tag: "Financial",
    link: "/casestudy/pdfs/InfoSight - Banco do Brasil Americas Client Success Story.pdf",
  },
  {
    imgType: "WLT",
    title: "FWCCU",
    description: "Client success story",
    tag: "Financial",
    link: "/casestudy/pdfs/InfoSight - FWCCU Client Success Story.pdf",
  },
];

const ELECTRIC_CARDS_DATA: CardProps[] = [
  {
    imgType: "FLASH",
    title: "Prarieland",
    description: "Client success story",
    tag: "Energy & Electric",
    link: "/casestudy/pdfs/InfoSight - Prairie Land Electric Client Success Story.pdf",
  },
  {
    imgType: "FLASH",
    title: "Pioneer",
    description: "Client success story",
    tag: "Energy & Electric",
    link: "/casestudy/pdfs/InfoSight - Pioneer Electric Client Success Story.pdf",
  },
];

const WATER_CARDS_DATA: CardProps[] = [
  {
    imgType: "DRP",
    title: "Greensboro",
    description: "Client success story",
    tag: "Water & Wastewater",
    link: "/casestudy/pdfs/InfoSight - City of Greensboro Water Resources Client Success Story.pdf",
  },
];

const MANU_CARDS_DATA: CardProps[] = [
  {
    imgType: "JUD",
    title: "Quirch Foods",
    description: "Client success story",
    tag: "Manufacturing",
    link: "/casestudy/pdfs/InfoSight - Quirch Foods Client Success Story.pdf",
  },
];

const ALL_CARDS_DATA = [
  FINANCIAL_CARDS_DATA,
  ELECTRIC_CARDS_DATA,
  WATER_CARDS_DATA,
  MANU_CARDS_DATA,
];

const options = [
  { value: 0, lable: "Select Industry" },
  { value: 1, lable: "Financial" },
  { value: 2, lable: "Energy & Electric" },
  { value: 3, lable: "Water & Wastewater" },
  { value: 4, lable: "Manufacturing" },
];

const AllCaseStudies = () => {
  const [selected, setSelected] = React.useState(0);

  return (
    <ContentContainer>
      <div className="py-5 lg:py-10">
        <div className="flex items-start md:items-center justify-between gap-2 mb-8 flex-col md:flex-row">
          <h2 className="text-[36px] font-extrabold">
            {selected === 0
              ? "All Case Studies"
              : options[selected].lable + " Case Studies"}
          </h2>
          <DropDown
            options={options}
            onChange={(e) => {
              setSelected(+e.target.value);
            }}
          />
        </div>
        <Cards
          cardsData={
            selected === 0
              ? ALL_CARDS_DATA.flat()
              : ALL_CARDS_DATA[selected - 1]
          }
        />
      </div>
    </ContentContainer>
  );
};

export default AllCaseStudies;
