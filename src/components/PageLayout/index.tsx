import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import WeProvide from "../CaseStudy/Sub/WeProvide";
import WhyInfoSight from "../CaseStudy/Sub/InfoSight";
import FooterFutureSection from "../Elements/FutureBlackButtons";
import OurServices from "../HomePage/sub/OurServices";
import { GenericElements } from "@/types";

interface Props {
  children: GenericElements;
  hideNavbar?: boolean;
  hideWeProvide?: boolean;
  hideOurServices?: boolean;
  hideWhyInfoSight?: boolean;
  hideFooterFutureSection?: boolean;
  hideFooterFutureBtns?: boolean;
  hideFooter?: boolean;
  ourServicesHeading?: string;
}

const PageLayout: React.FC<Props> = ({
  children,
  hideNavbar = false,
  hideWeProvide = false,
  hideOurServices = false,
  hideWhyInfoSight = false,
  hideFooterFutureSection = false,
  hideFooterFutureBtns = false,
  hideFooter = false,
}) => {
  return (
    <div>
      {!hideNavbar && <NavBar />}
      {children}
      {!hideWeProvide && <WeProvide />}
      {!hideOurServices && <OurServices />}
      {!hideWhyInfoSight && <WhyInfoSight />}
      {!hideFooterFutureSection && (
        <FooterFutureSection hideFutureBtns={hideFooterFutureBtns} />
      )}
      {!hideFooter && <Footer />}
    </div>
  );
};

export default PageLayout;
