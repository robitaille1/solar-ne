import React from "react";
import Nav from "../Redesign/Nav2";
import Blogs from "../Redesign/Blogs2";
import Footer from "../Redesign/Footer2";
import { Box } from "@chakra-ui/react";

const PageLayout = (props) => (
  <Box>
    <Nav />
    <Box>
      <Box>{props.children}</Box>
    </Box>
    <Blogs />
    <Footer />
  </Box>
);

export default PageLayout;
