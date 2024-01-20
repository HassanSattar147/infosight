"use client";
import React from "react";
import Form from "./Sub/Form";
import ContactInfo from "./Sub/ContactInfo";
import PageLayout from "../PageLayout";
import ContentContainer from "../Elements/ContentContainer";
import Breadcrumbs from "../Elements/Breadcrumbs";

const ContactUs = () => {
  React.useEffect(() => {
    document.title = "Contact Infosight Cybersecurity Solutions | InfoSight";
  }, []);
  return (
    <PageLayout
      hideWeProvide
      hideOurServices
      hideWhyInfoSight
      hideFooterFutureBtns
    >
      <Breadcrumbs path="Home / Contact Us" />
      <ContentContainer>
        <h3 className="py-5 text-gray-900 text-2xl lg:text-4xl font-semibold">
          Contact Us
        </h3>
      </ContentContainer>
      <ContactInfo />
      <Form />
    </PageLayout>
  );
};

export default ContactUs;
