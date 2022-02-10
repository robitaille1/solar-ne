import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  chakra,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import NavFlag from "../../assets/logo-notext.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as ReachLink, useLocation } from "react-router-dom";
import ReactGA from "react-ga";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();

  const ClickHandler = (item) => {
    ReactGA.event({
      category: "NAV-LINK",
      action: `${item} Clicked`,
      label: "NAV",
    });
  };

  return (
    <Box maxW={"6xl"} margin={"0 auto"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          align={"center"}
          flex={{ base: 4 }}
          justify={{ base: "center", md: "start" }}
        >
          <Link
            as={ReachLink}
            to="/"
            _hover={{ textDecoration: "none", opacity: ".6" }}
            display={"flex"}
            alignItems={"center"}
          >
            <Image
              height={"40px"}
              marginRight={"10px"}
              src={NavFlag}
              alt="SPNE Flag Logo"
              display={{ base: "none", md: "block" }}
            />
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"Orbitron, sans-serif"}
              color={useColorModeValue("green.600", "white")}
              fontWeight={400}
              fontSize={{ base: 20, md: 14, lg: 20 }}
              as={"h1"}
            >
              Solar Power{" "}
              <chakra.span display={{ base: "block", md: "inline" }}>
                New England
              </chakra.span>
            </Text>
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={5}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {location.pathname === "/" ? (
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"green.400"}
                href={"#"}
                _hover={{
                  bg: "green.300",
                }}
                onClick={() => ClickHandler("Contact Button")}
              >
                Contact Us
              </Button>
            </ScrollLink>
          ) : (
            <Link as={ReachLink} to="/contact">
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"green.400"}
                href={"#"}
                _hover={{
                  bg: "green.300",
                }}
                onClick={() => ClickHandler("Contact Button")}
              >
                Contact Us
              </Button>
            </Link>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const ClickHandler = (item) => {
    ReactGA.event({
      category: "NAV-LINK",
      action: `${item} Clicked`,
      label: "NAV",
    });
  };

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                to={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                onClick={() => ClickHandler(navItem.label)}
                as={ReachLink}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  const ClickHandler = (item) => {
    ReactGA.event({
      category: "NAV-LINK",
      action: `${item} Clicked (Mobile)`,
      label: "NAV",
    });
  };
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("green.50", "gray.900") }}
      onClick={() => ClickHandler(label)}
      as={ReachLink}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "green.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"green.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const ClickHandler = (item) => {
    ReactGA.event({
      category: "NAV-LINK",
      action: `${item} Clicked (Mobile)`,
      label: "NAV",
    });
  };

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                py={2}
                to={child.href}
                onClick={() => ClickHandler(child.label)}
                as={ReachLink}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "About Us",
    children: [
      {
        label: "Our Story",
        subLabel: "See who we are, and why we're passionate",
        href: "/about",
      },
      {
        label: "Explore Our Work",
        subLabel: "See our past work",
        href: "/our-work",
      },
      {
        label: "Testimonials",
        subLabel: "See what our clients have to say",
        href: "/testimonials",
      },
      {
        label: "Partners",
        subLabel: "See who we partner with",
        href: "/partners",
      },
    ],
  },
  {
    label: "Get Involved",
    children: [
      {
        label: "Investors",
        subLabel: "Contribute to sustainability",
        href: "/investors",
      },
      {
        label: "Careers",
        subLabel: "Join the team, and get involved!",
        href: "/careers",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Useful Links",
        subLabel: "Resources to help jumpstart your clean energy journey",
        href: "/resources",
      },
      {
        label: "Blogs",
        subLabel: "Keep up to date with everything solar",
        href: "/blogs",
      },
    ],
  },
];
