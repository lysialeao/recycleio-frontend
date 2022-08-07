import React from 'react'
import { Container, Description, Buttons } from './styles'
import Button from '../Button/Button'

function Apresentation() {

    return (
        <Container src={'https://cdn.dribbble.com/userupload/2919966/file/original-2a080412ff0831144d09c7c7f0fa87b1.png?compress=1&resize=1024x767'}>
            <Description>Pessoas e empresas com o mesmo propósito:<span> reciclagem</span></Description>
            <Buttons> 
            <Button 
                    type="secondary" 
                    text="Ache um ponto de coleta!"
                    backgroundColor={'#e63e1b'}
                    textColor={'#fff2ee'}
                />
                <Button 
                    type="secondary" 
                    text="Cadastre-se"
                    //backgroundColor={'#e63e1b'}
                    borderColor={'#fbad1c'}
                    //textColor={'#fbad1c'}
                />

            </Buttons>
        </Container>
    )
}

export default Apresentation