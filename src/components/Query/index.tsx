"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import Button from "../Elements/Button";
import Image from "next/image";
import locationIcon from "../../../public/location.svg";
import callingIcon from "../../../public/call-calling.svg";
import smsddIcon from "../../../public/sms-dd.svg";
import PageLayout from "../PageLayout";

const Query = () => {
  React.useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return (
    <PageLayout
      hideWeProvide
      hideOurServices
      hideWhyInfoSight
      hideFooterFutureBtns
    >
      <p className="p-5 lg:px-20">Home / Contact Us</p>
      <div className="p-5 lg:px-20 flex flex-col gap-5 lg:gap-10 lg:flex-row lg:items-start w-full">
        <div className="w-full">
          <h1 className="text-gray-900 text-2xl font-semibold">
            Send Us Your Query
          </h1>
          <form action="" className="flex flex-col gap-6 py-5">
            <div className="flex flex-col lg:flex-row  gap-6 ">
              <span className="flex flex-col w-full gap-1">
                <label htmlFor="" className="text-gray-700 ">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full border border-gray-400 p-3 rounded-lg focus:outline-gray-400"
                />
              </span>
              <span className="flex flex-col w-full gap-1">
                <label htmlFor="" className="text-gray-700 ">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full border border-gray-400 p-3 rounded-lg focus:outline-gray-400"
                />
              </span>
            </div>
            <div className="flex flex-col lg:flex-row  gap-6 ">
              <span className="flex flex-col w-full gap-1">
                <label htmlFor="" className="text-gray-700 ">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-400 p-3 rounded-lg focus:outline-gray-400"
                />
              </span>
              <span className="flex flex-col w-full gap-1">
                <label htmlFor="" className="text-gray-700 ">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-full border border-gray-400 p-3 rounded-lg focus:outline-gray-400"
                />
              </span>
            </div>
            <div className="flex flex-col lg:flex-row  gap-6 ">
              <span className="flex flex-col w-full gap-1">
                <label htmlFor="" className="text-gray-700 ">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Enter the compnay name"
                  className="w-full border border-gray-400 p-3 rounded-lg focus:outline-gray-400"
                />
              </span>
              <span className="w-full"></span>
            </div>
            <span className="flex flex-col gap-1">
              <label htmlFor="" className="text-gray-700 ">
                Your Message
              </label>
              <textarea
                className="border border-gray-400 p-3 rounded-lg focus:outline-gray-400"
                name="Messages"
                placeholder="Type here..."
                id=""
                cols={10}
                rows={4}
              ></textarea>
            </span>
          </form>
          <div className=" text-end my-5">
            <Button
              text="Submit"
              style={{
                padding: "10px 30px",
              }}
            />
          </div>
        </div>
        <div className="border border-gray-300 p-8 rounded-xl lg:mt-5">
          <h1 className="text-xl text-gray-900">Our Contact Detail</h1>
          <div className="flex flex-col gap-5 mt-5">
            <span className="flex items-center gap-4">
              <Image src={locationIcon} alt=""  />
              <p className="text-gray-500">
                14100, Palmetto Frontage Road, Suite 310, Miami Lakes, FL 33016
              </p>
            </span>
            <span className="flex items-center gap-4">
              <Image src={callingIcon} alt=""  />
              <p className="text-gray-500">305.828.1003</p>
            </span>
            <span className="flex items-center gap-4">
              <Image src={smsddIcon} alt=""  />
              <p className="text-gray-500">info@infosightinc.com</p>
            </span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Query;
