import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff2ee;
    font-family: 'Poppins', sans-serif;
`

export const Content = styled.div`
    margin-top: 50px;
    display: flex;
    height: 100%;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    padding: 2rem;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    @media(max-width: 800px) {
        flex-direction: column;
    }
`
export const FormStyled = styled.form`
    display: flex;
    flex-direction:column;
    justify-content:center;
    gap: 1rem;
`
