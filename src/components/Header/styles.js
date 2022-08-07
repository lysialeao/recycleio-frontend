import styled from 'styled-components'

export const Container = styled.header`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-content:center;
    padding: 20px 0px;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #fff2ee;
    font-family: 'Poppins', sans-serif;
    position: fixed;

    @media(max-width: 800px) {
        padding: 1px 0px;
    }
`
export const Navigation = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const Option = styled.p`
    display: flex;
    color: #2d6f32;
    width: auto;
    padding: 5px 10px;
    height: auto;
    border-radius: 5px;
    font-weight: 700;
    text-align:center;
    justify-content:center;
    align-content:center;
    cursor: pointer;
    transition: background 1s;

    &:hover{
        background:pink;
    }

    @media(max-width: 800px) {
        display: none;
    }
`

export const Title = styled.p`
    font-weight: 800;
    font-size: 30px;
    color: #078453;
    cursor: pointer;
`
