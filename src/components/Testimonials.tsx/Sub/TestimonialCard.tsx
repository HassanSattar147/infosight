import Image from "next/image";
import React from "react";
import ratingImg from "../../../../public/homepage/full-starts-img.svg";
import Button from "@/components/Elements/Button";

export const TESINOMIALS_DATA = [
  {
    description:
      "We have been using InfoSight as an Advisory and Managed Services provider for 7+ years now and they have been great! Their employees have performed multiple risk assessments on our network and always provide us with informative feedback keeping our environment safe. They've also upgraded and maintained our infrastructure to insure we have 99.9% uptime. This has ensured our institution is always available to serve our customers. We highly recommend using InfoSight for any security testing needs.",
    user: "A Financial Client, FL ",
  },
  {
    description:
      "InfoSight is a great cybersecurity provider. They are willing to go above and beyond to provide us with a safe and secure environment and make sure we are always comfortable with their levels of service. They are very easy to work with and always provide the information we are looking for along with additional information that we may have never thought of. I highly recommend!",
    user: "A Financial Client, TN ",
  },
  {
    description:
      "InfoSight's managed security and customer service is like no other and that's why we have been working with them for 7 years and counting. My company has worked with countless security providers in the past and InfoSight exceeds them all. InfoSight's employees are attentive and assessible at all hours of the day and provides us with personal numbers, so we don't have to waste our time sitting on hold. Since we started working with InfoSight they have always been very efficient and pay attention to detail. They don't look for a quick solution or most expensive option, they are in it for the long run and provide us with very knowledgeable thought out solutions that are customized to our networks. InfoSight keeps our networks safe 24/7!",
    user: "A Financial Client, GA ",
  },
  {
    description:
      "For 11+ years InfoSight has continuously monitored our networks along with performing multiple network room clean ups, server conversions, set up our internal phone systems, provide patch management services and more for complete cybersecurity. Their services are great because their employees are like no other. Trusting someone with your network's security is VERY important and that is exactly why we have stuck with InfoSight for 11 years and counting. We trust InfoSight with all of our managed security and advisory services to ensure our network is safe from any cyberattacks. InfoSight really is a one stop shop for security services with experts you can trust!",
    user: "A Financial Client, GA ",
  },
  {
    description:
      "InfoSight is very responsive. Anytime I have a question about something I can pick up the phone and call them, even if it's not related directly to what we are working on; they don't hesitate to offer advice and/or solutions.",
    user: "A Government Client ",
  },
  {
    description:
      "We are a small business with 20 employees. As a business we are large enough to become overwhelmed with IT projects, we outsourced some of the workload to stay afloat. InfoSight has been instrumental in keeping our 'ship' upright and moving forward. They've been there for us when we've had technical equipment emergencies and cybersecurity needs. My experience with their staff has always been great, and when I've needed to talk to someone there has always been someone there to talk to immediately. I also find their list of available services to be current and affordable. InfoSight has provided us with the peace of mind needed to secure our network and business and I have recommended them to fellow IT colleagues for the same reasons.",
    user: "IT Director, County Schools Federal Credit Union, CA ",
  },
  {
    description:
      "Our company's patch management and security monitoring has improved immensely since working with InfoSight. We have been using their services for about 3 years now and their customer service combined with their attention to detail and security solutions makes them really stand out among the rest.",
    user: "A Hospitality Client, FL ",
  },
  {
    description:
      "I would highly recommend Infosight for everything from day to day functioning to long term planning. They are a one stop shop that can efficiently and effectively handle any and all of a company's IT needs.",
    user: "A Healthcare Customer ",
  },
  {
    description:
      "InfoSight's employees are just amazing. If I ever have a problem with my phone or whitelist, they are on top of it and resolve the issue quickly. There is a reason why we have been with InfoSight for 22 years and counting! Their Advisory and Managed Services are performed efficiently with in depth explanations and reporting. If I ever have any questions InfoSight's employees are more than willing to help me. I recommend InfoSight's security services for any and all security needs, from performing security tests to making sure we are updated on the latest compliances and regulations within our industry, InfoSight does it all! I know we aren't going anywhere anytime soon!",
    user: "A Florida West Coast Credit Union Employee, FL ",
  },
  {
    description:
      "For over 20 years InfoSight has provided us with outstanding Advisory and IT Managed Services. InfoSight set us up with one primary point of contact, that way we don't have to go through the hassle of calling a help desk, sit on hold or wait until our ticket is up in line. This makes my job easier because of the quick turnaround time for resolutions. I also never have to explain how our system is set up or what our network is like because InfoSight already knows. The engagement and personal touch from InfoSight's team cannot be beat! If you are looking for a personable, knowledge group of experts to assist you with a secure environment, InfoSight is the way to go!",
    user: "VP of Operations & Marketing, Florida West Coast Credit Union, FL ",
  },
  {
    description:
      "InfoSight makes sure our network is secure 24/7. Their employees are always educated on the latest rules and regulations of our industry and make sure to reinforce those rules and regulations in our network.",
    user: "A Financial Client, GA",
  },
  {
    description:
      "InfoSight is a great cybersecurity provider! They always work within or below our budget and are up to date on the rules and regulations of our industry. We have been extremely satisfied with the services they provide.",
    user: "Water Supply Manager, NC ",
  },
  {
    description:
      "We chose InfoSight to run our security assessments because they have worked with other cooperatives like us and we heard great things about them. InfoSight's employees are very thorough, professional, could do the job within budget and get the results we were looking for. We highly recommend them!",
    user: "A Pioneer Electric Employee, OH ",
  },
  {
    description:
      "InfoSight allowed us to increase our cybersecurity posture within our networks",
    user: "A Prairieland Electric Employee, KS ",
  },
  {
    description:
      "Working with InfoSight is such a smooth process. They know what to do and how to do it and they always go above and beyond to make sure our networks are secure. We never have to check in on what InfoSight is doing because we trust them, that being said they also never leave us in the dark about anything. Their communication with us really stands out from previous providers. Their experts communication and services really stand out and that's why we continue to work with InfoSight and have no plans on stopping!",
    user: "A Quirch Foods Employee, FL",
  },
  {
    description:
      "We started using InfoSight because of their cybersecurity services but we continue to use InfoSight because of their personal, quick to respond, staff. We understand that we are a small business, being small sometimes means you get put on the backburner compared to other bigger companies when issues arise. This is not the case with InfoSight. Whenever we give them a call there is no wait time until we get a response/solution to our problem. We also don't have to go through multiple steps to get in contact with an InfoSight staff member, they give you direct numbers which saves us a lot of time. They take the time to get to know our teammates and makes sure that we know we can come to them with any problem that may arise. You won't get the type of personable staff with many other cybersecurity providers and that is why we have stuck with InfoSight for 13 years and counting!",
    user: "A South Georgia Bank Employee, GA",
  },
  {
    description:
      "InfoSight provides excellent customer service and is always very responsive. The employees (Doug and Sidney) always go above and beyond when helping us. The team explains situations in great detail and always provide multiple solutions to our problems. They are so helpful!",
    user: "A Tampa Museum Employee, FL",
  },
  {
    description:
      "InfoSight did an excellent job with our annual security audit. Their experts were very thorough with their reports and provided us with everything we needed and more. InfoSight was very accommodating with our needs of an on site analysis and it was overall a very smooth and easy experience! I highly recommend InfoSight.",
    user: "Electric Coop Client, GA",
  },
  {
    description:
      "We used InfoSight for the first time a few months ago to perform a gap audit analysis. InfoSight's staff ran the gap audit analysis in a very professional timely manner and were highly educated. They explained the results and reports of the analysis in depth, as well as answered any questions my teammates and I had.",
    user: "VP of Information Services, Jefferson Energy Cooperative, GA",
  },
];

const PAGE_SIZE = 5;

const TestimonialCard = () => {
  const [showingCount, setShowingCount] = React.useState(PAGE_SIZE);

  const handleLoadMore = () => {
    setShowingCount((p) => p + PAGE_SIZE);
  };

  return (
    <div>
      <div className="grid gap-5 lg:gap-10 mt-5 lg:mt-10 mb-10">
        {TESINOMIALS_DATA.slice(0, showingCount).map(
          ({ description, user }, i) => {
            return (
              <div
                key={"TESINOMIALS_DATA__" + i}
                className="bg-white shadow-md shadow-gray-300 border border-gray-200 p-5 rounded-xl"
              >
                <p className="pb-6">{description}</p>
                <Image src={ratingImg} alt="" />
                <p className="mt-2 font-semibold text-[#e16b38]">- {user}</p>
                {/* <p >{designation}</p> */}
              </div>
            );
          }
        )}
      </div>
      {showingCount > TESINOMIALS_DATA.length ? null : (
        <div className="mb-10 text-center">
          <Button text="Load More" onClick={handleLoadMore} />
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
