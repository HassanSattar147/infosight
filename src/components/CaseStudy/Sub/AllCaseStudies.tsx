import React from "react";
import DropDown from "@/components/Elements/ButtonGrp";
import Cards from "@/components/Elements/Cards";
import { CardProps } from "@/components/Elements/Card";

const FINANCIAL_CARDS_DATA: CardProps[] = [
  {
    imgType: "WLT",
    title: "South Georgia Bank",
    description: "Client success story",
    tag: "Financial",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20South%20GA%20Bank%20Client%20Success%20Story.pdf",
  },
  {
    imgType: "WLT",
    title: "Banco de Brasil",
    description: "Client success story",
    tag: "Financial",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20Banco%20do%20Brasil%20Americas%20Client%20Success%20Story.pdf",
  },
  {
    imgType: "WLT",
    title: "FWCCU",
    description: "Client success story",
    tag: "Financial",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20FWCCU%20Client%20Success%20Story.pdf",
  },
];

const ELECTRIC_CARDS_DATA: CardProps[] = [
  {
    imgType: "FLASH",
    title: "Prarieland",
    description: "Client success story",
    tag: "Energy & Electric",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20Prairie%20Land%20Electric%20Client%20Success%20Story.pdf",
  },
  {
    imgType: "FLASH",
    title: "Pioneer",
    description: "Client success story",
    tag: "Energy & Electric",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20Pioneer%20Electric%20Client%20Success%20Story.pdf",
  },
];

const WATER_CARDS_DATA: CardProps[] = [
  {
    imgType: "DRP",
    title: "Greensboro",
    description: "Client success story",
    tag: "Water & Wastewater",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20City%20of%20Greensboro%20Water%20Resources%20Client%20Success%20Story.pdf",
  },
];

const MANU_CARDS_DATA: CardProps[] = [
  {
    imgType: "JUD",
    title: "Quirch Foods",
    description: "Client success story",
    tag: "Manufacturing",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20Quirch%20Foods%20Client%20Success%20Story.pdf",
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
    <div className="p-5 lg:py-10 lg:px-20">
      <div className="flex items-center justify-between gap-2 mb-8">
        <h1 className="text-xl lg:text-4xl font-extrabold ">
          All Case Studies
        </h1>
        <DropDown
          options={options}
          onChange={(e) => {
            setSelected(+e.target.value);
          }}
        />
      </div>
      <Cards
        cardsData={
          selected === 0 ? ALL_CARDS_DATA.flat() : ALL_CARDS_DATA[selected - 1]
        }
      />
    </div>
  );
};

export default AllCaseStudies;
