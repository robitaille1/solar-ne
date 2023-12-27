import React from 'react';
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Image,
  Link as ChakraLink,
  Flex,
} from '@chakra-ui/react';
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaYelp,
  FaSun,
} from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { Link as ReachLink } from 'react-router-dom';
import ReactGA from 'react-ga';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text as={'h4'} fontWeight={'500'} fontSize={'lg'} mb={1}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  const date = new Date();
  const ClickHandler = (item) => {
    ReactGA.event({
      category: 'FOOTER_LINK',
      action: `${item} Clicked`,
      label: 'FOOTER',
    });
  };
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Box bg={'green.600'}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          maxW={'6xl'}
          margin={'0 auto'}
          justify={'center'}
          padding={'15px 0'}
          align={'center'}
        >
          <Image
            alt="Solar Power New England is HomeAdvisor Screened & Approved"
            src="https://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=97092349&key=9b76e46ada6034f78ad60c35d2b86fe7"
            height={'100px'}
          />
          <Box
            ml={{ base: 0, md: 10 }}
            mt={{ base: 5, md: 0 }}
            maxW={{ base: '80%', md: '50%' }}
          >
            <a
              href="https://www.lightstream.com/?fact=14070&cid=AA|DSK|P|solar|E|AFF|fact=14070&irad=68132&irmp=2437142"
              id="68132"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="//a.impactradius-go.com/display-ad/1695-68132"
                border="0"
                alt="lightstream"
                style={{ maxWidth: '100%' }}
                height="auto"
              />
            </a>
            <img
              alt="lightstream"
              height="0"
              width="0"
              src="https://lightstream.gr4q.net/i/2437142/68132/1695"
              style={{ position: 'absolute', visibility: 'hidden' }}
              border="0"
            />
          </Box>
        </Flex>
      </Box>

      <Container as={Stack} py={10} maxW={'6xl'}>
        <SimpleGrid
          templateColumns={{ sm: '1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image height={'80px'} src={logo} />
            </Box>
            <Text fontSize={'sm'}>
              © {date.getFullYear()} Solar Power New England. All
              rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton
                label={'Facebook'}
                href={'https://www.facebook.com/spnemaine/'}
              >
                <FaFacebook />
              </SocialButton>
              <SocialButton
                label={'Pinterest'}
                href={'https://www.pinterest.com/solarpowerne/'}
              >
                <FaPinterest />
              </SocialButton>
              <SocialButton
                label={'Instagram'}
                href={'https://www.instagram.com/solarpowerne/'}
              >
                <FaInstagram />
              </SocialButton>
              <SocialButton
                label={'Yelp'}
                href={
                  'https://www.yelp.com/biz/solar-power-new-england-gorham-2'
                }
              >
                <FaYelp />
              </SocialButton>
              <SocialButton
                label={'Solar Reviews'}
                href={
                  'https://www.solarreviews.com/installers/solar-power-new-england-reviews'
                }
              >
                <FaSun />
              </SocialButton>
            </Stack>

            <Text>
              Made with{' '}
              <span role="img" aria-label="lobster">
                &#x1F99E;
              </span>{' '}
              from Maine
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>About Us</ListHeader>
            <ChakraLink as={ReachLink} to={'/about'}>
              Our Story
            </ChakraLink>
            <ChakraLink as={ReachLink} to={'/our-work'}>
              Our Work
            </ChakraLink>
            <ChakraLink as={ReachLink} to={'/testimonials'}>
              Testimonials
            </ChakraLink>
            <ChakraLink as={ReachLink} to={'/partners'}>
              Partners
            </ChakraLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Get Involved</ListHeader>
            <ChakraLink as={ReachLink} to={'/investors'}>
              Investors
            </ChakraLink>
            <ChakraLink as={ReachLink} to={'/careers'}>
              Careers
            </ChakraLink>

            <Stack mt={'1.5rem !important'}>
              <ListHeader>Resources</ListHeader>
              <ChakraLink as={ReachLink} to={'/resources'}>
                Useful Links
              </ChakraLink>
              <ChakraLink as={ReachLink} to={'/blogs'}>
                Blogs
              </ChakraLink>
              <ChakraLink as={ReachLink} to={'/contact'}>
                Contact
              </ChakraLink>
            </Stack>
          </Stack>
          <Stack
            align={'flex-start'}
            justifyContent={'space-between'}
          >
            <Box display={'flex'} flexDirection={'column'}>
              <Text fontWeight={400} fontSize={'md'}>
                Solar Power New England provides residential, and
                small commercial solar photovoltaic design,
                procurement and installation services for Southern
                Maine. Contact us today for more information!
              </Text>
              <ChakraLink
                textDecoration={'underline'}
                style={{ marginRight: '10px' }}
                href="tel:207-387-0037"
                onClick={() => ClickHandler('Phone Number')}
                mt={3}
              >
                207-387-0037
              </ChakraLink>
              <ChakraLink
                onClick={() => ClickHandler('Email Address')}
                textDecoration={'underline'}
                href="mailto:contact@solarpowerne.com"
                mt={3}
              >
                contact@solarpowerne.com
              </ChakraLink>
            </Box>
            <ChakraLink
              target="_blank"
              rel="noopener noreferrer"
              href={'https://robitaille.xyz/'}
              fontSize={13}
            >
              Website by LR
            </ChakraLink>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
