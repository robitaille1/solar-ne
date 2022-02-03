import React from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
  Heading,
} from "@chakra-ui/react";
import {
  FcInTransit,
  FcElectronics,
  FcElectricalSensor,
  FcSupport,
} from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.500"}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Container maxW={"6xl"} py={12}>
      <Box p={(4, 0)}>
        <Heading mb={5}>What We Do</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FcElectronics} w={10} h={10} />}
            title={"Home, Business, and Municipal Solar (+Storage)"}
            text={
              "Roof or Ground Mounted Solar Photovoltaics, Solar-Plus-Storage Solutions, Installation & System Maintentance"
            }
          />
          <Feature
            icon={<Icon as={FcElectricalSensor} w={10} h={10} />}
            title={"Energy Management & Analysis"}
            text={
              "Smart Home Devices, Energy Consumption Meters & LED Lighting"
            }
          />
          <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={"Electric Vehicle Supply Equipment (EVSE)"}
            text={"Residential and Commercial EV Charging devices "}
          />
          <Feature
            icon={<Icon as={FcSupport} w={10} h={10} />}
            title={"Request For Proposal Consultation"}
            text={""}
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
}
