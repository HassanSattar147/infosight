import Image from "next/image";
import React from "react";
import logoImg from "../../../public/infosight-new-logo-1.svg";
import ContentContainer from "./ContentContainer";

const FOOTER_DATA = [
  {
    title: "Navigation",
    items: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Services & Solutions",
        link: "#",
      },
      {
        text: "Industries",
        link: "industries",
      },
      {
        text: "Insights",
        link: "#",
      },
      {
        text: "About us",
        link: "about-us",
      },
    ],
  },
  {
    title: "Insights",
    items: [
      {
        text: "Penetration Testing",
        link: "penetration-testing",
      },
      {
        text: "SOCaaS",
        link: "SOCaaS",
      },
    ],
  },
];

const Footer = () => {
  return (
    <ContentContainer>
      <div>
        <div className="px-5 pt-5 lg:px-0 lg:pt-20 flex flex-col-reverse gap-5 lg:flex-row items-start justify-between w-full">
          <div className="flex flex-col gap-3 ">
            <a href="home-page">
              <Image src={logoImg} alt="" className="w-56" />
            </a>
            <div>
              <p className="text-gray-900">Bringing the future into focus.</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:flex-row justify-between w-full lg:w-9/12">
            {FOOTER_DATA.map(({ title, items }, i) => {
              return (
                <div className="flex flex-col gap-2" key={"FOOTER__" + i}>
                  <h3 className="text-xl text-gray-900 font-semibold">
                    {title}
                  </h3>
                  {items.map(({ text, link }, j) => {
                    return (
                      <a
                        href={link}
                        key={"FOOTER__" + i + "__" + j}
                        className="hover:text-gray-500"
                      >
                        {text}
                      </a>
                    );
                  })}
                </div>
              );
            })}
            <div className="flex flex-col gap-2">
              <h1 className="text-xl text-gray-900 font-semibold">
                Contact us
              </h1>
              <p>info@infosightinc.com</p>
              <p>305-828-1003</p>
              <p className="w-full">
                14100 Palmetto Frontage Rd Suite 310 Miami Lakes, FL 33016
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray-500 md:px-0 px-5 py-5">
          © 2023 InfoSight. All rights reserved.
        </p>
      </div>
    </ContentContainer>
  );
};

export default Footer;
