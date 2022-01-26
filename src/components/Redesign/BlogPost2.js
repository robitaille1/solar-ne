import React from "react";
import {
  Text,
  Container,
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import Markdown from "./Markdown";

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>
        {new Date(props.date).toLocaleDateString(
          {},
          {
            timeZone: "UTC",
            month: "long",
            day: "2-digit",
            year: "numeric",
          }
        )}
      </Text>
    </HStack>
  );
};

const BlogPost = ({ blog }) => {
  return (
    <Container maxW={"5xl"} py={12}>
      <HStack>
        <Image width={"40%"} src={blog.image.url} />
        <Box pl={10} width={"60%"}>
          <Heading>{blog.title}</Heading>
          <BlogAuthor name="Andy" date={blog && blog.published_at} />
        </Box>
      </HStack>

      <Box py={10}>
        <Markdown content={blog.content} />
      </Box>

      <Flex justify={"center"}>
        <Link as={ReachLink} to="/">
          <Button
            bg={"green.400"}
            rounded={"full"}
            color={"white"}
            _hover={{ bg: "green.500" }}
          >
            Home
          </Button>
        </Link>
        <Link as={ReachLink} to="/blogs">
          <Button
            bg={"white"}
            rounded={"full"}
            _hover={{ bg: "whiteAlpha.800" }}
            color={"gray.700"}
          >
            All Blogs <FiChevronRight style={{ marginTop: "2px" }} />
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default BlogPost;
