import React from "react";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import Lazyload from "react-lazyload";
import { Fade } from "react-reveal";
import { SRLWrapper } from "simple-react-lightbox";
import { Image } from "cloudinary-react";
import ReactGA from "react-ga";
import { Text, Heading, Box, Link, Stack, Container } from "@chakra-ui/react";

const options = {
  buttons: {
    showDownloadButton: false,
    showAutoplayButton: false,
  },
};

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const WorkSection = ({ images }) => {
  let items;
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
    <Container maxW={"6xl"}>
      <Stack padding={10} align={"center"}>
        <Heading>We're extremely proud of our work!</Heading>
        <Text color={"gray.500"}>
          From projects big to small, we love helping our neighbors become
          energy independent!
        </Text>
      </Stack>
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
      <Box fontSize={20} padding={10} textAlign={"center"}>
        <Text>
          Interested in how we can help you start your clean energy journey?
        </Text>
        <Text>Contact us today!</Text>
        <Link
          style={{ marginRight: "10px" }}
          href="tel:207-387-0037"
          onClick={ReactGA.event({
            category: "PHONE",
            action: "Phone number clicked",
            label: "WORK_PAGE",
          })}
          textDecoration={"underline"}
        >
          207-387-0037
        </Link>
        <Link
          href="mailto:contact@solarpowerne.com"
          onClick={ReactGA.event({
            category: "EMAIL",
            action: "Email address clicked",
            label: "WORK_PAGE",
          })}
          textDecoration={"underline"}
        >
          contact@solarpowerne.com
        </Link>
      </Box>
    </Container>
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
