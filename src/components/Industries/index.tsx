"use client";
import React from "react";
import IndustriesHero from "./Sub/IndustriesHero";
import OurServices from "../HomePage/sub/OurServices";
import FinancialCard from "./Sub/FinancialCard";
import EnergyElectric from "./Sub/EnergyElectric";
import Government from "./Sub/Govnment";
import OilGas from "./Sub/OilGas";
import Manufacturing from "./Sub/Manufacturing";
import Water from "./Sub/Water";
import Entertainment from "./Sub/Entertainment";
import Healthcare from "./Sub/HealthCare";
import PageLayout from "../PageLayout";
import { useSearchParams } from "next/navigation";
import Breadcrumbs from "../Elements/Breadcrumbs";
import ContentContainer from "../Elements/ContentContainer";
import { Hero } from "../Elements/ServicePageLayout";
import heroImg from "/public/industries/industries-hero-img.png";

const BTNS_TEXTS = [
  "Financial",
  "Energy & Electric",
  "Government",
  "Oil & Gas",
  "Manufacturing",
  "Water & Wastewater",
  "Entertainment",
  "Healthcare",
];

const COMPS = [
  FinancialCard,
  EnergyElectric,
  Government,
  OilGas,
  Manufacturing,
  Water,
  Entertainment,
  Healthcare,
];

const SELECTED_BTN_CLASS =
  "font-semibold bg-gray-100 hover:bg-gray-200 text-[#274A68]";

const Industries = () => {
  React.useEffect(() => {
    document.title = "Industries";
  }, []);

  const [selected, setSelected] = React.useState(0);
  const SelectedComponent = COMPS[selected];

  const searchParams = useSearchParams();
  const selectedFromParam = searchParams.get("s") || "0";

  React.useEffect(() => {
    const parsedNewVal = Number(selectedFromParam);
    const newVal = isNaN(parsedNewVal) ? 0 : parsedNewVal;
    setSelected(newVal);
  }, [selectedFromParam]);

  return (
    <PageLayout hideWeProvide hideWhyInfoSight hideOurServices>
      <Hero
        heroImg={heroImg}
        heroTitle="Industries"
        heroDescription="Explore case studies related to the industries for which InfoSight
      works for."
      />
      <Breadcrumbs path="Home / Industries" />
      <ContentContainer>
        <h3 className="py-5 text-2xl lg:text-4xl font-semibold">
          Explore our Industrial Coverage
        </h3>
        <div className="py-5 lg:flex gap-2 grid grid-cols-2">
          {BTNS_TEXTS.map((btnText, i) => {
            return (
              <button
                key={"BTNS_TEXTS__" + i}
                className={
                  "px-2 py-1 border text-gray-600 border-gray-300 rounded-md " +
                  (selected === i ? SELECTED_BTN_CLASS : "")
                }
                onClick={() => {
                  setSelected(i);
                }}
              >
                {btnText}
              </button>
            );
          })}
        </div>
      </ContentContainer>
      <SelectedComponent />
      <OurServices heading="What We also Provide" />
    </PageLayout>
  );
};

export default Industries;
