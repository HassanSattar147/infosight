import Button from "@/components/Elements/Button";
import Link from "next/link";
import React from "react";
import ContentContainer from "./ContentContainer";

interface Props {
  hideFutureBtns?: boolean;
}

const FutureBlackButtons: React.FC<Props> = ({ hideFutureBtns = false }) => {
  return (
    <ContentContainer isBgPrimary>
      <div className="py-5 md:py-10 lg:py-20">
        <div className="flex flex-col items-center w-full lg:justify-between lg:flex-row">
          <div className="text-white">
            <h2 className="text-2xl lg:text-4xl font-semibold text-center lg:text-left">
              The Future is Secure with Us!
            </h2>
          </div>
          {!hideFutureBtns && (
            <div className="mt-8 lg:mt-0">
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
    </ContentContainer>
  );
};

export default FutureBlackButtons;
