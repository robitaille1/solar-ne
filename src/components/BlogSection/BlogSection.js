import React, { Component } from "react";
import SolarContext from "../../context/SolarContext";
import styled from "styled-components";
import BlogItem from "./BlogItem/BlogItem";

class BlogSection extends Component {
  static contextType = SolarContext;
  render() {
    const { blogs = [] } = this.context;
    return (
      <Wrapper>
        <Content>
          <h2>Recent Blog Posts</h2>
          <section>
            {blogs.map(blog => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </section>
        </Content>
      </Wrapper>
    );
  }
}

export default BlogSection;

const Wrapper = styled.section`
  padding: 50px 0px;
  color: white;
  background-color: rgb(62, 128, 145);
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
    font-size: 35px;
    @media (min-width: 600px) {
      font-size: 50px;
    }
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
