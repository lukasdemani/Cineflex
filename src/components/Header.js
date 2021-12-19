import styled from 'styled-components';

export default function Header(){
    return (
        <Container>
            <h1>CINEFLEX</h1>
        </Container>
    );
}

const Container = styled.div `
    width: 100%;
    height: 67px;

    background-color: #C3CFD9;
    color: #E8833A;
    
    text-align: center;
    h1 {
        font-weight: 400;
        font-size: 34px;
        padding-top: 15px;
    }
`