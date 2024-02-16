import React from "react";
import Image from "next/image";
import locationIcon from "../../../../public/location.svg";
import callingIcon from "../../../../public/call-calling.svg";
import smsddIcon from "../../../../public/sms-dd.svg";
import ContentContainer from "@/components/Elements/ContentContainer";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <ContentContainer>
      <div className="py-5">
        {/* <h1 className="text-xl text-gray-900">Our Contact Detail</h1> */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-5">
          <span className="flex items-center gap-4">
            <Image src={locationIcon} alt="" />
            <p className="text-gray-500">
              14100, Palmetto Frontage Road, Suite 310, Miami Lakes, FL 33016
            </p>
            <p className="px-2 text-gray-500 hidden lg:block">|</p>
          </span>
          <span className="flex items-center gap-4">
            <Image src={callingIcon} alt="" />
            <Link href={"tel:3058281003"}>
              <p className="text-gray-500 hover:underline">305.828.1003</p>
            </Link>
            <p className="px-2 text-gray-500 hidden lg:block">|</p>
          </span>
          <span className="flex items-center gap-4">
            <Image src={smsddIcon} alt="" />
            <Link href="mailto:info@infosightinc.com">
              <p className="text-gray-500 hover:underline">
                info@infosightinc.com
              </p>
            </Link>
          </span>
        </div>
      </div>
    </ContentContainer>
  );
};

export default ContactInfo;
