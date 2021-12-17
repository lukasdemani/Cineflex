import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

console.log('movie')

export default function MoviesPage() {
//   const [movies, setMovies] = useState();
//   const {  moviesId } = useParams();
const movies = [1, 2];
//   useEffect(() => {
//     const require = axios.get(
//       "https://mock-api.driven.com.br/api/v4/cineflex/movies"
//     );

//     require.then((answer) => {
//       setMovies(answer.data);
//     });
//   }, []);
  
  console.log(movies);
  return (
    <div class="receitas">
        oi
      {/* {movies.map((movie) => { */}
        {/* //   <Link to={`/`}> */}
            <img src='https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg'></img>
        //   {/* </Link> */}
      {/* })} */}
    </div>
  );
}