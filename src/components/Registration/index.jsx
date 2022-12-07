import React from 'react'

import { Container, Box, BoxColor } from './styles'

import FormRegistration from '../FormRegistration'
import Footer from '../Footer'

const Registration = () => {
    const inputs = [
        {
            label : 'Nome',
            type : 'text',
            id: 'name'
        },
        {
            label : 'E-mail',
            type : 'email',
            id: 'email'
        },
        {
            label : 'Senha',
            type : 'password',
            id: 'pwd'
        }
    ]
    return (
        <div>
        <Container>
            <BoxColor />
            <Box>
                aaaaaaaaaaaaaaa
                <FormRegistration inputs={inputs} />
            </Box>
        </Container>
            <Footer />
        </div>
    )
}

export default Registration