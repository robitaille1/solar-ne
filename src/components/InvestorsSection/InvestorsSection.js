import React from 'react';
import Banner from '../Redesign/Banner';
import { Container, Box, VStack, Text } from '@chakra-ui/react';
import ContactCTA from '../Redesign/ContactCTA';

const investorsSection = () => (
  <Box>
    <Banner
      title="Investors"
      image="url(https://res.cloudinary.com/robitaille/image/upload/v1642701443/summer_vc4x1a_xojb5o.jpg)"
    />
    <Container maxW={'5xl'} py={12} color={'gray.500'}>
      <VStack alignItems="start" gap={4}>
        <Text>
          Would you like to contribute to the future of Maine and New
          England's energy sustainability? Are you interested in
          helping someone become 100% solar-powered?
        </Text>
        <Text>
          Solar Power New England provides $0-Down solar design,
          procurement and installation services to Non-Profits, and
          are interested in partnering with new investors to help
          non-profits go solar, while educating our communities about
          the importance of clean energy.
        </Text>
        <Text>
          We call this our own ‘Equitable Energy Initiative’
          specifically designed to help those who need it, and ensure
          that all Mainers have a chance to benefit from, and be a
          part of the clean energy revolution.
        </Text>
        <Text>
          If you, your business, or partner/group would be interested
          in contributing to a project that helps a non-profit,
          neighbor, or family in need{' '}
          <a href="mailto:contact@solarpowerne.com">contact us</a>{' '}
          today.
        </Text>
      </VStack>
    </Container>
    <ContactCTA
      title="Join the Equitable Energy Initiative"
      description="We provide $0-Down solar design, procurement and installation services to Non-Profits while educating our communities about the importance of clean energy."
      image="https://res.cloudinary.com/robitaille/image/upload/v1644602497/photo-1628010055450-21f2a0863767_vetogh.avif"
    />
  </Box>
);

export default investorsSection;
