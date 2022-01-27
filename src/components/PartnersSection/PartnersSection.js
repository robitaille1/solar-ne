import React from "react";
import PartnersCard from "../Redesign/PartnersCard2";
import Banner from "../Redesign/Banner";
import { Box, Heading, Stack, Grid } from "@chakra-ui/react";

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
      <Grid
        alignItems={"start"}
        templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr" }}
        spacing={8}
      >
        {partners.map((p) => (
          <PartnersCard key={p.id} partner={p} />
        ))}
      </Grid>
    </Box>
  );
};

export default partnersSection;
