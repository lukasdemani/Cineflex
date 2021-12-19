import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';



export default function MoviesPage(props) {
  const [movies, setMovies] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const require = axios.get(
      "https://mock-api.driven.com.br/api/v4/cineflex/movies"
    );

    require.then((answer) => {
      setMovies(answer.data);

    });
  }, []);

  function setProps(poster, title){
    props.poster(poster);
    props.movieName(title);
    console.log(props.movieName);
  }
  
  return (
    <Container>
      <h1>Selecione o filme</h1>
      {movies.map((movie) => (
      <MovieDiv onClick={() => setProps(movie.posterURL, movie.title)}>
        <Link to={`/horarios/${movie.id}`}>
            
            <img src={movie.posterURL}></img>
        </Link>
      </MovieDiv>
      ))}
      
    </Container>
  );
  }

  const Container = styled.div `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 11px 30px;

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

  const MovieDiv = styled.div `
    height: 209px;
    width: 145px;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 193px;
        width: 129px;
        left: 213px;
    }

  `