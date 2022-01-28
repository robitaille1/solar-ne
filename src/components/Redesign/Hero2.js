import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

export default function WithBackgroundImage() {
  return (
    <Flex
      w={"full"}
      h={"70vh"}
      backgroundImage={
        "url(https://res.cloudinary.com/robitaille/image/upload/v1642701443/summer_vc4x1a_xojb5o.jpg)"
      }
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
            Invest in your home, community, and local businesses!
          </Text>
          <Stack direction={"row"}>
            <ScrollLink
              to="mainheader"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              <Button
                bg={"green.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "green.500" }}
              >
                Learn More
              </Button>
            </ScrollLink>
            <Link to="/our-work">
              <Button
                bg={"whiteAlpha.600"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.700" }}
              >
                See Our Work
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
