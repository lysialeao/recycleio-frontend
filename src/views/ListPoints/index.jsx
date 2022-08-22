import React from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

import { Container, Content } from './styles'

import PreviewPoint from '../../components/PreviewPoint'

const empresas = [
    {
        name : "Leão recicláveis",
        image: 'https://otacilioarquitetura.com.br/wp-content/uploads/2019/02/44.jpg'
    },
    {
        name : "Exemplo",
        image : 'https://goldenesquadrias.com.br/uploads/noticias/golden_esquadrias__1398707662__2804142014145422.jpg'
    },
    {
        name : "Mais um Exemplo",
        image : 'https://goldenesquadrias.com.br/uploads/noticias/golden_esquadrias__1398707662__2804142014145422.jpg'
    }
]

const ListPoints = () => {
    return (
        <Container>
            <Header />
            <Content>
                { empresas.map((item, index) => <PreviewPoint key={index} name={item.name} image={item.image}/>)}
            </Content>
            <Footer />
        </Container>
    )
}

export default ListPoints