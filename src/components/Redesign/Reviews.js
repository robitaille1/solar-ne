import React from 'react';
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
} from '@chakra-ui/react';

import { FiChevronRight } from 'react-icons/fi';
import { Link as ReachLink } from 'react-router-dom';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      textAlign={'center'}
      minHeight={'180px'}
      justifyContent={'center'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      {src && <Avatar src={src} alt={name} mb={2} />}
      <Stack spacing={-1} align={'center'}>
        <Text color={'white'} fontWeight={600}>
          {name}
        </Text>
        <Text fontSize={'sm'} color={'white'}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box
      bgImage={
        'https://res.cloudinary.com/robitaille/image/upload/v1642782143/upclose_euv2ag.jpg'
      }
      bgSize={'cover'}
      boxShadow={'inset 0 0 0 2000px rgba(0, 0, 0, 0.4)'}
    >
      <Container maxW={'6xl'} py={12} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading color={'white'}>Our Clients Speak</Heading>
          <Text color={'white'}>
            Hear what our clients have to say!
          </Text>
        </Stack>
        <SimpleGrid spacing={10} columns={{ base: 1, md: 3 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Intuitive Process
              </TestimonialHeading>
              <TestimonialText>
                SPNE is excellent at helping people less familiar with
                solar energy understand all the features and factors
                of the transition to solar power!
              </TestimonialText>
            </TestimonialContent>

            <TestimonialAvatar
              src={null}
              name={'Rachel'}
              title={'Gorham'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Efficient Collaborating
              </TestimonialHeading>
              <TestimonialText>
                The entire process was very efficient and
                professionally done. I wholeheartedly recommend Solar
                Power NE.
              </TestimonialText>
            </TestimonialContent>

            <TestimonialAvatar
              src={null}
              name={'Bob & Bunnie'}
              title={'Portland'}
            />
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Fantastic Service
              </TestimonialHeading>
              <TestimonialText>
                Knowledgeable and thorough presentation of the project
                with excellent follow-through.
              </TestimonialText>
            </TestimonialContent>

            <TestimonialAvatar
              src={null}
              name={'Michele & Tom'}
              title={'Yarmouth'}
            />
          </Testimonial>
        </SimpleGrid>

        <Flex justify={'center'}>
          <Link
            as={ReachLink}
            to="/testimonials"
            textAlign={'center'}
            width={'max-content'}
            style={{ textDecoration: 'none' }}
          >
            <Button
              bg={'green.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'green.500' }}
            >
              Testimonials{' '}
              <FiChevronRight style={{ marginTop: '2px' }} />
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
