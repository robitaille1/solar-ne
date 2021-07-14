import React from "react";
import styled from "styled-components";
import Img from "../utils/Img";
import ReactMarkdown from "react-markdown";
import ReactGA from "react-ga";

const partnerSection = (props) => {
  console.log(props.partner[0]);
  return (
    <Content>
      <h2>{props.partner[0].PartnerName}</h2>
      <Img
        alt={props.partner[0].PartnerImage[0].alternativeText}
        src={props.partner[0].PartnerImage[0].formats.thumbnail.url}
      />
      <PartnerContent>
        <ReactMarkdown source={props.partner[0].PartnerDescription} />
      </PartnerContent>

      <Contact>
        <p>Interested in how we partner with {props.partner[0].PartnerName}?</p>
        <p>
          Contact us today!{" "}
          <ContactLink
            style={{ marginRight: "10px" }}
            href="tel:207-387-0037"
            onClick={ReactGA.event({
              category: "PHONE",
              action: "Phone number clicked",
              label: "WORK_PAGE",
            })}
          >
            207-387-0037
          </ContactLink>
          <ContactLink
            href="mailto:contact@solarpowerne.com"
            onClick={ReactGA.event({
              category: "EMAIL",
              action: "Email address clicked",
              label: "WORK_PAGE",
            })}
          >
            contact@solarpowerne.com
          </ContactLink>
        </p>
      </Contact>
    </Content>
  );
};

export default partnerSection;

const Content = styled.div`
  img {
    width: 50%;
  }
`;

const ContactLink = styled.a`
  display: block;
  word-break: normal;
  color: #ece485 !important;
  @media (min-width: 499px) {
    display: inline;
  }
`;

const Contact = styled.div`
  background: #3b8f28;
  margin-top: 3rem;
  padding: 3rem 2rem;
  p {
    color: white;
    margin: 0;
    text-align: center;
  }
`;

const PartnerContent = styled.div`
  padding-bottom: 20px;

  img {
    max-width: 100%;
  }

  p {
    display: inline-block;
    text-align: center;
    img {
      justify-self: center;
      width: 50%;
    }
  }
`;
