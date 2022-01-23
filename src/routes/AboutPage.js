import React, { useContext, useEffect } from "react";
import PageLayout from "../components/Redesign/PageLayout2";
import AboutSection from "../components/AboutSection/AboutSection";
import Contact from "../components/Redesign/Contact2";
import { SolarContext } from "../context/SolarContext";

const AboutPage = () => {
  const { fetchAboutPage, aboutPage } = useContext(SolarContext);

  useEffect(() => {
    fetchAboutPage();
  }, [fetchAboutPage]);

  return (
    <PageLayout>
      <AboutSection content={aboutPage.Content} />
      <Contact title="Get in Touch" />
    </PageLayout>
  );
};

export default AboutPage;
