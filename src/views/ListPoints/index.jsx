import React from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

import { Container } from './styles'

const empresas = [
    {
        name : "Leão recicláveis"
    }
]

const ListPoints = () => {
    return (
        <Container>
            <Header />
            <Footer />
        </Container>
    )
}

export default ListPoints