import React from 'react'
import './WhatWeDoItem.css'

function WhatWeDoItem(props) {
    return (
      <main className='WhatWeDoItem'>
      <img className='itemImg' src={props.item.img} alt={props.item.credit} />
      <h2 className='itemTitle'>{props.item.title}</h2>
        <div className='itemDesc'>
          {props.item.description === '' ? null : <p>{props.item.description}</p>}
        </div>
      </main>
    );
  }
  
export default WhatWeDoItem;