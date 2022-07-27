import React from "react";
import WithSubnavigation from "../components/Redesign/Nav2";
import LargeWithNewsletter from "../components/Redesign/Footer2";
import Blogs from "../components/Redesign/Blogs2";
import Contact from "../components/Redesign/Contact2";
import Banner from "../components/Redesign/Banner";

const ContactPage = () => (
  <main>
    <WithSubnavigation />
    <Banner image="url(https://res.cloudinary.com/robitaille/image/upload/v1642701443/summer_vc4x1a_xojb5o.jpg)" />
    <Contact title="Contact Us" />
    <Blogs />
    <LargeWithNewsletter />
  </main>
);

export default ContactPage;
