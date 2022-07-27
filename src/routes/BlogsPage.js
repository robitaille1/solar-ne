import React, { useContext, useEffect } from "react";
import { SolarContext } from "../context/SolarContext";
import Nav from "../components/Redesign/Nav2";
import Footer from "../components/Redesign/Footer2";
import Reviews from "../components/Redesign/Reviews";
import { Box } from "@chakra-ui/react";
import BlogList from "../components/Redesign/BlogList";
import Banner from "../components/Redesign/Banner";

const BlogsPage = () => {
  const { blogs, blogsPage, fetchBlogsPage } = useContext(SolarContext);

  useEffect(() => {
    fetchBlogsPage();
  }, [fetchBlogsPage]);

  return (
    <Box>
      <Nav />
      <Banner
        title="Blogs by SPNE"
        image="url(https://res.cloudinary.com/robitaille/image/upload/v1642701443/summer_vc4x1a_xojb5o.jpg)"
      />
      <Box>
        <Box>
          <BlogList content={blogsPage} blogs={blogs} />
        </Box>
      </Box>
      <Reviews />
      <Footer />
    </Box>
  );
};

export default BlogsPage;
