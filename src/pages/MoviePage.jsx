import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import HomePage from "./HomePage"

// prop per singola review
import ReviewCard from "../components/ReviewCard"

export default function MoviePage() {
  
  const [movie, setMovie] = useState({ reviews: [] });
  
  // parametro dinamico 
  const { id } = useParams();

  const fetchMovie = () => {
    axios
    .get(`http://localhost:3000/api/movies/${id}`)
    .then(res => {setMovie(res.data), console.log(res.data)})
    .catch(err => {console.log(err, 'Non è stato possibile ricevere i dati ')})
  }

  useEffect(fetchMovie,[id]);

  
  const renderReviews = () => {
    return movie.reviews.map(review => {
        return (
      <div className="card-review"  key={review.id}>
        <ReviewCard  
          name={review.name}
          vote={review.vote}
          text={review.text}
          image={movie.image}
        />
      </div>
        )
    })

}
  return (
    <>
      <div className="movie-header">
          <h1>{movie.title}</h1>
          <img
            src={movie.image}
            alt={movie.title}
            className="movie-image"
          />
          <p>{movie.director}</p>
          <p>{movie.genre}</p>
          <p>{movie.release_year}</p>
          <p>{movie.abstract}</p>
      </div>


      <div className="card-review">
        {/* // recensioni */}
      {renderReviews()}
      </div>
     <Link to={`/movies`}><button>Back to Home</button></Link>
    </>
  )
  
}