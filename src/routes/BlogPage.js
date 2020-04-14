import React from "react";
import { getBlog } from "../blogs-helpers";
import SolarContext from "../context/SolarContext";
import Nav from "../components/Nav/Nav";
import BlogPost from "../components/BlogPost/BlogPost";
import Footer from "../components/Footer/Footer";

export default class BlogPage extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = SolarContext;

  render() {
    const { blogs = [] } = this.context;
    const blogId = this.props.match.params.blogId;
    const blogInfo = getBlog(blogs, blogId);
    return (
      <main>
        <Nav />
        <div>
          <BlogPost blog={blogInfo[0]} />
        </div>
        <Footer />
      </main>
    );
  }
}
