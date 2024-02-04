import React from "react";
import MbNavbar from "./MbNavbar";
import LgNavbar from "./LgNavbar";

export interface RootObject {
  title: string;
  link?: string;
  children?: Child3[];
}
export interface Child3 {
  title: string;
  children?: Child2[];
  link?: string;
}
export interface Child2 {
  title: string;
  children?: IMenuItem[];
  link?: string;
}
export interface IMenuItem {
  title: string;
  link: string;
}

export const ALL_MENUS: RootObject[] = [
  { title: "Home", link: "/" },
  {
    title: "Services & Solutions",
    children: [
      {
        title: "Advisory Services",
        children: [
          {
            title: "Security",
            children: [
              {
                title: "Vulnerability & Cybersecurity Assessments",
                link: "/vulnerability-cyber-security",
              },

              { title: "Penetration Testing", link: "/penetration-testing" },

              {
                title: "Web Application Testing",
                link: "/web-application-testing",
              },

              // {
              //   title: "Mobile, API & Code Review",
              //   link: "/code-review-api-mobile-testing",
              // },
              {
                title: "Mobile App Security Assessment",
                link: "/mobile-app-security-asssessment",
              },
              {
                title: "API Security Assessment",
                link: "/api-security-asssessment",
              },

              {
                title: "Industrial Control & IoT Security Assessments",
                link: "/industrial-control-IoT-security-assessments",
              },
              {
                title: "Code Review",
                link: "/code-review",
              },
              {
                title: "Cloud Security Assessment",
                link: "/cloud-security-asssessment",
              },
              {
                title: "M365 Security Assessment",
                link: "/m365-security-asssessment",
              },

              {
                title: "Social Engineering & Physical Security Testing",
                link: "/social-engineering-physical-security-testing",
              },

              {
                title: "Cybersecurity & Incident Response Planning",
                link: "/cybersecurity-incident-response-planning",
              },

              // {
              //   title: "HIPAA Risk Assessment",
              //   link: "/HIPAA-risk-assessment",
              // },

              {
                title: "Red Blue Purple Team Testing",
                link: "/red-blue-purple-team-testing",
              },
            ],
          },
          { title: "BCR/DR Planning", link: "/business-continuity" },
          {
            title: "Risk Management",
            children: [
              {
                title: "Enterprise Risk Management",
                link: "/enterprise-risk-management",
              },

              {
                title: "Risk Assessments for Financial Institutions",
                link: "/financial-risk-assessment",
              },

              {
                title: "HIPAA Risk Assessment",
                link: "/HIPAA-risk-assessment",
              },
            ],
          },
          // {
          //   title: "Compliance",
          //   children: [
          //     { title: "PCI - DSS", link: "/compliance?s=0" },
          //     { title: "HIPAA", link: "/compliance?s=1" },
          //     { title: "NERC - CIP", link: "/compliance?s=2" },
          //     { title: "GLBA", link: "/compliance?s=3" },
          //   ],
          // },
          {
            title: "Audit & Assurance",
            children: [
              { title: "IT Audit", link: "/IT-audit" },
              {
                title: "IT General Controls Review",
                link: "/IT-general-controls-review",
              },
            ],
          },
        ],
      },
      // {
      //   title: "24x7 Managed Detection & Response",
      //   link: "/24x7-managed-detection-&-response",
      // },
      {
        title: "SOCaaS",
        link: "/SOCaaS",
      },
      {
        title: "Mitigator Vulnerability & Threat Manager",
        link: "/mitigator-vulnerability-threat-manager",
      },
      { title: "Virtual Information Security Officer (VISO)", link: "/viso" },
      {
        title: "Managed Services",
        children: [
          { title: "Managed XDR", link: "/managed-xdr" },
          {
            title: "Managed Network & Cloud Services",
            link: "/managed-network-support-services",
          },
          {
            title: "Microsoft Teams Essentials With Voice",
            link: "/microsoft-teams-essentials",
          },
          { title: "Managed EDR", link: "/managed-edr" },
          {
            title: "Patch & Vulnerability Management",
            link: "/patch-vulnerability-management",
          },
        ],
      },
      {
        title: "Training & Education",
        children: [
          {
            title: "Security Awareness Training for Online Banking",
            link: "/bank-security-awareness-training",
          },
          {
            title: " Employee Security Awareness Training",
            link: "/employee-security-awareness-training",
          },
          { title: "Learn Cloud LMS", link: "/learn-about-the-cloud" },
        ],
      },
    ],
  },
  {
    title: "Industries",
    children: [
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
    ],
  },
  // {
  //   title: "Insights",
  //   children: [
  //     {
  //       title: "Webinars",
  //       link: "/webinars",
  //     },
  //     {
  //       title: "News",
  //       link: "/webinar-news",
  //     },
  //   ],
  // },
  {
    title: "About Us",
    children: [
      {
        title: "About Us",
        link: "/about-us",
      },
      // {
      //   title: "Partners",
      //   link: "/partners",
      // },
      // {
      //   title: "Why InfoSight",
      //   link: "/why-infosight",
      // },
      {
        title: "Testimonials",
        link: "/testimonials",
      },
      {
        title: "Careers",
        link: "/careers",
      },
    ],
  },
  { title: "Case Studies", link: "/case-studies" },
  { title: "Contact Us", link: "/contact" },
];

const NavBar = () => {
  return (
    <>
      <LgNavbar />
      <MbNavbar />
    </>
  );
};

export default NavBar;
