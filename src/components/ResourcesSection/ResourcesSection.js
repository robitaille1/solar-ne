import React from 'react';

import Banner from '../Redesign/Banner';
import {
  Container,
  Box,
  Heading,
  Link,
  VStack,
  Text,
} from '@chakra-ui/react';

const resourcesSection = () => {
  return (
    <Box>
      <Banner
        title="Incentives and Resources"
        image="url(https://res.cloudinary.com/robitaille/image/upload/v1642701443/summer_vc4x1a_xojb5o.jpg)"
      />
      <Container maxW={'5xl'} pb={12}>
        <VStack alignItems="start" py={10}>
          <Heading>US Policies and Incentives by state</Heading>
          <Link href="https://www.dsireusa.org">
            www.dsireusa.org
          </Link>

          <Heading mt={4}>Residential Resources</Heading>
          <Link href="https://www.cesa.org/wp-content/uploads/Homeowners-Guide-to-Solar-Financing.pdf">
            Homeowners Guide to Solar Financing
          </Link>
          <Link href="https://irecusa.org/consumer/checklist.pdf">
            Interstate Renewable Energy Council - Consumer Solar
            Checklist
          </Link>

          <Heading mt={4}>Solar Industry Market Research</Heading>
          <Link href="https://www.woodmac.com">www.woodmac.com</Link>

          <Heading mt={4}>
            Weather Data, Production Modelling / Estimation
          </Heading>
          <Link href="https://www.nrel.gov/">www.nrel.gov/</Link>
          <Text>spec.</Text>
          <Link display="inline" href="https://pvwatts.nrel.gov/)">
            pvwatts.nrel.gov
          </Link>
        </VStack>
      </Container>
    </Box>
  );
};

export default resourcesSection;
