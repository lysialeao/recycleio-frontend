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
    flex-direction: column;
    padding: 2rem;
`

export const Section = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: 1px solid green;
    // display: ${(props) => props.collapse === true ? 'flex' : 'none'};
`
export const Option = styled.div`
    width: 25%;
`