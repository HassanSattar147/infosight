import Image from "next/image";
import React from "react";
import partnerIcon1 from "../../../../public/partners/mircosoft-icon.png";
import partnerIcon2 from "../../../../public/partners/dell-icon.png";
import partnerIcon3 from "../../../../public/partners/Amazon-icon.png";
import partnerIcon4 from "../../../../public/partners/AT&T-icon.png";
import partnerIcon5 from "../../../../public/partners/brocade-icon.png";
import partnerIcon6 from "../../../../public/partners/checkpoint-icon.png";
import partnerIcon7 from "../../../../public/partners/hp-icon.png";
import partnerIcon8 from "../../../../public/partners/dell-emc-icon.png";
import partnerIcon9 from "../../../../public/partners/fortinet-icon.png";
import partnerIcon10 from "../../../../public/partners/microsoft-azure-icon.png";
import partnerIcon11 from "../../../../public/partners/mitel-icon.png";
import partnerIcon12 from "../../../../public/partners/office-365-icon.png";
import partnerIcon13 from "../../../../public/partners/paloalto.png";
import partnerIcon14 from "../../../../public/partners/shape-icon.png";
import partnerIcon15 from "../../../../public/partners/Solarwinds-icon.png";
import partnerIcon16 from "../../../../public/partners/watchguard-technologies-icon.png";
import partnerIcon17 from "../../../../public/partners/sumologic-icon.png";
import partnerIcon18 from "../../../../public/partners/f5-networks-icon.png";
import partnerIcon19 from "../../../../public/partners/cyberversion-icon.png";
import partnerIcon20 from "../../../../public/partners/radiflow-icon.png";
import partnerIcon21 from "../../../../public/partners/vmware-icon.png";
import partnerIcon22 from "../../../../public/partners/sumo-icon.png";
import partnerIcon23 from "../../../../public/partners/ruckus-icon.png";
import partnerIcon24 from "../../../../public/partners/brocade-2-icon.png";
import Link from "next/link";
import { link } from "fs";
import ContentContainer from "@/components/Elements/ContentContainer";

const PARTNERS_DATA = [
  {
    img: partnerIcon1,
    link: "https://www.microsoft.com",
  },
  {
    img: partnerIcon2,
    link: "https://www.dell.com/",
  },
  {
    img: partnerIcon3,
    link: "https://www.amazon.com/",
  },
  {
    img: partnerIcon4,
    link: "https://www.att.com/",
  },
  {
    img: partnerIcon5,
    link: "#",
  },
  {
    img: partnerIcon6,
    link: "https://www.checkpoint.com/",
  },
  {
    img: partnerIcon7,
    link: "https://www.hp.com/",
  },
  {
    img: partnerIcon8,
    link: "https://www.dell.com/en-us/blog/tags/dell-emc/",
  },
  {
    img: partnerIcon9,
    link: "https://www.fortinet.com/",
  },
  {
    img: partnerIcon10,
    link: "https://azure.microsoft.com/en-us",
  },
  {
    img: partnerIcon11,
    link: "https://www.mitel.com/",
  },
  {
    img: partnerIcon12,
    link: "https://www.microsoft.com/en/microsoft-365/",
  },
  {
    img: partnerIcon13,
    link: "https://www.paloaltonetworks.com/",
  },
  {
    img: partnerIcon14,
    link: "#",
  },
  {
    img: partnerIcon15,
    link: "https://www.solarwinds.com/",
  },
  {
    img: partnerIcon16,
    link: "https://www.watchguard.com/",
  },
  {
    img: partnerIcon17,
    link: "https://www.sumologic.com/",
  },
  {
    img: partnerIcon18,
    link: "https://www.f5.com/",
  },
  {
    img: partnerIcon19,
    link: "#",
  },
  {
    img: partnerIcon20,
    link: "https://www.radiflow.com/",
  },
  {
    img: partnerIcon21,
    link: "https://www.vmware.com/",
  },
  {
    img: partnerIcon22,
    link: "#",
  },
  {
    img: partnerIcon23,
    link: "https://www.ruckusnetworks.com/",
  },
  {
    img: partnerIcon24,
    link: "#",
  },
];

const PartnersCard = () => {
  return (
    <ContentContainer>
      <div className="py-5">
        <h3 className="text-gray-900 text-2xl lg:text-4xl font-semibold">
          We are Proud to have Industry leaders as our Partners
        </h3>
        <p className="text-gray-600 py-2">
          InfoSight proudly partners with below industry leading companies.
        </p>
        <div className="grid lg:grid-cols-11 grid-cols-3 lg:gap-10 gap-6 py-5">
          {PARTNERS_DATA.map(({ img, link }, i) => {
            return (
              <Link href={link} key={i}>
                <Image src={img} alt="" />
              </Link>
            );
          })}
        </div>
      </div>
    </ContentContainer>
  );
};

export default PartnersCard;
