export const getBlog = (blogs=[], blogId) =>
  blogs.filter(blog => blog.id === blogId)