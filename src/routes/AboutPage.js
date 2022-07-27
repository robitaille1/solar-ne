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

  console.log(aboutPage.content2);

  return (
    <PageLayout>
      <AboutSection content={aboutPage.Content} content2={aboutPage.content2} />
      <Contact title="Get in Touch" />
    </PageLayout>
  );
};

export default AboutPage;
