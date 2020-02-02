import React, { Component } from 'react'
import Media from 'react-media'
import './WhatWeDoItem.css'

export default class WhatWeDoItem extends Component {
  render(){
    return (
      <Media queries={{ mobile: { maxWidth: 1250 } }}>
          {matches =>
            matches.mobile ? (
              <main className='WhatWeDoItem'>
                <div className='item'>
                  <img className='itemImg' src={this.props.item.img} alt={this.props.item.credit} />
                  <div className='itemDesc'>
                    <h2 className='itemTitle'>{this.props.item.title}</h2>
                    {this.props.item.description === '' ? null : <p>{this.props.item.description}</p>}
                  </div>
                </div>
              </main>
            ) : (
              <main className='WhatWeDoItem'>
                {this.props.item.id % 2 === 0 ? 
                  <div className='item'>
                    <img className='itemImg' src={this.props.item.img} alt={this.props.item.credit} />
                    <div className='itemDesc'>
                      <h2 className='itemTitle'>{this.props.item.title}</h2>
                      {this.props.item.description === '' ? null : <p>{this.props.item.description}</p>}
                    </div>
                  </div> :
                  <div className='item'>
                    <div className='itemDesc'>
                      <h2 className='itemTitle'>{this.props.item.title}</h2>
                      {this.props.item.description === '' ? null : <p>{this.props.item.description}</p>}
                    </div>
                    <img className='itemImg' src={this.props.item.img} alt={this.props.item.credit} />
                </div>
                }
              </main>  
            )
          }
      </Media>
    )
  }
}
  