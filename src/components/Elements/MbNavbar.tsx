import React from "react";
import Image from "next/image";
import logoImg from "../../../public/infosight-new-logo-1.svg";
import Link from "next/link";
import "@/styles/mbnav.css";

interface RootObject {
  title: string;
  link?: string;
  children?: Child3[];
}
interface Child3 {
  title: string;
  children?: Child2[];
  link?: string;
}
interface Child2 {
  title: string;
  children?: IMenuItem[];
  link?: string;
}
interface IMenuItem {
  title: string;
  link: string;
}

const ALL_MENUS: RootObject[] = [
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

              {
                title: "Mobile, API & Code Review",
                link: "/code-review-api-mobile-testing",
              },

              {
                title: "Social Engineering & Physical Security Testing",
                link: "/social-engineering-physical-security-testing",
              },
              { title: "VISO", link: "/viso" },
              {
                title: "Industrial Control & IoT Security Assessments",
                link: "/industrial-control-IoT-security-assessments",
              },

              {
                title: "Cybersecurity & Incident Response Planning",
                link: "/cybersecurity-incident-response-planning",
              },

              {
                title: "HIPAA Risk Assessment",
                link: "/HIPAA-risk-assessment",
              },

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
        title: "SECaaS",
        link: "/SECaaS",
      },
      {
        title: "Managed Services",
        children: [
          { title: "Managed XDR", link: "/managed-xdr" },
          {
            title: "Managed Network & Cloud Services",
            link: "/managed-network-support-services",
          },
          {
            title: "Managed Communications, Collaboration & Connect Services",
            link: "/managed-communications",
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
        title: "About Us & Company History",
        link: "/about-us",
      },
      {
        title: "Partners",
        link: "/partners",
      },
      {
        title: "Why InfoSight",
        link: "/why-infosight",
      },
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

const MbNavbar = () => {
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);
  const [selectedMenus, setSelectedMenus] = React.useState<RootObject[]>([]);

  const selectedMenu = React.useMemo(() => {
    if (selectedMenus.length === 0) return;

    return selectedMenus.at(-1);
  }, [selectedMenus]);

  return (
    <div className="mb-nav-container flex md:hidden">
      <button
        onClick={() => {
          setIsNavExpanded(true);
        }}
      >
        <HambergurIcon />
      </button>
      <div className="mb-nav-container-logo">
        <Link href={"/"}>
          <Image src={logoImg} alt="" role="button" height={33} />
        </Link>
      </div>
      <div
        className={`mb-exp-menu ${isNavExpanded ? "expanded" : "collapsed"}`}
      >
        <BackIcon
          title={selectedMenu ? selectedMenu.title : "Back"}
          onClick={() => {
            if (selectedMenus.length == 0) setIsNavExpanded(false);
            const newMenus = [...selectedMenus];
            newMenus.pop();
            setSelectedMenus([...newMenus]);
          }}
        />
        {(selectedMenu ? selectedMenu.children : ALL_MENUS)?.map(
          (menuItem, i) => {
            return (
              <MenuItem
                menuItem={menuItem}
                setSelectedMenus={setSelectedMenus}
                key={"mbnavbar_menuItem" + i}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default MbNavbar;

function MenuItem({
  menuItem,
  setSelectedMenus,
}: {
  menuItem: RootObject;
  setSelectedMenus: React.Dispatch<React.SetStateAction<RootObject[]>>;
}) {
  const hasChildren = "children" in menuItem;
  const { link, title } = menuItem;
  return (
    <div className="menu-item">
      {hasChildren ? (
        <div
          className="flex items-center justify-between"
          onClick={() => {
            setSelectedMenus((x) => [...x, menuItem]);
          }}
        >
          <div>{title}</div>
          <div>
            <NextIcon />
          </div>
        </div>
      ) : (
        <Link href={link as string}>{title}</Link>
      )}
    </div>
  );
}

function HambergurIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#575757"
      className="w-7 h-7"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function BackIcon({
  title,
  onClick,
}: {
  title: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div className="backIcon-container" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="black"
        className="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
      <div className="backIcon-container__title">{title}</div>
    </div>
  );
}

function NextIcon() {
  return (
    <a href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#666"
        className="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </a>
  );
}
