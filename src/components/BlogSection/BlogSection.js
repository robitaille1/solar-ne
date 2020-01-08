import React, { Component } from 'react'
import './BlogSection.css'
import BlogItem from '../BlogItem/BlogItem'

class BlogSection extends Component{
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          id: 1,
          title: 'Plug-In Electric Vehicle Rebates'
        },
        {
          id: 2,
          title: 'Other Ways You Can Be Sustainable'
        },
        {
          id: 3,
          title: 'Solar Power New England Makes Solar More Affordable'
        }
      ]
    };
  }
  render(){
    return (
      <main className='BlogSection'>
            <div className='container'>
                <h2 className='main-header'>Recent Blog Posts</h2>
                <section className='section-display' role='main'>
                   {this.state.blogs.map(blog =>
                    <BlogItem key={blog.id} title={blog.title} />
                    )}
                </section>
            </div>
      </main>
    );
  }
}
  
export default BlogSection;