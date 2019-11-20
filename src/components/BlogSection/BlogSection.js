import React from 'react'
import './BlogSection.css'
import BlogItem from '../BlogItem/BlogItem'

function BlogSection() {
    return (
      <main className='BlogSection'>
            <div className='container'>
                <h2 className='main-header'>Recent Blog Posts</h2>
                <section className='section-display' role='main'>
                   <BlogItem />
                   <BlogItem />
                   <BlogItem />
                </section>
            </div>
      </main>
    );
  }
  
export default BlogSection;