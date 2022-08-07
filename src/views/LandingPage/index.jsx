import React from 'react'
import Apresentation from '../../components/Apresentation'
import AboutUs from '../../components/AboutUs'
import AboutPeople from '../../components/AboutPeople'
import AboutCompany from '../../components/AboutCompany'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import { Container } from './styles'


function LandingPage() {
    return (
        <Container> 
            <Header />
            <Apresentation />
            <AboutUs />
            <AboutPeople />
            <AboutCompany />
            <Footer />
        </Container>
    )
}

export default LandingPage