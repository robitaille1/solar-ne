import React from "react";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import Lazyload from "react-lazyload";
import { Fade } from "react-reveal";
import { SRLWrapper } from "simple-react-lightbox";
import { Image } from "cloudinary-react";
import ReactGA from "react-ga";

let items = [
  { id: 1, src: "gorham", alt: "Gorham Project", time: 3000 },
  { id: 2, src: "gorham2", alt: "Gorham Project", time: 5000 },
  { id: 3, src: "gorham3", alt: "Gorham Project", time: 1000 },
  { id: 4, src: "gorham4", alt: "Gorham Project", time: 4000 },
  { id: 5, src: "portland", alt: "Portland Project", time: 2000 },
  { id: 5, src: "portland2", alt: "Portland Project", time: 1000 },
  { id: 6, src: "yarmouth", alt: "Yarmouth Project", time: 3000 },
  { id: 7, src: "yarmouth2", alt: "Yarmouth Project", time: 5000 },
  { id: 8, src: "yarmouth4", alt: "Yarmouth Project", time: 1000 },
  { id: 9, src: "yarmouth3", alt: "Yarmouth Project", time: 2000 },
  { id: 10, src: "yarmouth5", alt: "Yarmouth Project", time: 6000 },
  { id: 11, src: "panels", alt: "Up close", time: 1000 },
];

const options = {
  buttons: {
    showDownloadButton: false,
    showAutoplayButton: false,
  },
};

items = items.map(function (item) {
  return (
    <Fade duration={item.time}>
      <Lazyload key={item.id}>
        <Image
          cloudName="robitaille"
          publicId={item.src}
          width="100%"
          alt={item.alt}
        />
      </Lazyload>
    </Fade>
  );
});

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const workSection = () => (
  <>
    <HeadingDiv>
      <h2>We're extremely proud of our work!</h2>
      <p style={{ textAlign: "center" }}>
        From projects big to small, we love helping our neighbors become energy
        independent!
      </p>
    </HeadingDiv>
    <Test>
      <SRLWrapper options={options}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {items}
        </Masonry>
      </SRLWrapper>
    </Test>
    <FootingDiv>
      <p>Interested in how we can help you start your clean energy journey?</p>
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
    </FootingDiv>
  </>
);

export default workSection;

const Test = styled.div`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }

  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    margin-bottom: 30px;
  }

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

const HeadingDiv = styled.div`
  background-color: #1f4a15;
  color: white;
  padding: 20px 20px;
  margin-bottom: 30px;
  border-radius: 10px 10px 0 0;

  a {
    color: #ece485;
  }
`;

const FootingDiv = styled.div`
  background-color: #1f4a15;
  color: white;
  padding: 20px 20px;
  border-radius: 0 0 10px 10px;

  p {
    text-align: center;
  }

  a {
    color: #ece485;
  }
`;

const ContactLink = styled.a`
  display: block;
  word-break: normal;
  @media (min-width: 499px) {
    display: inline;
  }
`;
