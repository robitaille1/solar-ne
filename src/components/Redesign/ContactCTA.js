import React from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

export default function ContactCTA({ title, description, image }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} maxH={500}>
      <Flex bg="green.400">
        <Image
          src={image}
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          bg="gray.100"
          loading="lazy"
          opacity={0.4}
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={{ base: 10, lg: 24 }}
        zIndex={3}
        bg="gray.100"
      >
        <Heading mb={4}>{title}</Heading>
        <Text mb={4} letterSpacing="wider" color={"gray.500"}>
          {description}
        </Text>
        <Box display="inline-flex" rounded="md" shadow="md">
          <Link as={ReachLink} to="/contact">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"green.400"}
              href={"#"}
              _hover={{
                bg: "green.300",
              }}
              px={5}
              py={3}
            >
              Contact Us
            </Button>
          </Link>
        </Box>
      </Flex>
    </SimpleGrid>
  );
}
