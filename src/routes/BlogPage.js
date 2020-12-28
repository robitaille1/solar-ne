import React, { useState, useEffect } from "react";
import BlogPost from "../components/BlogPost/BlogPost";
import PageLayout from "../containers/PageLayout/PageLayout";

import { useParams } from "react-router-dom";

const BlogPage = () => {
  const [blog, setBlog] = useState();

  let params = useParams();
  const blogId = params.blogId;

  useEffect(() => {
    fetch(`https://solarpowerne.herokuapp.com/blogs/${blogId}`)
      .then((response) => response.json())
      .then((resData) => {
        setBlog(resData);
      });
  }, [blogId]);

  let showBlog = <div>Loading</div>;

  if (blog) {
    showBlog = <BlogPost blog={blog} />;
  }

  return (
    <main>
      <PageLayout>
        <div>{showBlog}</div>
      </PageLayout>
    </main>
  );
};

export default BlogPage;
