import React from 'react'
import './BlogItem.css'

function BlogItem(props) {
    return (
      <main className='BlogItem'>
        <div className='blog-item'>
            <h3>
                {props.title}
            </h3>
        </div>
      </main>
    );
  }
  
export default BlogItem;