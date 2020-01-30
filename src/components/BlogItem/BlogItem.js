import React from 'react'
import { Link } from 'react-router-dom'
import './BlogItem.css'

function BlogItem(props) {
    return (
      <main className='BlogItem'>
        <div className='blog-item'>
          <img className='blog-img' alt={props.blog.alt} src={props.blog.img} samesite='None' secure='true'/>
          <h3>
              {props.blog.title}
          </h3>
          <Link 
            className='blog-link'
            to={`/blogs/${props.blog.id}`}
          >
              Read More
          </Link>
        </div>
      </main>
    );
  }
  
export default BlogItem;