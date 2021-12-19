import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from 'styled-components';

import MoviesPage from "./components/MoviesPage";
import Schedule from "./components/Schedule";
import Seats from "./components/Seats";
import BookMany from "./components/BookMany";
import Header from "./components/Header";

export default function App() {
  const [poster, setPoster] = useState();
  const [movieName, setMovieName] = useState("");

  return (
    <Container>

    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MoviesPage poster={setPoster} movieName={setMovieName}/>}></Route>
        <Route path="/horarios/:idMovie" element={<Schedule poster={poster} movieName={movieName}/>}></Route>
        <Route path="/assentos/:id" element={<Seats />}></Route>
        <Route path="/reserva/" element={<BookMany />}></Route>
      </Routes>
    </BrowserRouter>
    </Container>
  );
}

const Container = styled.div `
  margin: 0px;
`


