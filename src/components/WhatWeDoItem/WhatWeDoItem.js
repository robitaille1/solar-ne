import React from 'react'
import './WhatWeDoItem.css'

function WhatWeDoItem(props) {
    return (
      <main className='WhatWeDoItem'>
        <div className='item'>
          <img className='itemImg' src={props.item.img} alt={props.item.credit} />
          <div className='itemDesc'>
            <h2 className='itemTitle'>{props.item.title}</h2>
            {props.item.description === '' ? null : <p>{props.item.description}</p>}
          </div>
        </div>
        {/* {props.item.id % 2 === 0 ? <div className='item'>
          <img className='itemImg' src={props.item.img} alt={props.item.credit} />
          <div className='itemDesc'>
            <h2 className='itemTitle'>{props.item.title}</h2>
            {props.item.description === '' ? null : <p>{props.item.description}</p>}
          </div>
        </div> :
        <div className='item'>
          <div className='itemDesc'>
           <h2 className='itemTitle'>{props.item.title}</h2>
            {props.item.description === '' ? null : <p>{props.item.description}</p>}
          </div>
          <img className='itemImg' src={props.item.img} alt={props.item.credit} />
        </div>
        } */}
      </main>
    );
  }
  
export default WhatWeDoItem;