import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  SimpleGrid,
  Container,
  Link,
  Button,
} from '@chakra-ui/react';
import Blog from './Blog2';
import { Link as ReachLink } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { blogs } from '../../constants/blogs';

export default function Blogs() {
  const sortedBlogs =
    blogs &&
    blogs.sort(
      (a, b) => new Date(b.published_at) - new Date(a.published_at)
    );
  return (
    <Box bg={useColorModeValue('green.400', 'green.600')}>
      <Container
        maxW={'6xl'}
        py={16}
        as={Stack}
        spacing={12}
        alignItems={'center'}
      >
        <Stack spacing={0} align={'center'}>
          <Heading color={'white'}>Blogs</Heading>
          <Text color={'white'}>
            Hear what's going on in the world of solar!
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {blogs &&
            sortedBlogs
              .slice(0, 3)
              .map((blog) => <Blog key={blog.id} blog={blog} />)}
        </SimpleGrid>
        <Link
          as={ReachLink}
          to="/blogs"
          textAlign={'center'}
          width={'max-content'}
          margin={'0 auto'}
          style={{ textDecoration: 'none' }}
        >
          <Button
            bg={'white'}
            rounded={'full'}
            _hover={{ bg: 'whiteAlpha.800' }}
            color={'gray.700'}
          >
            All Blogs <FiChevronRight style={{ marginTop: '2px' }} />
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
