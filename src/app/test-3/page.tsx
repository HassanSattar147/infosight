import { ServicePageLayout } from "@/components/PatchVulnerability";
import React from "react";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import heroImg from "/public/services-solutions/Vulnerability-CybersSecurity-Assessments.png";

const INDUSTRIAL_CONTROL_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "To achieve the level of protection needed for critical IT and OT infrastructures, and to meet the AWIA requirements, security needs to grow from a collection of disparate technologies and practices to an effective business process. Securing information, systems and networks is a complex task that can be achieved by employing planning, common sense, understanding of business requirements and people aspects—as well as employing the right technologies.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight performs Industrial Control & OT Security Assessments to provide a complete evaluation and holistic view of your organization's security posture. Our skilled security assessor team conducts multi-disciplinary, multifaced reviews to your company's current OT ICS network, SCADA systems to identify vulnerabilities that could be exploited by a Cyber Attacker. Every assessment is different, and a unique approach is required based upon the system functionality and what security measures may already in place.",
  },
  {
    img: infoImg3,
    title: " The Outcome",
    description:
      "Throughout the process, our team will work closely with the company's information assurance and technical teams in order to provide the clearest picture available of the overall security posture of the organization. We provide both logistic and technical recommendations and concise recommendations for dealing with risks appropriately. Our Industrial Control & IoT Security Assessment services include an expansive group of technical tests that inspect the security controls of industrial installations, resources, utilities, materials, information and IoT applications that are essential to safeguarding it from unauthorized access, service interruption or damage.",
  },
];

const INDUSTRIAL_CONTROL_FEATURES_DATA = [
  "Cyber Incident Response Plan Development",
  " PCI DSS Penetration Testing",
  "Web, Mobile & API Testing",
  "Regulatory Compliance",
  "Social Engineering",
  "Red Team/Blue Team",
  "Physical Security Reviews",
];

const page = () => {
  return (
    <ServicePageLayout
      heroImg={heroImg}
      heroTitle="Industrial Control & IoT Assessments"
      path="Home / Services & Solutions / Advisory Services / Security / Industrial
    Control & IoT Security Assessments"
      overviewDescription={
        <p className=" text-justify text-[#444444]">
          InfoSight&apos;s Vulnerability & Cybersecurity Assessments reduce the
          risk of successful attacks before they occur. With over two decades of
          experience in security, compliance and risk management, our experts
          work as ethical hackers to identify security issues beyond the
          capability of automated tools and assessments/tests. As cyberattacks
          continue to rise everyday it is important to perform penetration tests
          regularly.
        </p>
      }
      data={INDUSTRIAL_CONTROL_DATA}
      dataLabel="INDUSTRIAL_CONTROL_DATA"
      featureTitle="Key Services"
      featuresData={INDUSTRIAL_CONTROL_FEATURES_DATA}
    />
  );
};

export default page;
