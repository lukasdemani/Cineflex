import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';



export default function Seats() {
    const { id } = useParams();
    const [seatsArray, setSeatsArray] = useState([]);
    let selectedArray = [];

    for (let i=0;i<50;i++){
    selectedArray.push(false);
    }
  
    const [selected, setSelected] = useState(selectedArray);
    let ids = [];

    console.log('res')

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
        index = parseInt(index);
        console.log(typeof(index));
        selectedArray[index] = !selectedArray[index];
        console.log(selectedArray);
        setSelected(selectedArray);
        ids.push(id);
        console.log(selected);
        console.log(ids);
    }

    return (
        <Container>
            <h1>Selecione o(s) assento(s)</h1>
            {seatsArray.map((seat) => (
                //<Link to="/reserva">
                    <SeatButton onClick={() => selectSeat(seat.id, seat.name)} selected={selected[seat.name]}>{seat.name}</SeatButton>
                //</Link>
            ))}

            <ClientName>
                <p>Nome do comprador:</p>
                <input placeholder="Digite o seu nome..."></input>
            </ClientName>

            <ClientCpf>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..."></input>
            </ClientCpf>
        </Container>
    );
}

const ClientName = styled.div `
    width: 100%;
    height: 75px;
`

const ClientCpf = styled.div `
    width: 100%;
    height: 75px;
`

const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
`

const SeatButton = styled.button `
    width: 26px;
    height: 26px;
    background-color: ${props => props.selected ? 'green' : 'blue'};
    border-radius: 12px;
`