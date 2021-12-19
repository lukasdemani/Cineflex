import styled from 'styled-components';

export default function Footer(props){
    console.log(props.movieName);
    return (
        <Container>
            <div>
                <img src={props.poster}></img>
            </div>
            <p>{props.movieName}</p>
        </Container>
    );
}

const Container = styled.div `
    width: 100%;
    height: 117px;

    background-color: #C3CFD9;
    color: #293845;
    
    text-align: left;
    padding-left: 10px;
    padding-top: 14px;

    display: flex;

    div {
        width: 64px;
        height: 89px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px; 
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    img {
        width: 48px;
        height: 72px;
    }

    p {
        font-size: 26px;
        padding-top: 30px;
        padding-left: 15px;
    }
`