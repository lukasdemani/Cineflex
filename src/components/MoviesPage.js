import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';


export default function MoviesPage() {
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
  
  return (
    <div>
      {movies ? (
        movies.map((movie) => (
         <Link to={`/horarios/${movie.id}`}>
             <img src={movie.posterURL}></img>
         </Link>))
         ) : (
           "Loading"
         )
      }
    </div>
  );
  }