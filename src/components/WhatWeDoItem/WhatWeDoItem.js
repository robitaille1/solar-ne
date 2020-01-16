import React from 'react'
import './WhatWeDoItem.css'

function WhatWeDoItem(props) {
    return (
      <main className='WhatWeDoItem'>
      <h2>{props.title}</h2>
        <div>
          {props.description === '' ? null : <p>{props.description}</p>}
        </div>
      </main>
    );
  }
  
export default WhatWeDoItem;