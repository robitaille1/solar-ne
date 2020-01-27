import React from 'react'
import './BlogItem.css'

function BlogItem(props) {
    return (
      <main className='BlogItem'>
        <div className='blog-item'>
          <img className='blog-img' alt={props.blog.alt} src={props.blog.img} samesite='None' secure='true'/>
          <h3>
              {props.blog.title}
          </h3>
          <p className='blog-link'>Coming Soon</p>
        </div>
      </main>
    );
  }
  
export default BlogItem;