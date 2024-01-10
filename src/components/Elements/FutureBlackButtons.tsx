import Button from "@/components/Elements/Button";
import Link from "next/link";
import React from "react";

interface Props {
  hideFutureBtns?: boolean;
}

const FutureBlackButtons: React.FC<Props> = ({ hideFutureBtns = false }) => {
  return (
    <div className="bg-[#3B719F] py-10 px-8 lg:p-20">
      <div className="flex flex-col lg:flex-row">
        <div className="text-white">
          <h1 className="text-2xl lg:text-4xl font-semibold pr-10 lg:pr-0">
            The Future is Secure with Us
          </h1>
          <p className="text-sm lg:text-lg mt-8 lg:w-full">
            Secure your business by taking the first step today 4,000+ startups
            already securing their business
          </p>
        </div>
        {!hideFutureBtns && (
          <div className="flex justify-between gap-5 mt-8 lg:mt-0 items-center lg:justify-end w-full">
            <Link href="#">
              <Button
                text="Get Details"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  padding: "10px 25px",
                  borderRadius: "10px",
                }}
              />
            </Link>
            <Link href="contact">
              <Button
                text="Contact Us"
                style={{
                  color: "white",
                  backgroundColor: "black",
                  padding: "10px 25px",
                  borderRadius: "10px",
                }}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FutureBlackButtons;
