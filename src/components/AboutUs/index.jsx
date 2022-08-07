import React from 'react'
import ImageAboutUs from '../../assets/aboutUs.svg'
import { TextLightOrange } from '../molecules/TextLightOrange'
import { Title } from '../molecules/Title'
import { Text } from '../molecules/Text'
import  Button from '../Button/Button'
import { Container, Informations, Image } from './styles'

function AboutUs() {
    return (
        <Container>
            <Informations>
                <TextLightOrange>Sobre nós</TextLightOrange>
                <Title> O que é o recycle.io? </Title>
                <Text>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                <Button 
                    type="secondary" 
                    text="Saiba mais"
                    backgroundColor={'#e8e7e5'}
                />
            </Informations>
            <Image src={ImageAboutUs} />
        </Container>
    )
}

export default AboutUs