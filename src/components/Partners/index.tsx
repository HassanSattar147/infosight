"use client";
import React from "react";
import PartnersHeroSecton from "./Sub/PartnersHeroSecton";
import PartnersCard from "./Sub/PartnersCard";
import FutureBlackButtons from "../Elements/FutureBlackButtons";
import PageLayout from "../PageLayout";
import { Hero } from "../Elements/ServicePageLayout";
import heroImg from "/public/partners/partners-hero-img.png";
import Breadcrumbs from "../Elements/Breadcrumbs";

const Partners = () => {
  React.useEffect(() => {
    document.title = "InfoSight Partners | InfoSight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices hideWhyInfoSight>
      <Hero
        heroTitle="Partners"
        heroDescription="Building trust and securing products of our industry leading partners."
        heroImg={heroImg}
      />
      <Breadcrumbs path="Home / About Us / Partners" />
      <PartnersCard />
    </PageLayout>
  );
};

export default Partners;
