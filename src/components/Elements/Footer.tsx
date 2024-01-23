import Image from "next/image";
import React from "react";
import logoImg from "../../../public/infosight-new-logo-1.svg";
import ContentContainer from "./ContentContainer";
import Link from "next/link";

const FOOTER_DATA = [
  {
    title: "Navigation",
    items: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Industries",
        link: "/industries",
      },
      {
        text: "Case Studies",
        link: "/case-studies",
      },
      // {
      //   text: "Why Infosight",
      //   link: "/why-infosight",
      // },
      // {
      //   text: "About us",
      //   link: "/about-us",
      // },
      {
        text: "Contact us",
        link: "/contact",
      },
    ],
  },
  {
    title: "Quick Links",
    items: [
      {
        text: "Penetration Testing",
        link: "/penetration-testing",
      },
      {
        text: "SOCaaS",
        link: "/SOCaaS",
      },
      {
        text: "Industrial Control & IoT Assessments",
        link: "/industrial-control-IoT-security-assessments",
      },
      {
        text: "Managed EDR",
        link: "/managed-edr",
      },
      {
        text: "Mitigator Vulnerability & Threat Manager",
        link: "/mitigator-vulnerability-threat-manager",
      },
    ],
  },
];

const Footer = () => {
  return (
    <ContentContainer>
      <div className="pt-5 lg:pt-20 flex flex-col-reverse gap-5 lg:flex-row items-start justify-between w-full">
        <div className="flex flex-col gap-3 ">
          <a href="/">
            <Image src={logoImg} alt="" className="w-56" />
          </a>
          <div>
            <p className="text-gray-900">Bringing the future into focus.</p>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:flex-row justify-between w-full lg:w-9/12">
          {FOOTER_DATA.map(({ title, items }, i) => {
            return (
              <div className="flex flex-col gap-2" key={"FOOTER__" + i}>
                <h3 className="text-xl text-gray-900 font-semibold">{title}</h3>
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
            <h3 className="text-xl text-gray-900 font-semibold">Contact us</h3>
            <Link
              href="mailto:info@infosightinc.com"
              className="hover:underline"
            >
              info@infosightinc.com
            </Link>
            <Link href="tel:3058281003" className="hover:underline">
              305-828-1003
            </Link>
            <p className="w-full">
              14100 Palmetto Frontage Rd Suite 310 Miami Lakes, FL 33016
            </p>
          </div>
        </div>
      </div>
      <p className="text-gray-500 py-5">
        © 2023 InfoSight. All rights reserved.
      </p>
    </ContentContainer>
  );
};

export default Footer;
