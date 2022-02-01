import React from "react";
import PartnersCard from "../Redesign/PartnersCard2";
import Banner from "../Redesign/Banner";
import { Box, Heading, Stack, Grid, Skeleton, Flex } from "@chakra-ui/react";

const partnersSection = (props) => {
  let partners = [];
  for (let key in props.partners) {
    partners.unshift(props.partners[key]);
  }
  return (
    <Box>
      <Banner
        title="Partners"
        image="url(https://res.cloudinary.com/robitaille/image/upload/v1642701443/summer_vc4x1a_xojb5o.jpg)"
      />
      <Stack padding={10} align={"center"}>
        <Heading>Our partners include...</Heading>
      </Stack>
      {partners.length ? (
        <Grid
          alignItems={"start"}
          templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr" }}
          spacing={8}
        >
          {partners.map((p) => (
            <PartnersCard key={p.id} partner={p} />
          ))}
        </Grid>
      ) : (
        <Grid
          alignItems={"start"}
          templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr" }}
          spacing={8}
        >
          <Flex p={30} w="full" alignItems="center" justifyContent="center">
            <Skeleton rounded="lg" width={"100%"} height={400} />
          </Flex>
          <Flex p={30} w="full" alignItems="center" justifyContent="center">
            <Skeleton rounded="lg" width={"100%"} height={400} />
          </Flex>
          <Flex p={30} w="full" alignItems="center" justifyContent="center">
            <Skeleton rounded="lg" width={"100%"} height={400} />
          </Flex>
        </Grid>
      )}
    </Box>
  );
};

export default partnersSection;
