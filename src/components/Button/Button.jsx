import React from 'react'
import { ButtonStyled } from './styles'

function Button({ text, type, backgroundColor, borderColor, textColor, onClick, ...props }) {
    return (
        <ButtonStyled
            type={type}
            onClick={onClick}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            textColor={textColor}
            {...props}
        >
        {text}
        </ButtonStyled>
    )
}

export default Button
