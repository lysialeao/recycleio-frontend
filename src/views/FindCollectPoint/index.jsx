import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'


import { Container, Content, Buttons, FormStyled } from './styles'
import { Title } from '../../components/Molecules/Title'
import Button from '../../components/Button/Button'
import Input from '../../components/Input'

import getAddres from '../../services/viacep';

function FindCollectPoint() {

    const [ cep, setCep ] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const cepForApi = cep.replace(/-/g, '')
        getAddres(cepForApi)
    }

    return (
        <Container>
            <Header />
            <Content> 
                    <Title> Podemos usar sua localização atual? </Title>
                    <Buttons>
                        <FormStyled onSubmit={handleSubmit}>
                            <Input placeholder={'Digite seu CEP'} type='text' value={cep} onChange={(event) => setCep(event.target.value)}/>
                            <Button
                            type="secondary"
                            text="Permitir"
                            backgroundColor={'#e63e1b'}
                            textColor={'#fff2ee'}
                            id='cep'
                            //onClick={() => navigate('/coleta/escolha-os-residuos')}
                            />
                        </FormStyled>
                    </Buttons>
            </Content>
            <Footer />
        </Container>
    )
}

export default FindCollectPoint