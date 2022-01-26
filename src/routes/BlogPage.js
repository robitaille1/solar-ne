import React, { useState, useEffect } from "react";
import BlogPost from "../components/Redesign/BlogPost2";
import PageLayout from "../components/Redesign/PageLayout2";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const [blog, setBlog] = useState();

  let params = useParams();
  const blogSlug = params.blogSlug;

  useEffect(() => {
    fetch(`https://solarpowerne.herokuapp.com/blogs`)
      .then((response) => response.json())
      .then((resData) => {
        setBlog(resData.filter((b) => b.slug === blogSlug));
      });
  }, [blogSlug]);

  let showBlog = <div>Loading</div>;

  if (blog) {
    showBlog = <BlogPost blog={blog[0]} />;
  }

  return (
    <PageLayout>
      <div>{showBlog}</div>
    </PageLayout>
  );
};

export default BlogPage;
