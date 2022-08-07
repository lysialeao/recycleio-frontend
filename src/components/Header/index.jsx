import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Navigation, Option, Title } from './styles.js'
import Button from '../Button/Button'

function Header() {
    const navigate = useNavigate();
    return (
        <Container>
            <Title onClick={() => navigate('/')}>recycle.io</Title>
            <Navigation> 
                <Option>Início</Option>
                <Option>Pessoa</Option>
                <Option>Empresa</Option>
                <Button 
                    type="secondary" 
                    text="Ache um ponto de coleta!"
                    backgroundColor={'#e63e1b'}
                    textColor={'#fff2ee'}
                    onClick={() => navigate('/coleta/ache-um-ponto-de-coleta')}
                />
            </Navigation>
        </Container>
    )
}

export default Header
