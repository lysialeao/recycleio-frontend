import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Navigation, Option, Title } from './styles.js'
import Button from '../Button/Button'

const Header = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <Title onClick={() => navigate('/')}>recycle.io</Title>
            <Navigation>
                <Option onClick={() => navigate('/')}>Início</Option>
                <Option onClick={() => navigate('/cadastro/pessoa')}>Pessoa</Option>
                <Option onClick={()=> navigate('/cadastro/empresa')}>Empresa</Option>
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
