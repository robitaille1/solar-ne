import React from 'react'
import Nav from '../components/Nav/Nav'
import PartnersSection from '../components/PartnersSection/PartnersSection'
import Footer from '../components/Footer/Footer'

const partnersPage = () => {
    return (
        <main className='PartnersPage'>
            <Nav />
            <div>
                <PartnersSection />
            </div>
            <Footer />
      </main>
    )
}

export default partnersPage