import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import styled from 'styled-components';

import MoviesPage from "./components/MoviesPage";
import Schedule from "./components/Schedule";
import Seats from "./components/Seats";
import BookMany from "./components/BookMany";
import Header from "./components/Header";

export default function App() {
  const [poster, setPoster] = useState();
  const [movieName, setMovieName] = useState("");
  const [client, setClient] = useState('');
  const [cpf, setCpf] = useState('');
  const [time, setTime] = useState('');
  const [day, setDay] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [idsTickets, setIdsTickets] = useState([]);
  
  return (
    <Container>

    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MoviesPage poster={setPoster} movieName={setMovieName}/>}></Route>
        <Route path="/horarios/:idMovie" element={<Schedule poster={poster} movieName={movieName} time={setTime} day={setDay} weekDay={setWeekDay}/>}></Route>
        <Route path="/assentos/:id" element={<Seats clientName={setClient} clientCpf={setCpf} poster={poster} movieName={movieName} time={time} weekDay={weekDay} idsTickets={setIdsTickets}/>}></Route>
        <Route path="/reserva" element={<BookMany movieName={movieName} client={client} cpf={cpf} time={time} day={day} idsTickets={idsTickets}/>}></Route>
      </Routes>
    </BrowserRouter>
    </Container>
  );
}

const Container = styled.div `
  margin: 0px;
`


