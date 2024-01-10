"use client";
import React from "react";
import PartnersHeroSecton from "./Sub/PartnersHeroSecton";
import PartnersCard from "./Sub/PartnersCard";
import FutureBlackButtons from "../Elements/FutureBlackButtons";
import PageLayout from "../PageLayout";

const Partners = () => {
  React.useEffect(() => {
    document.title = "InfoSight Partners | InfoSight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices hideWhyInfoSight>
      <PartnersHeroSecton />
      <p className="p-5 lg:px-20">Home / About Us / Partners</p>
      <PartnersCard />
    </PageLayout>
  );
};

export default Partners;
