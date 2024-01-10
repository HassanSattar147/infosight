import Image from "next/image";
import React from "react";
import youtubeIcon from "../../../../public/webinars/youtube-icon.svg";
import instagramIcon from "../../../../public/webinars/instagram-icon.svg";
import xIcon from "../../../../public/webinars/twitter-icon.svg";
import linkedinIcon from "../../../../public/webinars/linkedin-icon.svg";
import chevronRight from "../../../../public/webinars/chevron-right-white.png";
import Link from "next/link";

const FOLLOW_US_DATA = [
  {
    icon: youtubeIcon,
    title: "Youtube",
    chevron: chevronRight,
    link: "https://www.youtube.com/c/Infosightinc/featured",
  },
  {
    icon: instagramIcon,
    title: "Instagram",
    chevron: chevronRight,
    link: "https://www.instagram.com/infosightinc/",
  },
  {
    icon: xIcon,
    title: "X",
    chevron: chevronRight,
    link: "https://twitter.com/InfoSight",
  },
  {
    icon: linkedinIcon,
    title: "Linkedin",
    chevron: chevronRight,
    link: "https://www.linkedin.com/company/infosight-inc-",
  },
];

const FollowUsCard = () => {
  return (
    <div className="bg-gray-900">
      <div className="p-5 lg:px-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl ">
          Follow Us on Social Media
        </h1>
        <div className="py-5 grid lg:grid-cols-4 grid-cols-1 gap-5">
          {FOLLOW_US_DATA.map(({ icon, title, chevron, link }, i) => {
            return (
              <Link href={link} key={i} target="_blank">
                <div className="flex lg:flex-col gap-3 bg-[#1E3A52] p-10 rounded-lg">
                  <Image src={icon} alt=""  />
                  <p className="text-white font-semibold flex items-center lg:gap-1">
                    {title}{" "}
                    <span>
                      {" "}
                      <Image src={chevron} alt=""  />
                    </span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FollowUsCard;
