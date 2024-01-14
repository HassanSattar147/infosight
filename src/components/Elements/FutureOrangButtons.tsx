import Button from "@/components/Elements/Button";
import Link from "next/link";
import React from "react";
import ContentContainer from "./ContentContainer";

const FutureOrangeButtons = () => {
  return (
    <ContentContainer isBgPrimary>
      <div className="bg-[#3B719F] py-10 px-5 md:px-0 lg:py-20">
        <div className="flex flex-col items-center w-full md:justify-between md:flex-row">
          <div className="text-white">
            <h1 className="text-2xl text-center md:text-4xl font-semibold ">
              The Future is Secure with Us!
            </h1>
          </div>
          <div className="mt-8 lg:mt-0">
            <Link href="contact">
              <Button
                text="Contact Us"
                style={{
                  padding: "10px 25px",
                  borderRadius: "10px",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default FutureOrangeButtons;
