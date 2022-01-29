import React from "react";
import Markdown from "../Redesign/Markdown";
import Banner from "../Redesign/Banner";
import { Container, Box } from "@chakra-ui/react";

const resourcesSection = ({ content }) => {
  return (
    <Box>
      <Banner
        title="Incentives and Resources"
        image="url(https://res.cloudinary.com/robitaille/image/upload/v1642701443/summer_vc4x1a_xojb5o.jpg)"
      />
      <Container maxW={"5xl"} pb={12}>
        <Box py={10}>
          <Markdown content={content && content} />
        </Box>
      </Container>
    </Box>
  );
};

export default resourcesSection;
