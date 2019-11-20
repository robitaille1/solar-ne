import React from 'react'
import './WhatWeDo.css'
import WhatWeDoItem from '../WhatWeDoItem/WhatWeDoItem'

function WhatWeDo() {
    return (
      <main className='WhatWeDo'>
            <div className='container'>
                <h2 className='main-header'>What We Do</h2>
                <section className='section-display' role='main'>
                   <WhatWeDoItem />
                   <WhatWeDoItem />
                   <WhatWeDoItem />
                </section>
            </div>
      </main>
    );
  }
  
export default WhatWeDo;