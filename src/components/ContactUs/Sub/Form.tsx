import Image from "next/image";
import React from "react";
import Button from "@/components/Elements/Button";

const Form = () => {
  return (
    <div className="p-5 lg:px-20">
      <h1 className="text-gray-900 text-xl">Send Us Your Query</h1>
      <form action="" className="flex flex-col gap-6 py-5">
        <div className="flex flex-col lg:flex-row lg:w-9/12 gap-6 ">
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
        <div className="flex flex-col lg:flex-row lg:w-9/12 gap-6 ">
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
        <div className="flex flex-col lg:flex-row lg:w-9/12 gap-6 ">
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
        <span className="flex flex-col w-full gap-1">
          <label htmlFor="" className="text-gray-700 ">
            Your Message
          </label>
          <textarea
            className="lg:w-9/12 border border-gray-400 p-3 rounded-lg focus:outline-gray-400"
            name="Messages"
            placeholder="Type here..."
            id=""
            cols={10}
            rows={4}
          ></textarea>
        </span>
      </form>
      <div className="lg:w-9/12 text-end my-5">
        <Button
          text="Submit"
          style={{
            padding: "10px 30px",
          }}
        />
      </div>
    </div>
  );
};

export default Form;
