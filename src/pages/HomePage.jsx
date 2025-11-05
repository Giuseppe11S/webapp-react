import { useState, useEffect } from "react";
import { Link  } from "react-router-dom";
import axios from "axios";
import MoviesCard from "../components/MoviesCard"


export default function Homepage() {

  // variabile di stato per i movies
  const [movies, setMovies] = useState([]);

  // chiamata api al back-end
  const fetchMovies = () => {
    axios
    .get('http://localhost:3000/api/movies')
    .then(res => {setMovies(res.data)})
    .catch(err => {console.log(err, 'Non è stato possibile ricevere i dati ')})
  }
  
  // map dell'api per ottenere ogni singolo movie e fare una card
  const renderMovies = () => {
    return movies.map((movie) => (
      <div className="movie-card" key={movie.id}>
        <Link to={`/movies/${movie.id}`}>
          <MoviesCard         
          title={movie.title}
          image={movie.image}
          abstract={movie.abstract}/>
        </Link>
      </div>
    ));
  };
  
  // utilizzo usereffect
  useEffect(fetchMovies, []);

  return (
    <>
      <div className="container-cards">
        {renderMovies()}
      </div>
    </>
  )
}