import React from "react";
import Markdown from "../Redesign/Markdown";
import {
  Container,
  Box,
  Heading,
  Divider,
  Link,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const partnerSection = ({ partner }) => {
  return (
    <Container maxW={"5xl"} py={12}>
      <Box textAlign={"center"}>
        <Heading>{partner && partner[0].PartnerName}</Heading>
        <Divider mt={10} />
      </Box>

      <Box py={10}>
        <Markdown content={partner && partner[0].PartnerDescription} />
        <Flex justify={"center"} mt={10}>
          <Link as={ReachLink} to="/" style={{ textDecoration: "none" }}>
            <Button
              bg={"green.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "green.500" }}
            >
              Home
            </Button>
          </Link>
          <Link
            as={ReachLink}
            to="/partners"
            style={{ textDecoration: "none" }}
          >
            <Button
              bg={"white"}
              rounded={"full"}
              variant={"ghost"}
              colorScheme={"green"}
              ml={2}
            >
              All Partners <FiChevronRight style={{ marginTop: "2px" }} />
            </Button>
          </Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default partnerSection;
