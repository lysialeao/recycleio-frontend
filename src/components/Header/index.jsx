import React from 'react'
import { Container, Navigation, Option, Title } from './styles.js'
import Button from '../Button/Button'

function Header() {
    return (
        <Container>
            <Title>recycle.io</Title>
            <Navigation> 
                <Option>Início</Option>
                <Option>Pessoa</Option>
                <Option>Empresa</Option>
                <Button 
                    type="secondary" 
                    text="Ache um ponto de coleta!"
                    backgroundColor={'#e63e1b'}
                    textColor={'#fff2ee'}
                />
            </Navigation>
        </Container>
    )
}

export default Header
