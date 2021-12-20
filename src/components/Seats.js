import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';

import Footer from './Footer';

let selectedArray = [];  
for (let i=0;i<50;i++){selectedArray.push(false)};
let ids = [];

export default function Seats(props) {
    const { id } = useParams();
    const [seatsArray, setSeatsArray] = useState([]);
    const [client, setClient] = useState('');
    const [cpf, setCpf] = useState ('');
    const [color, setColor] = useState ([]);
    const [selected, setSelected] = useState([]);
    let colorArray = [];

    useEffect(() => {
        const require = axios.get(
          `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${id}/seats`
        );
    
        require.then((answer) => {
            console.log(answer.data);
            setSeatsArray(answer.data.seats);
        });
      }, []);

    function selectSeat(id, index) {
        setSelected(selectedArray);
        index = parseInt(index)-1;
        selectedArray[index] = !selectedArray[index];
        console.log(selectedArray);
        setSelected(selectedArray);
        ids.push(id);
        
        console.log(selected);
    }

    function setInputValues(){
        props.clientName(client);
        props.clientCpf(cpf);
        props.idsTickets(ids);
    }

    function setSeatColor(isAvailable, isSelected) {
        let color = "";
        
        if(isAvailable && !isSelected) {
            colorArray.push('#C3CFD9');
            color = '#C3CFD9';
        }else if (isAvailable && isSelected) {
            colorArray.push('#C3CFD9');
            color = '#8DD7CF';
        }else{
            colorArray.push('#C3CFD9');
            color = '#FBE192';
        }
        console.log(colorArray);
        console.log(color);
        return color;
    }

    return (
        <Container>
            <h1>Selecione o(s) assento(s)</h1>
            <SeatsDiv>
            {seatsArray.map((seat) => (
                <SeatButton onClick={() => selectSeat(seat.id, seat.name)} color={setSeatColor(seat.isAvailable, selected[seat.name-1])} available={seat.isAvailable}>{seat.name}</SeatButton>
            ))}
            </SeatsDiv>

            <Legenda>
                <div>
                    <SeatButton color={setSeatColor(true, true)}></SeatButton>
                    <p>Selecionado</p>
                </div>
                <div>
                    <SeatButton color={setSeatColor(true, false)}></SeatButton>
                    <p>Disponível</p>
                </div>
                <div>
                    <SeatButton color={setSeatColor(false, false)}></SeatButton>
                    <p>Indisponível</p>
                </div>
            </Legenda>

            <ClientName>
                <p>Nome do comprador:</p>
                <input value={client} onInput={e => setClient(e.target.value)} placeholder="Digite o seu nome..."></input>
            </ClientName>

            <ClientCpf>
                <p>CPF do comprador:</p>
                <input value={cpf} onInput={e => setCpf(e.target.value)} placeholder="Digite seu CPF..."></input>
            </ClientCpf>

            <Link to="/reserva">
                <BookingButton><button onClick={() => setInputValues()}>Reservar assento(s)</button></BookingButton>
            </Link>

            <Footer poster={props.poster} movieName={props.movieName} weekDay={props.weekDay} time={props.time}></Footer>
        </Container>
    );
}

const ClientName = styled.div `
    width: 100%;
    height: 75px;
    margin-top: 41px;
    font-size: 18px;
    margin-left: 24px;
`

const ClientCpf = styled.div `
    width: 100%;
    height: 75px;
    margin-top: 15px;
    font-size: 18px;
    margin-left: 24px;
`

const BookingButton = styled.div `
    width: 100%;
    height: 80px;
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

const SeatsDiv = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 18px 7px;
    padding-left:24px;
    padding-right: 24px;
`

const Legenda = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 69px;
    margin-top: 16px;

    div {
        text-align: center;
    }
    p {
        padding-top: 10px;
    }
`
const Container = styled.div `
    width: 100%;
    

    h1 {
      width: 100%;
      height: 110px;
      font-size: 24px;
      text-align: center;
      box-sizing: border-box;
      padding-top: 50px;
      font-weight: 400;
    }
  `

const SeatButton = styled.button `
    width: 26px;
    height: 26px;
    background-color: ${props => props.color};
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`