import Image from "next/image";
import React from "react";
import webCardImg from "../../../../public/webinars/webinar-demand-img.png";
import youtubeIcon from "../../../../public/webinars/youtube-icon.svg";
import Link from "next/link";

const WEBINARS_VIDEO_DATA = [
  {
    title: "Cyber Risk Security",
    description:
      "Simplify your journey to security by assessing your risk readiness.",
    link: "https://www.youtube.com/watch?v=2CMv-hlY3GQ",
  },
  {
    title: "IoT Security",
    description:
      "Simplify your journey to security by assessing your risk readiness.",
    link: "https://www.youtube.com/watch?v=Tp-7JIK7mzQ",
  },
  {
    title: "Permissions",
    description:
      "Do you know exactly what permissions your users have in the cloud or whten they change?",
    link: "https://www.youtube.com/watch?v=U3efUF4FUy4",
  },
  {
    title: "New Era Industrial Control Cyber Threats",
    description: "Threats call for new defenses?",
    link: "https://www.youtube.com/watch?v=H8Z9jwnEz14",
  },
];

const WebCard = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-7 py-10">
        {WEBINARS_VIDEO_DATA.map(({ title, description, link }, i) => {
          return (
            <div key={"WEBINARES__" + i}>
              <Link href={link} target="_blank">
                <div className="rounded-lg  border border-gray-300">
                  <Image
                    src={webCardImg}
                    alt=""
                    className="rounded-lg w-full"
                  />
                  <div className="pt-2 pb-5">
                    <h1 className="text-[#2F5A7E] mt-2 px-4 text-xl ">
                      {title}
                    </h1>
                    <p className="text-gray-500 text-sm lg:text-base mt-2 px-4">
                      {description}
                    </p>
                    <button className="text-[#EA5715] font-semibold flex items-center gap-2 mt-5 px-4">
                      <span>
                        <Image src={youtubeIcon} alt="" />
                      </span>
                      Watch Now
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* <div className="text-center">
        <button className="text-white bg-black px-5 py-2 rounded-xl hover:bg-gray-900">
          Load More
        </button>
      </div> */}
    </div>
  );
};

export default WebCard;
