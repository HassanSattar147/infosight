"use client";
import React from "react";
import Image from "next/image";
import auditInfoImg1 from "../../../public/audit/Audit-info-img1.png";
import auditInfoImg2 from "../../../public/audit/Audit-info-img2.png";
import ITAuditHero from "./Sub/ITAuditHero";
import ITAuditFeatures from "./Sub/ITAuditFeatures";
import PageLayout from "../PageLayout";

const ITAudit = () => {
  React.useEffect(() => {
    document.title = "IT Audits under ISACA | Infosight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <ITAuditHero />
      <p className="p-5 lg:px-20">
        Home / Advisory Services / Audit & Assurance / IT Audit
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        IT Audit
      </h1>
      <div className="p-5 lg:px-20">
        <p>
          InfoSight conducts IT Audits under ISACA (Information Systems Audit
          and Control Association) standards to provide your organization with
          the best planning, fieldwork, knowledge and reporting on current IT
          systems, controls and processes to meet your compliance requirements.
          InfoSight&apos;s experts understand the requirements of general and
          industry specific guidelines and compliance to ensure you a successful
          IT Audit unique to your company. Our experts conduct your custom IT
          Audits around your organization&apos;s standards, requirements and
          best practices to provide you with a one stop shop in planning,
          testing and reporting activities.
        </p>
        <Image src={auditInfoImg1} alt="" className="w-full pt-3" />
      </div>
      <div className="p-5 lg:px-20">
        <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5">
          <div className="flex flex-col justify-between w-full">
            <h1 className="lg:text-2xl text-gray-900 font-semibold">
              Why are IT Audits Important?
            </h1>
            <p className="text-gray-900 text-sm lg:text-base py-1 ">
              IT Audits provide independent objective assurance that controls
              are working as they are intended. The scope of an IT Audit is
              determined by the results of a risk assessment that includes
              qualitative and quantitative criteria as well as historic and
              current information. IT Audits may also be required to demonstrate
              that all mitigation programs are working as intended. This can be
              a key element of monitoring and governance oversight.
            </p>
          </div>
          <Image src={auditInfoImg2} alt="" className="w-full rounded-lg" />
        </div>
      </div>
      <ITAuditFeatures />
    </PageLayout>
  );
};

export default ITAudit;
