import React from "react";
import PageLayout from "../containers/PageLayout/PageLayout";
import AboutSection from "../components/AboutSection/AboutSection";
import ContactForm from "../components/ContactForm/ContactForm";

const aboutPage = () => (
  <PageLayout>
    <AboutSection />
    <ContactForm />
  </PageLayout>
);

export default aboutPage;
