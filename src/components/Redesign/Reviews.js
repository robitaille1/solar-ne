import React, { useContext } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  SimpleGrid,
  Button,
  Link,
} from "@chakra-ui/react";
import { SolarContext } from "../../context/SolarContext";
import { FiChevronRight } from "react-icons/fi";
import { Link as ReachLink } from "react-router-dom";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      textAlign={"center"}
      minHeight={"180px"}
      justifyContent={"center"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      {src && <Avatar src={src} alt={name} mb={2} />}
      <Stack spacing={-1} align={"center"}>
        <Text color={"white"} fontWeight={600}>
          {name}
        </Text>
        <Text fontSize={"sm"} color={"white"}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  const { testimonialsSection } = useContext(SolarContext);
  return (
    <Box
      bgImage={
        "https://res.cloudinary.com/robitaille/image/upload/v1642782143/upclose_euv2ag.jpg"
      }
      bgSize={"cover"}
      boxShadow={"inset 0 0 0 2000px rgba(0, 0, 0, 0.4)"}
    >
      <Container maxW={"6xl"} py={12} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading color={"white"}>Our Clients Speak</Heading>
          <Text color={"white"}>Hear what our clients have to say!</Text>
        </Stack>
        {testimonialsSection && (
          <SimpleGrid spacing={10} columns={{ base: 1, md: 3 }}>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>
                  {testimonialsSection.title_1 && testimonialsSection.title_1}
                </TestimonialHeading>
                <TestimonialText>
                  {testimonialsSection.quote_1 && testimonialsSection.quote_1}
                </TestimonialText>
              </TestimonialContent>

              <TestimonialAvatar
                src={
                  testimonialsSection.image_1 && testimonialsSection.image_1.url
                }
                name={testimonialsSection.name_1 && testimonialsSection.name_1}
                title={testimonialsSection.city_1 && testimonialsSection.city_1}
              />
            </Testimonial>
            {testimonialsSection.quote_2 && (
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>
                    {testimonialsSection.title_2 && testimonialsSection.title_2}
                  </TestimonialHeading>
                  <TestimonialText>
                    {testimonialsSection.quote_2 && testimonialsSection.quote_2}
                  </TestimonialText>
                </TestimonialContent>

                <TestimonialAvatar
                  src={
                    testimonialsSection.image_2[0] &&
                    testimonialsSection.image_2[0].url
                  }
                  name={
                    testimonialsSection.name_2 && testimonialsSection.name_2
                  }
                  title={
                    testimonialsSection.city_2 && testimonialsSection.city_2
                  }
                />
              </Testimonial>
            )}
            {testimonialsSection.quote_3 && (
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>
                    {testimonialsSection.title_3 && testimonialsSection.title_3}
                  </TestimonialHeading>
                  <TestimonialText>
                    {testimonialsSection.quote_3 && testimonialsSection.quote_3}
                  </TestimonialText>
                </TestimonialContent>

                <TestimonialAvatar
                  src={
                    testimonialsSection.image_3 &&
                    testimonialsSection.image_3.url
                  }
                  name={
                    testimonialsSection.name_3 && testimonialsSection.name_3
                  }
                  title={
                    testimonialsSection.city_3 && testimonialsSection.city_3
                  }
                />
              </Testimonial>
            )}
          </SimpleGrid>
        )}

        <Flex justify={"center"}>
          <Link
            as={ReachLink}
            to="/testimonials"
            textAlign={"center"}
            width={"max-content"}
            style={{ textDecoration: "none" }}
          >
            <Button
              bg={"green.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "green.500" }}
            >
              Testimonials <FiChevronRight style={{ marginTop: "2px" }} />
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
