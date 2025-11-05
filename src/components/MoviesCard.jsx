
// props
export default function MoviesCard({title, image, abstract}){

  // var con path per le img prese dal back-end
  const imageUrl = `http://localhost:3000/images/${image}`;


  return (
     <>
      <div className="card-movie">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <p>{abstract}</p>
        <button className="card-btn-see">See more</button>
      </div>
      </>
)}