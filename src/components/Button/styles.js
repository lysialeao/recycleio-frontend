import styled from 'styled-components'

export const ButtonStyled = styled.button`
    display:flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    align-items: center;
    width: auto;
    height: auto;
    decoration: none;

    padding: 10px 20px;

    font-family: 'Poppins', sans-serif;
    font-weight: 700;

    color: ${props => props.textColor ? props.textColor : '#078453'};

    border: 1px solid ${props => props.borderColor || props.backgroundColor};

    background-color: ${props => props.backgroundColor};
`