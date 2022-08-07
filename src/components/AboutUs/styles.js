import styled from 'styled-components'

export const Container = styled.section`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    background-color: #fff2ee;
    font-family: 'Poppins', sans-serif;
    justify-content: space-around;
`

export const Informations = styled.div`
    // max-width: 50%;
    padding: 5rem;

`
export const Image= styled.img`
    // max-width: 50%
    background-image: url(${ props => props.src})
    background-attachment: fixed;
    height: 100$;
`