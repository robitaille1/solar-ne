import React, { useContext, useEffect } from "react";
import PageLayout from "../containers/PageLayout/PageLayout";
import AboutSection from "../components/AboutSection/AboutSection";
import ContactForm from "../components/ContactForm/ContactForm";
import { SolarContext } from "../context/SolarContext";

const AboutPage = () => {
  const { fetchAboutPage, aboutPage } = useContext(SolarContext);

  useEffect(() => {
    fetchAboutPage();
  }, [fetchAboutPage]);

  return (
    <PageLayout>
      <AboutSection content={aboutPage} />
      <ContactForm />
    </PageLayout>
  );
};

export default AboutPage;
