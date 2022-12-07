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
            <Header id='header'/>
            <Apresentation data-testid='apresentation'/>
            <AboutUs id='about-us'/>
            <AboutPeople id='about-people'/>
            <AboutCompany id='about-company'/>
            <Footer id='footer'/>
        </Container>
    )
}

export default LandingPage