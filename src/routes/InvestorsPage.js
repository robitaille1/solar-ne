import React from 'react'
import Nav from '../components/Nav/Nav'
import InvestorsSection from '../components/InvestorsSection/InvestorsSection'
import Footer from '../components/Footer/Footer'

const investorsPage = () => {
    return (
        <main className='InvestorsPage'>
            <Nav />
            <div>
                <InvestorsSection />
            </div>
            <Footer />
      </main>
    )
}

export default investorsPage
