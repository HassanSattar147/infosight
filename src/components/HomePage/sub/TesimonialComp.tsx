import Image from "next/image";
import React from "react";
import ratingImg from "../../../../public/homepage/full-starts-img.svg";
import chevronRightIcon from "../../../../public/homepage/right-chevron-black-icon.svg";
import chevronLeftIcon from "../../../../public/homepage/left-chevron-black-icon.svg";
import Button from "@/components/Elements/Button";
import { TESINOMIALS_DATA } from "@/components/Testimonials.tsx/Sub/TestimonialCard";
import Link from "next/link";

// const TESINOMIALS_DATA = [
//   {
//     description:
//       "The Infosight platform is accessible from anywhere and this has greatly simplified things for us.",
//     user: "Marie Ann",
//     designation: "IT Manager at T-Devs",
//   },
//   {
//     description:
//       "The Infosight platform is accessible from anywhere and this has greatly simplified things for us.",
//     user: "Marie Ann",
//     designation: "IT Manager at T-Devs",
//   },
//   {
//     description:
//       "The Infosight platform is accessible from anywhere and this has greatly simplified things for us.",
//     user: "Marie Ann",
//     designation: "IT Manager at T-Devs",
//   },
// ];

const TesimonialsComp = () => {
  const data = React.useMemo(
    () => TESINOMIALS_DATA.slice(0, 3),
    [TESINOMIALS_DATA]
  );
  return (
    <div className="p-5 lg:p-20">
      <h1 className=" text-2xl lg:text-4xl font-semibold">
        Infosights Testimonials
      </h1>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-10 mt-5 lg:mt-10">
        {data.map(({ description, user }, i) => {
          return (
            <div
              key={i}
              className="bg-white shadow-md shadow-gray-300 p-5 rounded-xl"
            >
              <p className="pb-6">{description}</p>
              <Image src={ratingImg} alt=""  />
              <p className="mt-2">- {user}</p>
              {/* <p >{designation}</p> */}
            </div>
          );
        })}
      </div>
      {/* <div className="lg:flex items-center justify-center mt-16 gap-10 hidden">
        <Image
          src={chevronLeftIcon}
          alt=""
          className="cursor-pointer hover:scale-110 transition-all"
        />
        <Image
          src={chevronRightIcon}
          alt=""
          className="cursor-pointer hover:scale-110 transition-all"
        />
      </div> */}
      <div className=" mt-10 text-center">
        <Link href={"/testimonials"}>
          <Button text="Load More" style={{ backgroundColor: "black" }} />
        </Link>
      </div>
    </div>
  );
};

export default TesimonialsComp;
