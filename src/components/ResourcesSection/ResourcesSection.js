import React from "react";
import Markdown from "../Redesign/Markdown";
import Banner from "../Redesign/Banner";
import { Container, Box, Skeleton, Stack } from "@chakra-ui/react";

const resourcesSection = ({ content }) => {
  return (
    <Box>
      <Banner
        title="Incentives and Resources"
        image="url(https://res.cloudinary.com/robitaille/image/upload/v1642701443/summer_vc4x1a_xojb5o.jpg)"
      />
      <Container maxW={"5xl"} pb={12}>
        <Box py={10}>
          {content ? (
            <Markdown content={content} />
          ) : (
            <Stack>
              <Skeleton height="50px" />
              <Skeleton height="50px" />
              <Skeleton height="50px" />
              <Skeleton height="60px" />
              <Skeleton height="50px" />
              <Skeleton height="50px" />
            </Stack>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default resourcesSection;
