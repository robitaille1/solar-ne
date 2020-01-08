import React from 'react'
import './BlogItem.css'

function BlogItem(props) {
    return (
      <main className='BlogItem'>
        <div>
            <h3>
                {props.title}
            </h3>
            
        </div>
      </main>
    );
  }
  
export default BlogItem;