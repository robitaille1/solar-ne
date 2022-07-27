import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop} flexWrap="wrap">
      {props.tags &&
        props.tags.map((tag) => {
          return (
            <Tag
              size={'md'}
              variant="solid"
              color={'green.400'}
              backgroundColor={'green.50'}
              key={tag}
            >
              {tag}
            </Tag>
          );
        })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>
        {new Date(props.date).toLocaleDateString(
          {},
          {
            timeZone: 'UTC',
            month: 'long',
            day: '2-digit',
            year: 'numeric',
          }
        )}
      </Text>
    </HStack>
  );
};

const BlogList = ({ blogs, content }) => {
  const sortedBlogs =
    blogs &&
    blogs.sort(function (a, b) {
      return new Date(b.published_at) - new Date(a.published_at);
    });
  return (
    <Container maxW={'7xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                width={'100%'}
                borderRadius="lg"
                src={blogs && sortedBlogs[0].image.url}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(green.600 1px, transparent 1px)',
                'radial(green.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}
        >
          <Link
            as={ReachLink}
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            to={`/blogs/${blogs && sortedBlogs[0].slug}`}
          >
            <BlogTags
              tags={
                blogs && sortedBlogs[0].Tags && sortedBlogs[0].Tags.split(',')
              }
            />
            <Heading marginTop="1">{blogs && sortedBlogs[0].title}</Heading>
            <Text as="p" marginTop="2" color={'gray.500'} fontSize="lg">
              {blogs && sortedBlogs[0].Excerpt && sortedBlogs[0].Excerpt}
            </Text>
            <BlogAuthor
              name="Andy"
              date={blogs && sortedBlogs[0].published_at}
            />
          </Link>
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        {blogs &&
          sortedBlogs.slice(1).map((blog) => (
            <WrapItem
              width={{ base: '100%', sm: '100%', md: '45%', lg: '30%' }}
            >
              <Link
                as={ReachLink}
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                to={`/blogs/${blog.slug}`}
              >
                <Box w="100%">
                  <Box borderRadius="lg" overflow="hidden">
                    <Link
                      textDecoration="none"
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Image
                        transform="scale(1.0)"
                        src={blog.image && blog.image.url}
                        alt="some text"
                        objectFit="contain"
                        width="100%"
                        transition="0.3s ease-in-out"
                        _hover={{
                          transform: 'scale(1.05)',
                        }}
                      />
                    </Link>
                  </Box>
                  <BlogTags
                    tags={blog.Tags && blog.Tags.split(',')}
                    marginTop="3"
                  />
                  <Heading fontSize="xl" marginTop="2">
                    <Link
                      textDecoration="none"
                      _hover={{ textDecoration: 'none' }}
                    >
                      {blog.title}
                    </Link>
                  </Heading>
                  <Text as="p" fontSize="md" marginTop="2" color={'gray.500'}>
                    {blog.Excerpt && blog.Excerpt}
                  </Text>
                  <BlogAuthor name="Andy" date={blog.published_at} />
                </Box>
              </Link>
            </WrapItem>
          ))}
      </Wrap>
      {content.BlogsDescription && (
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">What we write about</Heading>
          <Text as="p" fontSize="lg">
            {content.BlogsDescription}
          </Text>
        </VStack>
      )}
    </Container>
  );
};

export default BlogList;
