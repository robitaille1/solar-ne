import React from 'react'
import Media from 'react-media'
import './MainHeader.css'

class MainHeader extends React.Component {
  render(){
    return (
      <main className='MainHeader' id='mainheader'>
        <Media queries={{ mobile: { maxWidth: 1000 } }}>
          {matches =>
            matches.mobile ? (
              <div className='container'>
                <section className='main-header' role='main'>
                  <div className='main-info'>
                    <p className='main-text'>
                      <span className='company'>Solar Power New England</span> aims to help homeowners increase their ability to produce their own power, and improve their ability to manage their energy consumption.
                    </p>
                    <p className='main-text'>
                      Our focus is to help the people of Maine and their neighbors, in the transition to a renewable and sustainable energy future.
                    </p>
                  </div>
                </section>
            </div>
            ) : (
              <div className='container'>
                <section className='main-header' role='main'>
                  <div className='main-info'>
                    <p className='main-text'>
                      Our mission at <span className='company'>Solar Power New England</span>, is to help homeowners increase their ability to produce their own power, and improve their ability to manage their energy consumption.
                    </p>
                    <p className='main-text'>
                      Our focus, to help the people of Maine and their neighbors, in the transition to a renewable and sustainable energy future.
                    </p>
                    <p className='main-text'> 
                      Invest in your home, community, local business and congratulations on taking your first step toward energy independence! 
                    </p>
                  </div>
                </section>
            </div>
            )
          }
        </Media>   
      </main>
    );
  }
}
  
export default MainHeader;