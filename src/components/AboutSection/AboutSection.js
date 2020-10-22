import React from "react";
import logo from "../../assets/logo.png";
import Img from "../utils/Img";

const aboutSection = () => (
  <>
    <Img alt="SPNE Logo" src={logo} />
    <h2>About Us</h2>
    <p>
      We're a small Maine company with a personal commitment to improving the
      lives of those in our community by providing the best equipment at the
      best possible price to save money, energy, and our environment. If you
      would like to get in touch please fill out the form below, or drop us a
      line at{" "}
      <a href="mailto:contact@solarpowerne.com">contact@solarpowerne.com</a> or{" "}
      <a style={{ marginRight: "10px" }} href="tel:207-387-0037">
        207-387-0037
      </a>
      .
    </p>
  </>
);

export default aboutSection;
