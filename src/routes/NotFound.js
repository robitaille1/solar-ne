import React from "react";
import WithSubnavigation from "../components/Redesign/Nav2";
import LargeWithNewsletter from "../components/Redesign/Footer2";
import Blogs from "../components/Redesign/Blogs2";
import { Box, Heading, Text, Button, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const NotFound = (props) => (
  <main>
    <WithSubnavigation />
    <Box textAlign="center" py={20} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, green.400, green.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you're looking for does not seem to exist
      </Text>
      <Link as={ReachLink} to="/">
        <Button
          colorScheme="green"
          bgGradient="linear(to-r, green.400, green.500, green.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Link>
    </Box>
    <Blogs />
    <LargeWithNewsletter />
  </main>
);

export default NotFound;
