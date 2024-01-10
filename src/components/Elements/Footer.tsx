import Image from "next/image";
import React from "react";
import logoImg from "../../../public/logo.svg";

const FOOTER_DATA = [
  {
    title: "Navigation",
    items: [
      {
        text: "Home",
        link: "home-page",
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
    <div>
      <div className="px-5 pt-5 lg:px-20 lg:pt-20 flex flex-col-reverse lg:flex-row items-start justify-between w-full">
        <div className="flex flex-col gap-5 pt-6 md:py-0">
          <a href="home-page">
            <Image src={logoImg} alt="" className="w-32" />
          </a>
          <div>
            <h1 className="text-[#EC6A30] text-lg">InfoSight</h1>
            <p className="text-gray-900">Bringing the future into focus.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-9/12">
          {FOOTER_DATA.map(({ title, items }, i) => {
            return (
              <div className="flex flex-col gap-2" key={"FOOTER__" + i}>
                <h1 className="text-xl text-gray-900 font-semibold">{title}</h1>
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
          <div className="flex flex-col gap-2 mt-8 lg:mt-0">
            <h1 className="text-xl text-gray-900 font-semibold">Contact us</h1>
            <p>info@infosightinc.com</p>
            <p>305-828-1003</p>
            <p>
              14100 Palmetto Frontage <br /> Rd Suite 310 Miami Lakes, <br /> FL
              33016{" "}
            </p>
          </div>
        </div>
      </div>
      <p className="text-gray-500 lg:px-20 px-5 py-5">
        © 2023 InfoSight. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
