import Image from "next/image";
import React from "react";
import ratingImg from "../../../../public/homepage/full-starts-img.svg";
import { TESINOMIALS_DATA } from "@/components/Testimonials.tsx/Sub/TestimonialCard";
import Link from "next/link";

const trimTestimonial = (str: string, limit = 250) => {
  if (str.length < limit) return str;
  return (
    <>
      {str.slice(0, limit) + " ... "}{" "}
      <Link href={"/testimonials"} className="text-sm text-gray-500 underline">
        Read More
      </Link>
    </>
  );
};

const TesimonialsComp = () => {
  const data = React.useMemo(() => TESINOMIALS_DATA.slice(0, 3), []);
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
              <p className="pb-6">{trimTestimonial(description)}</p>
              <Image src={ratingImg} alt="" />
              <p className="mt-2">- {user}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TesimonialsComp;
