import React from "react";
import Banner from "../Redesign/Banner";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  useColorModeValue,
  VStack,
  Container,
  Text,
  Skeleton,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail, MdPhoneIphone } from "react-icons/md";
import ReactGA from "react-ga";
import Markdown from "../Redesign/Markdown";

const CareersSection = ({ content, title }) => {
  const formSubmit = (e) => {
    ReactGA.event({
      category: "FORM",
      action: "Contact form submitted",
      label: "HOME_PAGE",
    });
  };
  return (
    <Box>
      <Banner
        title="Careers"
        image="url(https://res.cloudinary.com/robitaille/image/upload/v1642701443/summer_vc4x1a_xojb5o.jpg)"
      />

      <Container maxW={"5xl"} py={12}>
        <Heading mb={5}>Join the team!</Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
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
        </Text>
      </Container>

      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        align="center"
        justify="center"
        id="contact"
      >
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 5, lg: 5 }}
          p={{ base: 5, lg: 10 }}
          width={"100%"}
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 10 }}>
              <Heading
                fontSize={{
                  base: "4xl",
                  md: "5xl",
                }}
              >
                {title}
              </Heading>

              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}
                width={{
                  base: "100%",
                  sm: "100%",
                  md: "75%",
                  lg: "65%",
                }}
                maxW={"700px"}
              >
                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base"
                  width={"100%"}
                >
                  <VStack spacing={5}>
                    <form
                      action="https://formsubmit.co/contact@solarpowerne.com"
                      method="POST"
                      onSubmit={() => formSubmit()}
                      style={{ width: "100%" }}
                    >
                      <FormControl mt={5} isRequired>
                        <FormLabel>Name</FormLabel>

                        <InputGroup>
                          <InputLeftElement children={<BsPerson />} />
                          <Input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl mt={5} isRequired>
                        <FormLabel>Email</FormLabel>

                        <InputGroup>
                          <InputLeftElement children={<MdOutlineEmail />} />
                          <Input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl mt={5}>
                        <FormLabel>Phone</FormLabel>

                        <InputGroup>
                          <InputLeftElement children={<MdPhoneIphone />} />
                          <Input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone Number"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl mt={5} isRequired>
                        <FormLabel>Message</FormLabel>

                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          rows={6}
                          resize="none"
                        />
                      </FormControl>

                      <FormControl mt={5}>
                        <FormLabel>Phone</FormLabel>

                        <InputGroup>
                          <InputLeftElement children={<MdPhoneIphone />} />
                          <Input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone Number"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl mt={5}>
                        <FormLabel>Attach Resume (PDF Format)</FormLabel>

                        <Input
                          paddingLeft={0}
                          border={"none"}
                          type="file"
                          name="resume"
                          accept="application/pdf"
                        />
                      </FormControl>

                      <Button
                        mt={5}
                        colorScheme="green"
                        bg="green.400"
                        color="white"
                        _hover={{
                          bg: "green.500",
                        }}
                        isFullWidth
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </form>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default CareersSection;
