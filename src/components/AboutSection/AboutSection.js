import React from "react";
import logo from "../../assets/logo.png";
import Img from "../utils/Img";

const aboutSection = () => (
  <>
    <Img alt="SPNE Logo" src={logo} />
    <h2>About Us</h2>
    <p>
      We're a small Maine company with a personal commitment to improving the
      lives of those in our community, and providing the best equipment at the
      best possible price to save money, energy, and our environment. If you
      would like to learn more about us, contact us today at{" "}
      <a href="mailto:contact@solarpowerne.com">contact@solarpowerne.com</a>.
    </p>
  </>
);

export default aboutSection;
