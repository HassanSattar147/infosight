import Image from "next/image";
import React from "react";
import ratingImg from "../../../../public/homepage/full-starts-img.svg";
import { TESINOMIALS_DATA } from "@/components/Testimonials.tsx/Sub/TestimonialCard";
import Link from "next/link";
import ContentContainer from "@/components/Elements/ContentContainer";

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
    <ContentContainer>
      <div className="py-10 lg:py-20">
<<<<<<< HEAD
        <h1 className=" text-2xl lg:text-4xl font-semibold">
          Client Testimonials
        </h1>
=======
        <h1 className=" text-2xl lg:text-4xl font-semibold">Client Testimonials</h1>
>>>>>>> c0d4b2948bc4745eef13383e43db15d26f85215e
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-10 mt-5 lg:mt-10">
          {data.map(({ description, user }, i) => {
            return (
              <div
                key={i}
                className="bg-white shadow-md border border-gray-200 shadow-gray-300 p-5 rounded-xl"
              >
                <p className="pb-6">{trimTestimonial(description)}</p>
                <Image src={ratingImg} alt="" />
                <p className="mt-2">- {user}</p>
              </div>
            );
          })}
        </div>
      </div>
    </ContentContainer>
  );
};

export default TesimonialsComp;
