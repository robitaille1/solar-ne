import React from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SplitWithImage() {
  return (
    <Container maxW={"6xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} id="mainheader">
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"green.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("green.50", "green.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Mission
          </Text>
          <Heading>A modern Solar PV installer</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            At Solar Power New England our mission is to help homeowners
            increase their ability to produce their own power, and improve their
            ability to manage their energy consumption.
          </Text>
          <Text color={"gray.500"} fontSize={"lg"}>
            Our focus, to help the people of Maine and their neighbors, in the
            transition to a renewable and sustainable energy future.
          </Text>
          <Text color={"gray.500"} fontSize={"lg"}>
            Invest in your home, community, local business and congratulations
            on taking your first step toward energy independence!
          </Text>
        </Stack>
        <Flex background={"black"} overflow={"hidden"}>
          <Image
            rounded={"md"}
            alt={"feature image"}
            opacity={0.9}
            src={
              'https://res.cloudinary.com/robitaille/image/upload/v1658951088/gorham3_b3798280cb.jpg'
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
