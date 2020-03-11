import React from 'react'
import Nav from '../components/Nav/Nav'
import CareersSection from '../components/CareersSection/CareersSection'
import Footer from '../components/Footer/Footer'

const careersPage = () => {
    return (
        <main className='CareersPage'>
            <Nav />
            <div>
                <CareersSection />
            </div>
            <Footer />
      </main>
    )
}

export default careersPage
