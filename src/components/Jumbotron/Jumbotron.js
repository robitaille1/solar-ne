import React from 'react'
import './Jumbotron.css'

function Jumbotron() {
    return (
      <main className='Jumbotron'>
        <div className='jumbo-container'>
            <h2 className='jumbo-text'>
              The future <span className='text-2'> is now..</span>
            </h2>
            {/* Photo by Scott Webb - @ScottWebb */}
        </div>
      </main>
    );
  }
  
export default Jumbotron;