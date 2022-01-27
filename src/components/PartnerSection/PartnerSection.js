import React from "react";
import Markdown from "../Redesign/Markdown";
import { Container, Box, Heading } from "@chakra-ui/react";

const partnerSection = ({ partner }) => {
  return (
    <Container maxW={"5xl"} py={12}>
      <Box textAlign={"center"}>
        <Heading>{partner && partner[0].PartnerName}</Heading>
      </Box>

      <Box py={10}>
        <Markdown content={partner && partner[0].PartnerDescription} />
      </Box>
    </Container>
  );
};

export default partnerSection;
