import React from "react";
import PageLayout from "../components/Redesign/PageLayout2";
import WorkSection from "../components/WorkSection/WorkSection";
import Banner from "../components/Redesign/Banner";

const ourWorkPage = () => (
  <PageLayout>
    <Banner
      title="Our Work"
      image="url(https://res.cloudinary.com/robitaille/image/upload/v1642701443/summer_vc4x1a_xojb5o.jpg)"
    />
    <WorkSection />
  </PageLayout>
);

export default ourWorkPage;
