import React from 'react'
import Nav from '../components/Nav/Nav'
import ResourcesSection from '../components/ResourcesSection/ResourcesSection'
import Footer from '../components/Footer/Footer'

const resourcesPage = () => {
    return (
        <main className='ResourcesPage'>
            <Nav />
            <div>
                <ResourcesSection />
            </div>
            <Footer />
      </main>
    )
}

export default resourcesPage