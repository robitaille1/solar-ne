import React from "react";
import WithSubnavigation from "../components/Redesign/Nav2";
import WithBackgroundImage from "../components/Redesign/Hero2";
import SimpleThreeColumns from "../components/Redesign/Features2";
import StatsGridWithImage from "../components/Redesign/About2";
import ContactFormWithSocialButtons from "../components/Redesign/Contact2";
import WithSpeechBubbles from "../components/Redesign/Reviews";
import LargeWithNewsletter from "../components/Redesign/Footer2";
import Blogs from "../components/Redesign/Blogs2";

const homePage = (props) => (
  <main>
    <WithSubnavigation />
    <WithBackgroundImage />
    <StatsGridWithImage />
    <SimpleThreeColumns />
    <ContactFormWithSocialButtons title="Get in Touch" />
    <WithSpeechBubbles />
    <Blogs />
    <LargeWithNewsletter />
  </main>
);

export default homePage;
