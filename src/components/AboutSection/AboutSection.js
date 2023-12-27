import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import Banner from '../Redesign/Banner';
import SplitWithImage from '../Redesign/AboutModule';

const content =
  "We're a small Maine company with a personal commitment to improving the lives of those in our community by providing the best equipment at the best possible price to save money, energy, and our environment.";

const content2 = '';

const AboutSection = () => (
  <Box>
    <Banner
      title="About Us"
      image="url(https://res.cloudinary.com/robitaille/image/upload/v1642701443/summer_vc4x1a_xojb5o.jpg)"
    />
    <Container padding={10} maxW={'5xl'}>
      <SplitWithImage content={content} content2={content2} />
    </Container>
  </Box>
);

export default AboutSection;
