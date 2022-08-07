import styled from 'styled-components'

export const Container = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    background-image: url('${props => props.src}');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Poppins', sans-serif;

`

export const Buttons = styled.div`
    display:flex;
    flex-direction: row;
    gap: 1rem;
`
export const Description = styled.div`
    font-weight: 800;
    color: #2d6f32;
    font-size: 24px;
    background: #fff2ee;


    span {
        color: #e63e1b;
        transition: font-size 1s;
        transition-delay: font-size 1s;
    }

    span:hover{
        font-size: 28px;
    }
`