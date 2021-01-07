import React, { useContext } from "react";
import { SolarContext } from "../context/SolarContext";
import { Link } from "react-router-dom";
import PageLayout from "../containers/PageLayout/PageLayout";
import BlogItem from "../components/BlogSection/BlogItem/BlogItem";
import styled from "styled-components";

const BlogsPage = () => {
  const { blogs } = useContext(SolarContext);

  let showBlogs = <div>Loading</div>;

  if (blogs) {
    let display = [];
    for (let key in blogs) {
      display.unshift(blogs[key]);
    }

    showBlogs = (
      <BlogsContainer>
        {display.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </BlogsContainer>
    );
  }
  return (
    <main>
      <PageLayout>
        <h2>Blogs</h2>
        {showBlogs}
        <Link to="/">Home</Link>
      </PageLayout>
    </main>
  );
};

export default BlogsPage;

const BlogsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-bottom: 30px;

  div {
    box-shadow: unset;
    background-color: white;
  }

  h3 {
    padding: unset;
    font-size: 0.9rem;
  }

  a {
    background: linear-gradient(89.57deg, #3b8f28, #265e19);
    padding: 12px 20px;
    color: #fff;
    border: none;
    border-radius: 50px;
    font-size: 14px;
    text-decoration: none;
  }
`;
