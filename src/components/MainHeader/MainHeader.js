import React from 'react'
import './MainHeader.css'

function MainHeader() {
    return (
      <main className='MainHeader'>
            <div className='container'>
                <section className='main-header' role='main'>
                  <div className='main-info'>
                    {/* <h2 className='main-header'>Who We Are</h2> */}
                    <p className='main-text'>
                      Our mission at <span className='company'>Solar Power New England</span>, is to help homeowners increase their ability to produce their own power, and improve their ability to manage their energy consumption. Our focus, to help the people of Maine and their neighbors, in the transition to a renewable and sustainable energy future. Invest in your home, community, local business and congratulations on taking your first step toward energy independence! 
                    </p>
                  </div>
                </section>
            </div>
      </main>
    );
  }
  
export default MainHeader;