import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Container, Content, Section, Option, FormStyled } from './styles'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Button from '../../components/Button/Button'

import { Title } from '../../components/molecules/Title'


const options = [
    {
        type: "Papéis",
        options: [
            { name: "Jornais e Revistas", value: "papelao" },
            { name: "Listas Telefônicas", value: "papelao" },
            { name: "Papel Sulfite/Rascunho", value: "papelao" },
            { name: "Papel de Fax", value: "papelao" },
            { name: "Folhas de Caderno", value: "papelao" },
            { name: "Caixas em Geral (ondulado)", value: "papelao" },
            { name: "Fotocópias", value: "papelao" },
        ]
    },
    {
        type: "Vidros",
        options: [
            { name: "Potes de conservas", value: "papelao" },
            { name: "Embalagens", value: "papelao" },
            { name: "Frascos de remédios vazios", value: "papelao" },
            { name: "Copos", value: "papelao" },
            { name: "Vidros Especiais (Tampa de forno e icro ondas)", value: "papelao" },
            { name: "Garrafas", value: "papelao" }
        ]
    },
    {
        type: "Metal",
        options: [
            { name: "Tampinhas de Garrafas", value: "papelao" },
            { name: "Latas", value: "papelao" },
            { name: "Enlatados", value: "papelao" },
            { name: "Panelas sem cabo", value: "papelao" },
            { name: "Ferragens", value: "papelao" },
            { name: "Arames", value: "papelao" },
            { name: "Chapas", value: "papelao" }
        ]
    }
]

const PickResidues = () => {

    const [ collapse, setCollapse ] = useState(false);
    const navigate = useNavigate()

    return (
        <Container>
            <Header />
            <Content>
                <Title>Lista de resíduos</Title>
                Selecione os resíduos que deseja descartar! (pode ser mais de um 💚)
                <form onSubmit={() => {}}>
                    {
                        options?.map((item) => {
                                return (
                                    <>
                                        <h1>{item.type}</h1> <br/>
                                    <Section collapse={collapse}>
                                        {
                                            item.options?.map((option) => {
                                                return (
                                                    <Option>
                                                        <label>{option.name}</label>
                                                        <input type="checkbox" value={option.value} />
                                                    </Option>
                                                )
                                            })

                                        }
                                    </Section>
                                    </>
                                )
                        })
                    }
                     <Button 
                        type="secondary" 
                        text="Achar pontos!"
                        backgroundColor={'#e63e1b'}
                        textColor={'#fff2ee'}
                        onClick={() => navigate('/coleta/listagem-pontos')}
                        />
                </form>
            </Content>
            <Footer />
        </Container>
    )

}

export default PickResidues