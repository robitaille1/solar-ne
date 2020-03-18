import React from 'react';
import Media from 'react-media';
import './WhatWeDoItem.css';

const whatWeDoItem = (props) => (
  <Media queries={{ mobile: { maxWidth: 1250 } }}>
          {matches =>
            matches.mobile ? (
              <main className='WhatWeDoItem'>
                <div className='item'>
                  <img className='itemImg' src={props.item.img} alt={props.item.credit} />
                  <div className='itemDesc'>
                    <h2 className='itemTitle'>{props.item.title}</h2>
                    {props.item.description === '' ? null : <p>{props.item.description}</p>}
                  </div>
                </div>
              </main>
            ) : (
              <main className='WhatWeDoItem'>
                {props.item.id % 2 === 0 ? 
                  <div className='item'>
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
                }
              </main>  
            )
          }
      </Media>
);

export default whatWeDoItem;