import ButtonGrp from "@/components/Elements/ButtonGrp";
import React from "react";
import NewsCard from "./NewsCard";

const TopNews = () => {
  return (
    <div className="p-5 lg:px-20">
      <div className="flex justify-between items-center">
        <h1 className="text-red-900 text-lg lg:text-4xl font-semibold ">
          Top News
        </h1>
      </div>
      <NewsCard />
    </div>
  );
};

export default TopNews;
