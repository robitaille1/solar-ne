import React, { useState, useEffect } from "react";
import BlogPost from "../components/Redesign/BlogPost2";
import PageLayout from "../components/Redesign/PageLayout2";
import { useParams } from "react-router-dom";
import {
  Container,
  Box,
  HStack,
  SimpleGrid,
  Stack,
  Divider,
  Skeleton,
} from "@chakra-ui/react";

const BlogPage = () => {
  const [blog, setBlog] = useState();

  let params = useParams();
  const blogSlug = params.blogSlug;

  useEffect(() => {
    fetch(`https://solarpowerne.herokuapp.com/blogs`)
      .then((response) => response.json())
      .then((resData) => {
        setBlog(resData.filter((b) => b.slug === blogSlug));
      });
  }, [blogSlug]);

  let showBlog = (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} rounded={"md"}>
        <Skeleton height={320} width={"100%"} />

        <Stack justify={"center"} pr={10}>
          <HStack spacing={2}>
            <Skeleton width={"100%"} height={"24px"} />
          </HStack>

          <Stack>
            <Skeleton width={"100%"} height={"100px"} />
            <Skeleton width={"100%"} height={"24px"} />
          </Stack>
        </Stack>
      </SimpleGrid>

      <Divider my={10} />

      <Box pb={10}>
        <Skeleton width={"100%"} height={"100px"} />
        <Skeleton width={"100%"} height={"100px"} />
        <Skeleton width={"100%"} height={"100px"} />
      </Box>
    </Container>
  );

  if (blog) {
    showBlog = <BlogPost blog={blog[0]} />;
  }

  return (
    <PageLayout>
      <div>{showBlog}</div>
    </PageLayout>
  );
};

export default BlogPage;
