import React from "react";
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Banner(props) {
  return (
    <Flex
      w={"full"}
      h={{ base: "10vh", md: "20vh" }}
      backgroundImage={props.image}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            textAlign={"left"}
          >
            {props.title}
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
