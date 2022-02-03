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
  SimpleGrid,
  Stack,
  Divider,
  Tag,
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
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} rounded={"md"}>
        <Flex>
          {blog && (
            <Image
              rounded={"md"}
              alt={"feature image"}
              width={"100%"}
              src={blog.image.url}
              objectFit={"cover"}
            />
          )}
        </Flex>

        <Stack justify={"center"} pr={10}>
          <HStack spacing={2}>
            {blog.Tags &&
              blog.Tags.split(",").map((tag) => {
                return (
                  <Tag
                    size={"md"}
                    variant="solid"
                    color={"green.400"}
                    backgroundColor={"green.50"}
                    key={tag}
                  >
                    {tag}
                  </Tag>
                );
              })}
          </HStack>
          {blog && (
            <>
              <Heading>{blog.title}</Heading>
              <BlogAuthor name="Andy" date={blog && blog.published_at} />
            </>
          )}
        </Stack>
      </SimpleGrid>

      <Divider my={10} />

      <Box pb={10}>
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
            variant={"ghost"}
            colorScheme={"green"}
            ml={2}
          >
            All Blogs <FiChevronRight style={{ marginTop: "2px" }} />
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default BlogPost;
