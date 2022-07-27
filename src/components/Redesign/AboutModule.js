import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  Heading,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Markdown from "./Markdown";

export default function SplitWithImage({ content, content2 }) {
  return (
    <Container maxW={"5xl"} pt={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://res.cloudinary.com/robitaille/image/upload/v1644603181/photo-1559302504-64aae6ca6b6d_jv35de.avif"
            }
            objectFit={"cover"}
          />
        </Flex>
        <Stack spacing={4}>
          <Heading>
            Hi{" "}
            <span role="img" aria-label="lobster">
              &#x1F44B;
            </span>{" "}
            , We're Solar Power New England
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            {content ? (
              <Markdown content={content} />
            ) : (
              <Skeleton height="100px" />
            )}
          </Text>
        </Stack>
      </SimpleGrid>
      <Box mt={{ base: 1, md: 5 }}>
        <Text color={'gray.500'} fontSize={'lg'}>
          {content2 && <Markdown content={content2} />}
        </Text>
      </Box>
    </Container>
  );
}
