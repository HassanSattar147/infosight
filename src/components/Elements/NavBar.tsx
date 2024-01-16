import React from "react";
import Image from "next/image";
import logoImg from "../../../public/infosight-new-logo-1.svg";
import DDIcon from "../../../public/DDIcon.svg";
import chevronRightIcon from "../../../public/Chevron-right-Icon.svg";
import "@/styles/NavDropdown.css";
import MbNavbar from "./MbNavbar";
import Link from "next/link";
import ContentContainer from "./ContentContainer";

const INDUSTRIES_DATA = [
  {
    title: "Financial",
    link: "/industries?s=0",
  },
  {
    title: "Energy & Electric",
    link: "/industries?s=1",
  },
  {
    title: "Government",
    link: "/industries?s=2",
  },
  {
    title: "Oil & Gas",
    link: "/industries?s=3",
  },
  {
    title: "Manufacturing",
    link: "/industries?s=4",
  },
  {
    title: "Water & Wastewater",
    link: "/industries?s=5",
  },
  {
    title: "Entertainment",
    link: "/industries?s=6",
  },
  {
    title: "Healthcare",
    link: "/industries?s=7",
  },
];

const RISK_MANAGEMENT_DATA = [
  {
    title: "Enterprise Risk Management",
    link: "/enterprise-risk-management",
  },
  {
    title: "SCADA/ICS Risk Assessments",
    link: "/scada-ics-risk-assessments",
  },
];

const COMPLIANCe_DATA = [
  { title: "PCI - DSS", link: "/compliance?s=0" },
  { title: "HIPAA", link: "/compliance?s=1" },
  { title: "NERC - CIP", link: "/compliance?s=2" },
  { title: "GLBA", link: "/compliance?s=3" },
];

const MANAGED_SERVICES_DATA = [
  { title: "Managed XDR", link: "/managed-xdr" },
  {
    title: "Managed Network & Cloud Services",
    link: "/managed-network-support-services",
  },
  {
    title: "Managed Communications, Collaboration & Connect Services",
    link: "/managed-communications",
  },
  { title: "Managed EDR", link: "/managed-EDR" },
  {
    title: "Patch & Vulnerability Management",
    link: "/patch-vulnerability-management",
  },
];

const TRAININg_EDUCATION_DATA = [
  {
    title: "Security Awareness Training for Online Banking",
    link: "/bank-security-awareness-training",
  },
  {
    title: " Employee Security Awareness Training",
    link: "/employee-security-awareness-training",
  },
  { title: "Learn Cloud LMS", link: "/learn-about-the-cloud" },
];

const ABOUT_US_DATA = [
  {
    title: "About Us & Company History",
    link: "about-us",
  },
  {
    title: "Partners",
    link: "partners",
  },
  {
    title: "Why InfoSight",
    link: "why-infosight",
  },
  {
    title: "Testimonials",
    link: "testimonials",
  },
  {
    title: "Careers",
    link: "careers",
  },
];

const WEBINARS_DATA = [
  {
    title: "Webinars",
    link: "webinars",
  },
  {
    title: "News",
    link: "webinar-news",
  },
];

const ADV_SERVICE_SECURITY_DATA_1 = [
  {
    title: "Vulnerability & Cybersecurity Assessments",
    link: "vulnerability-cyber-security",
  },

  { title: "Penetration Testing", link: "penetration-testing" },

  { title: "Web Application Testing", link: "web-application-testing" },

  {
    title: "Mobile, API & Code Review",
    link: "code-review-api-mobile-testing",
  },

  {
    title: "Social Engineering & Physical Security Testing",
    link: "social-engineering-physical-security-testing",
  },
  { title: "VISO", link: "viso" },
];

const ADV_SERVICE_SECURITY_DATA_2 = [
  {
    title: "Industrial Control & IoT Security Assessments",
    link: "industrial-control-IoT-security-assessments",
  },

  {
    title: "Cybersecurity & Incident Response Planning",
    link: "cybersecurity-incident-response-planning",
  },

  {
    title: "SCADA-ICS Risk & Vulnerability Assessments",
    link: "scada-ics-risk-assessments",
  },

  {
    title: "Red Blue Purple Team Testing",
    link: "red-blue-purple-team-testing",
  },
];

const NavBar = () => {
  return (
    <ContentContainer>
      <nav className="hidden bg-white md:flex items-center h-[80px]">
        <div className="container">
          <ul className="flex items-center justify-between gap-5 px-20">
            <Link href="/">
              <Image src={logoImg} alt="" className="lg:w-32 md:w-52" />
            </Link>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="flex items-center gap-2">
              <Link href="#">Services & Solutions</Link>
              <Image src={DDIcon} alt="" className="cursor-pointer" />
              <div className="dropdown__menu absolute top-full left-[-50%] bg-white z-50 w-[330px]">
                <div className="p-5">
                  <p className="text-gray-800 font-semibold">
                    Services & Solutions
                  </p>
                  <p className="text-gray-500">
                    Get started and learn more about our services & solutions.
                  </p>
                </div>
                <ul className="flex flex-col gap-3 w-full pb-5">
                  <li className="flex items-center justify-between relative px-5">
                    <Link href="">Advisory Services</Link>
                    <Image
                      src={chevronRightIcon}
                      alt=""
                      className="cursor-pointer"
                    />
                    <div className="dropdown__submenu absolute top-0  left-full bg-white z-50 w-max">
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-center justify-between gap-2 px-5 pt-3">
                          <Link href="">Security</Link>
                          <Image
                            src={chevronRightIcon}
                            alt=""
                            className="cursor-pointer"
                          />
                          <div className="DD__submenu absolute top-0 left-full bg-white z-50 w-max">
                            <div className="flex justify-between">
                              <ul className="flex flex-col gap-3 px-5 py-3">
                                {[
                                  ...ADV_SERVICE_SECURITY_DATA_1,
                                  ...ADV_SERVICE_SECURITY_DATA_2,
                                ].map(({ title, link }, i) => {
                                  return (
                                    <li
                                      key={"ADV_SERVICE_SECURITY_DATA_1__" + i}
                                    >
                                      <Link href={link}>{title}</Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="px-5">
                          <Link href="business-continuity">
                            BCR/DR Planning
                          </Link>
                        </li>
                        <li className="flex items-center justify-between gap-2 px-5">
                          <Link href="">Risk Management</Link>
                          <Image
                            src={chevronRightIcon}
                            alt=""
                            className="cursor-pointer"
                          />
                          <div className="DD__submenu absolute top-0  left-full bg-white z-50 w-max">
                            <ul className="flex flex-col gap-3 px-5 py-3">
                              {RISK_MANAGEMENT_DATA.map(
                                ({ title, link }, i) => {
                                  return (
                                    <li key={"RISK_MANAGEMENT_DATA__" + i}>
                                      <Link href={link}>{title}</Link>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        </li>
                        <li className="flex items-center justify-between gap-2 px-5">
                          <Link href="">Compliance</Link>
                          <Image
                            src={chevronRightIcon}
                            alt=""
                            className="cursor-pointer"
                          />
                          <div className="DD__submenu absolute top-0  left-full bg-white z-50 w-max">
                            <ul className="flex flex-col gap-3 px-5 py-3">
                              {COMPLIANCe_DATA.map(({ title, link }, i) => {
                                return (
                                  <li key={"COMPLIANCe_DATA__" + i}>
                                    <Link href={link}>{title}</Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </li>
                        <li className="flex items-center justify-between gap-2 px-5 pb-3">
                          <Link href="">Audit & Assurance</Link>
                          <Image
                            src={chevronRightIcon}
                            alt=""
                            className="cursor-pointer"
                          />
                          <div className="DD__submenu absolute top-0 left-full bg-white z-50 w-max">
                            <ul className="flex flex-col gap-3 px-5 py-3">
                              <li>
                                <Link href="IT-audit">IT Audit</Link>
                              </li>
                              <li>
                                <Link href="IT-general-controls-review">
                                  IT General Controls Review
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="px-5">
                    <Link href="24x7-managed-detection-&-response">
                      24x7 Managed Detection & Response
                    </Link>
                  </li>
                  <li className="px-5">
                    <Link href="SOCaaS">SOCaaS</Link>
                  </li>
                  <li className="px-5">
                    <Link href="SECaaS">SECaaS</Link>
                  </li>
                  <li className="flex items-center justify-between px-5">
                    <Link href="">Managed Services</Link>
                    <Image
                      src={chevronRightIcon}
                      alt=""
                      className="cursor-pointer"
                    />
                    <div className="dropdown__submenu absolute top-0  left-full bg-white z-50 w-max">
                      <ul className="flex flex-col gap-3 px-5 py-3">
                        {MANAGED_SERVICES_DATA.map(({ title, link }, i) => {
                          return (
                            <li key={"MANAGED_SERVICES_DATA__" + i}>
                              <Link href={link}>{title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-center justify-between px-5">
                    <Link href="">Training & Education</Link>
                    <Image
                      src={chevronRightIcon}
                      alt=""
                      className="cursor-pointer"
                    />
                    <div className="dropdown__submenu absolute top-0  left-full bg-white z-50 w-max">
                      <ul className="flex flex-col gap-3 px-5 py-3">
                        {TRAININg_EDUCATION_DATA.map(({ title, link }, i) => {
                          return (
                            <li key={"TRAININg_EDUCATION_DATA__" + i}>
                              <Link href={link}>{title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-center gap-2 ">
              <Link href="">Industries</Link>
              <Image src={DDIcon} alt="" className="cursor-pointer" />
              <div className="dropdown__menu absolute top-full  left-[-50%] bg-white z-50 w-[360px]">
                <div className="p-5">
                  <p className="text-gray-800 font-semibold">Industries</p>
                  <p className="text-gray-500">
                    Learn more about our services & solutions for below
                    industries.
                  </p>
                </div>
                <ul className="flex flex-col gap-3 px-5 pb-3">
                  {INDUSTRIES_DATA.map(({ title, link }, i) => {
                    return (
                      <li key={"INDUSTRIES_DATA__" + i}>
                        <Link href={link}>{title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Link href="">Insights</Link>
              <Image src={DDIcon} alt="" className="cursor-pointer" />
              <div className="dropdown__menu absolute top-full left-[-50%] bg-white z-50 w-max">
                <div className="p-5">
                  <p className="text-gray-800 font-semibold">Insights</p>
                  <p className="text-gray-500">
                    Learn more about our company insights.
                  </p>
                </div>
                <ul className="flex flex-col gap-3 px-5 py-3">
                  {WEBINARS_DATA.map(({ title, link }, i) => {
                    return (
                      <li key={"WEBINARS_DATA__" + i}>
                        <Link href={link}>{title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Link href="">About Us</Link>
              <Image src={DDIcon} alt="" className="cursor-pointer" />
              <div className="dropdown__menu absolute top-full  left-[-50%] bg-white z-50 w-max">
                <div className="p-5">
                  <p className="text-gray-800 font-semibold">About Us</p>
                  <p className="text-gray-500">
                    Learn more about our Company & Partners.
                  </p>
                </div>
                <ul className="flex flex-col gap-3 py-3">
                  {ABOUT_US_DATA.map(({ title, link }, i) => {
                    return (
                      <li key={"ABOUT_US_DATA__" + i} className=" px-5">
                        <Link href={link}>{title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li>
              <Link href="case-studies">Case Studies</Link>
            </li>
            <li>
              <Link href="contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
      <MbNavbar />
    </ContentContainer>
  );
};

export default NavBar;
