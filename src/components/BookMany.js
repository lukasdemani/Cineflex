import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';


export default function BookMany(props) {
    console.log(props.idsTickets);
    useEffect(() => {
        const require = axios.post(
          `https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many`, 
            {
                ids: props.idsTickets,
                name: props.client,
                cpf: props.cpf
            });
    
        require.then((answer) => {
           console.log('ok');
        });
      }, []);

      function displayCPF(cpf){
        cpf = cpf.replace(/[^\d]/g, "");
      
          return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      }

    return (
        <Container>
            <span>
                <h1>Pedido feito</h1>
                <h1>com sucesso!</h1>
            </span>
           <div>
               <h2>Filme e sessão</h2>
               <p>{props.movieName}</p>
               <p>{props.day} {props.time}</p>
           </div>

           <div>
               <h2>Ingressos</h2>
               <p>{props.movieName}</p>
           </div>

           <div>
               <h2>Comprador</h2>
               <p>Nome: {props.client}</p>
               <p>CPF: {displayCPF(props.cpf)}</p>
           </div>

           <Link to="/">
                <HomeButton><button>Voltar pra Home</button></HomeButton>
            </Link>

        </Container>
    );
}

const Container = styled.div `
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;

    span {
        height: 80px;
        margin-top: 40px;
    }

    h1 {
        font-family: Roboto;
        font-weight: bold;
        font-size: 24px;
       

        color: #247A6B;
    }

    div {
        width: 100%;
        height: 110px;
        text-align: left;
        padding-left: 29px;
    }

    h2 {
        font-weight: bold;
        font-size: 24px;
    }

    p {
        font-weight: normal;
        font-size: 22px;
    }
`

const HomeButton = styled.div `
    width: 100%;
    height: 150px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
   


    button {
        width: 225px;
        height: 42px;

        background: #E8833A;
        border-radius: 3px;

        color: #FFFFFF;
        font-size: 18px;
        border: none;
    }
`

