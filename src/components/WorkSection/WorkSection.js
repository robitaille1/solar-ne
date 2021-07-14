import React, { useContext, useEffect } from "react";
import { SolarContext } from "../../context/SolarContext";
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
  { id: 12, src: "wells1", alt: "Wells Project", time: 4000 },
  { id: 13, src: "wells2", alt: "Wells Project", time: 2000 },
  { id: 14, src: "wells3", alt: "Wells up close", time: 6000 },
  { id: 15, src: "wells4", alt: "Wells up close", time: 1000 },
  { id: 16, src: "wells5", alt: "Wells up close", time: 3000 },
  { id: 17, src: "wells6", alt: "Another happy customer!", time: 2000 },
];

const options = {
  buttons: {
    showDownloadButton: false,
    showAutoplayButton: false,
  },
};

items = items.map(function (item) {
  return (
    <Fade key={item.id} duration={item.time}>
      <Lazyload>
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

const WorkSection = () => {
  const { fetchImages, images } = useContext(SolarContext);
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  if (images) {
    items = images.map(function (item) {
      let description = `${item.location}`;
      if (item.description !== null) {
        description = `${item.description} - ${item.location}`;
      }
      return (
        <Fade duration={Math.floor(Math.random() * 7000) + 1000}>
          <Lazyload key={item.id}>
            <Image
              cloudName="robitaille"
              publicId={item.Image.hash}
              width="100%"
              alt={description}
            />
          </Lazyload>
        </Fade>
      );
    });
  }

  return (
    <>
      <HeadingDiv>
        <h2>We're extremely proud of our work!</h2>
        <p style={{ textAlign: "center" }}>
          From projects big to small, we love helping our neighbors become
          energy independent!
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
        <p>
          Interested in how we can help you start your clean energy journey?
        </p>
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
};

export default WorkSection;

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
  background-color: #3b8f28;
  color: white;
  padding: 20px 20px;
  margin-bottom: 30px;
  border-radius: 5px 5px 0 0;

  a {
    color: #ece485;
  }
`;

const FootingDiv = styled.div`
  background-color: #3b8f28;
  color: white;
  padding: 20px 20px;
  border-radius: 0 0 5px 5px;

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
