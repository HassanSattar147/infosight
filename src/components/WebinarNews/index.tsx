"use client";
import React from "react";
import WebNewsHero from "./Sub/WebNewsHero";
import FollowUsCard from "../Webinars/Sub/FollowUsCard";
import TopNews from "./Sub/TopNews";
import PageLayout from "../PageLayout";

const WebinarNews = () => {
  React.useEffect(() => {
    document.title = "Webinars";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <WebNewsHero />
      <p className="p-5 lg:px-20">Home / Insights / Webinars</p>
      <TopNews />
      <FollowUsCard />
    </PageLayout>
  );
};

export default WebinarNews;
