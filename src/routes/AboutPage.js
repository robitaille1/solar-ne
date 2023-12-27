import React from 'react';
import PageLayout from '../components/Redesign/PageLayout2';
import AboutSection from '../components/AboutSection/AboutSection';
import Contact from '../components/Redesign/Contact2';

const AboutPage = () => {
  return (
    <PageLayout>
      <AboutSection />
      <Contact title="Get in Touch" />
    </PageLayout>
  );
};

export default AboutPage;
