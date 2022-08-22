import React from 'react'
import InputMask from 'react-input-mask';

import { InputStyled } from './styles'

function Input({...props}) {

    return (
        <InputStyled>
            <InputMask mask="99999-999" {...props } />
        </InputStyled>
    )
}

export default Input