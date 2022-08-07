import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import { useNavigate } from 'react-router-dom';

import { Container, Content, Buttons } from './styles'
import { Title } from '../../components/molecules/Title'
import Button from '../../components/Button/Button'
import Input from '../../components/Input'

function FindCollectPoint() {

    const navigate = useNavigate()

    return (
        <Container>
            <Header />
            <Content> 
                    <Title> Podemos usar sua localização atual? </Title>
                    <Buttons> 
                        <Input placeholder={'Digite seu CEP'} type='text' />
                        <Button 
                        type="secondary" 
                        text="Permitir"
                        backgroundColor={'#e63e1b'}
                        textColor={'#fff2ee'}
                        onClick={() => navigate('/coleta/escolha-os-residuos')}
                        />
                    </Buttons>
            </Content>
            <Footer />
        </Container>
    )
}

export default FindCollectPoint