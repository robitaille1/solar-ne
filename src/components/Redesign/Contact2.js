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
} from "@chakra-ui/react";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail, MdOutlineHome, MdPhoneIphone } from "react-icons/md";
import ReactGA from "react-ga";

export default function ContactFormWithSocialButtons(props) {
  const formSubmit = (e) => {
    ReactGA.event({
      category: "FORM",
      action: "Contact form submitted",
      label: "HOME_PAGE",
    });
  };
  return (
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
              {props.title}
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

                    <FormControl mt={5}>
                      <FormLabel>Address</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlineHome />} />
                        <Input
                          type="text"
                          name="address"
                          placeholder="Your Address"
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
  );
}
