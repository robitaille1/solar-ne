import React from "react";
import logo from "../../assets/logo.png";
import Img from "../utils/Img";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const aboutSection = (props) => (
  <>
    <Content>
      <h2>About Us</h2>
      <Img alt="SPNE Logo" src={logo} />
      <ReactMarkdown source={props.content} />
      <p>
        If you would like to get in touch please fill out the form below, or
        drop us a line at{" "}
        <a
          onClick={() => Event("EMAIL", "Email address clicked", "ABOUT_PAGE")}
          href="mailto:contact@solarpowerne.com"
        >
          contact@solarpowerne.com
        </a>{" "}
        or{" "}
        <a
          onClick={() => Event("PHONE", "Phone number clicked", "ABOUT_PAGE")}
          style={{ marginRight: "10px" }}
          href="tel:207-387-0037"
        >
          207-387-0037
        </a>
        .
      </p>
    </Content>
  </>
);

export default aboutSection;

const Content = styled.div`
  img {
    width: 50%;
  }
`;
