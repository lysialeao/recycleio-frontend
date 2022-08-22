import React from 'react'

import { Container, Informations, Content } from './styles'

const PreviewPoint = ({ image, name}) => {

    return (
        <Container>
            <Content>
                <img width='250px' height='150px' src={image} alt={name}/>
                <Informations>
                    <h1>{name}</h1>
                    <p>
                        Há 15 km de distância - Parque Santa Tereza, Santa Isabel - SP <br/> Aberto agora - das 14 às 16h <br/> ⭐⭐⭐⭐⭐
                    </p>
                </Informations>
            </Content>
        </Container>
    )
}

export default PreviewPoint