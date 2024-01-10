import React from "react";
import Image from "next/image";
import locationIcon from "../../../../public/location.svg";
import callingIcon from "../../../../public/call-calling.svg";
import smsddIcon from "../../../../public/sms-dd.svg";

const ContactInfo = () => {
  return (
    <div className="p-5 lg:px-20">
      <h1 className="text-xl text-gray-900">Our Contact Detail</h1>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 mt-5">
        <span className="flex items-center gap-4">
          <Image src={locationIcon} alt=""  />
          <p className="text-gray-500">
            14100, Palmetto Frontage Road, Suite 310, Miami Lakes, FL 33016
          </p>
          <p className="px-2 text-gray-500 hidden lg:block">|</p>
        </span>
        <span className="flex items-center gap-4">
          <Image src={callingIcon} alt=""  />
          <p className="text-gray-500">305.828.1003</p>
          <p className="px-2 text-gray-500 hidden lg:block">|</p>
        </span>
        <span className="flex items-center gap-4">
          <Image src={smsddIcon} alt=""  />
          <p className="text-gray-500">info@infosightinc.com</p>
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
