import React from "react";
import { Container, Box } from "@chakra-ui/react";
import Banner from "../Redesign/Banner";
import SplitWithImage from "../Redesign/AboutModule";

const AboutSection = ({ content, content2 }) => (
  <Box>
    <Banner
      title="About Us"
      image="url(https://res.cloudinary.com/robitaille/image/upload/v1642701443/summer_vc4x1a_xojb5o.jpg)"
    />
    <Container padding={10} maxW={"5xl"}>
      <SplitWithImage content={content} content2={content2} />
    </Container>
  </Box>
);

export default AboutSection;
