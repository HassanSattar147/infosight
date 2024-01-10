import Image from "next/image";
import React from "react";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const TextPictorialCard = () => {
  return (
    <div className="p-5 lg:px-20">
      <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5">
        <div className="flex flex-col justify-between w-full">
          <h1 className="lg:text-2xl text-gray-900 font-semibold">
            The Challenge
          </h1>
          <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
            In today&apos;s world we have both a war against cybercrime and the
            need for systems services to be available 24x7x365., To further
            exasperate this challenge is a tighter budget and fewer resources.
            Additionally, having a plan that addresses all risk, even Pandemics
            is critical to success!
          </p>
        </div>
        <Image src={infoImg1} alt="" className="w-full rounded-lg" />
      </div>
      <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5 border-y-2 border-gray-300">
        <Image
          src={infoImg2}
          alt=""
          className="w-full rounded-lg lg:block hidden"
        />
        <div className="flex flex-col justify-between w-full">
          <h1 className="lg:text-2xl text-gray-900 font-semibold">
            How We Solve It
          </h1>
          <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
            We recognize that BCP & DR planning isn&apos;t just about natural
            disaster, but also man-made events and pandemic circumstances never
            taken seriously in the past. Additionally, all BCP & DR plans should
            be cyber-resilient to protect against attacks by bad actors and even
            rogue employees. We provide you with a 5-step approach that to
            showcase current security posture by testing your network,
            recommending where to improve so we can come up with a strong plan
            and then continuously testing that plan to ensure it upholds against
            attacks.
          </p>
        </div>
        <Image src={infoImg2} alt="" className="w-full rounded-lg lg:hidden" />
      </div>
      <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5">
        <div className="flex flex-col justify-between w-full">
          <h1 className="lg:text-2xl text-gray-900 font-semibold">
            The Outcome
          </h1>
          <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
            A plan that is more than a document, but a workable plan you
            employees can follow to ensure successful operations during a
            crucial time. We develop not just a BCP document but an “Emergency
            Response Plan” your employees can actually follow! With our process
            you can feel secure knowing your organization has the most up to
            date plan to restore operations quickly.
          </p>
        </div>
        <Image src={infoImg3} alt="" className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default TextPictorialCard;
