import React from 'react'
import './WhatWeDoItem.css'

function WhatWeDoItem(props) {
    return (
      <main className='WhatWeDoItem'>
      <h2>{props.title}</h2>
        <div>
            <p>{props.description}</p>
    {props.description2 === '' ? null : <p>{props.description2}</p>}
        </div>
      </main>
    );
  }
  
export default WhatWeDoItem;