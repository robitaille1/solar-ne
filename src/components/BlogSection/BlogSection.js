import React, { Component } from 'react'
import SolarContext from '../../context/SolarContext'
import './BlogSection.css'
import BlogItem from '../BlogItem/BlogItem'

class BlogSection extends Component{
  static contextType = SolarContext
  render(){
    const { blogs=[] } = this.context
    return (
      <main className='BlogSection'>
            <div className='container'>
                <h2 className='main-header'>Recent Blog Posts</h2>
                <section className='blog-display' role='main'>
                   {blogs.map(blog =>
                    <BlogItem key={blog.id} blog={blog} />
                    )}
                </section>
            </div>
      </main>
    );
  }
}
  
export default BlogSection;