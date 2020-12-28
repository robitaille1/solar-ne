import React, { useContext } from "react";
import { SolarContext } from "../../context/SolarContext";
import styled from "styled-components";
import BlogItem from "./BlogItem/BlogItem";

const BlogSection = () => {
  const { blogs } = useContext(SolarContext);

  let showBlogs = <div>Loading</div>;

  if (blogs) {
    let display = [];
    for (let key in blogs) {
      display.unshift(blogs[key]);
    }

    showBlogs = (
      <section>
        {display.slice(0, 3).map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </section>
    );
  }

  return (
    <Wrapper>
      <Content>
        <h2>Recent Blog Posts</h2>
        {showBlogs}
      </Content>
    </Wrapper>
  );
};

export default BlogSection;

const Wrapper = styled.section`
  padding: 50px 0px;
  color: white;
  background-color: #132f0c;
  section {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    @media (min-width: 550px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  h2 {
    margin: 0;
    text-align: center;
    font-size: 30px;
  }
`;

const Content = styled.div`
  padding: 0 5%;
  max-width: 1400px;
  @media (min-width: 700px) {
    padding: 0 10%;
  }
  @media (min-width: 1400px) {
    margin: 0 auto;
  }
`;
