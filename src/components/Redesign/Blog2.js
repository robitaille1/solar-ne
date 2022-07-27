import React from "react";
// import styled from "styled-components";
// import Lazyload from "react-lazyload";
// import { Link } from "react-router-dom";
import { Box, Center, Heading, Text, Stack } from "@chakra-ui/react";
import { useReadingTime } from "react-reading-time-estimator";
import { Link } from "react-router-dom";

const Blog2 = (props) => {
  const { minutes } = useReadingTime(props.blog.content);
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        height={"100%"}
      >
        <Link to={`/blogs/${props.blog.slug}`}>
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
            backgroundImage={props.blog.image.url}
            backgroundSize={"cover"}
            backgroundPosition={"center"}
          ></Box>
          <Stack>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              Blog
            </Text>
            <Heading color={"gray.700"} fontSize={"2xl"} fontFamily={"body"}>
              {props.blog.title}
            </Heading>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text color={"gray.500"}>
                {new Date(props.blog.published_at).toLocaleDateString(
                  {},
                  {
                    timeZone: "UTC",
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  }
                )}{" "}
                · {minutes} min read
              </Text>
            </Stack>
          </Stack>
        </Link>
      </Box>
    </Center>
  );
};

export default Blog2;
