import React from "react";
import Banner from "../Redesign/Banner";
import { Container, Box, Skeleton, Stack } from "@chakra-ui/react";
import ContactCTA from "../Redesign/ContactCTA";
import Markdown from "../Redesign/Markdown";

const investorsSection = ({ content }) => (
  <Box>
    <Banner
      title="Investors"
      image="url(https://res.cloudinary.com/robitaille/image/upload/v1642701443/summer_vc4x1a_xojb5o.jpg)"
    />
    <Container maxW={"5xl"} py={12} color={"gray.500"}>
      {content ? (
        <Markdown content={content} />
      ) : (
        <Stack>
          <Skeleton height="30px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" />
        </Stack>
      )}
    </Container>
    <ContactCTA
      title="Join the Equitable Energy Initiative"
      description="We provide $0-Down solar design, procurement and installation services to Non-Profits while educating our communities about the importance of clean energy."
      image="https://res.cloudinary.com/robitaille/image/upload/v1644602497/photo-1628010055450-21f2a0863767_vetogh.avif"
    />
  </Box>
);

export default investorsSection;
