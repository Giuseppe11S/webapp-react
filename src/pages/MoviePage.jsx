import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import ReviewForm from "../components/ReviewForm"

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
        <div className="card-film-review">
          <img
            src={movie.image}
            alt={movie.title}
            className="movie-image"
          />
          <h1>{movie.title} - {movie.release_year}</h1>
          <p>{movie.director}</p>
          <p>{movie.genre}</p>
          <p>{movie.abstract}</p>
          <Link to={`/`}><button className="btn-back-home">Back to Home</button></Link>
          </div>
          </div>
            {/* // recensioni */}
          <div className="cnt-all-reviews">
            {renderReviews()}
            {/* form per inserire la recensione */}
            </div>
      {/* input form per l'utente per inserire una recensione */}
      <ReviewForm movies_id={id} reloadReviews={fetchMovie} />
     <div className="cnt-bottom-btn">
     <Link to={`/`}><button className="btn-back-home">Back to Home</button></Link>
     </div>
    </>
  )
  
}