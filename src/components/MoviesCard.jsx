

export default function MoviesCard({title, image, abstract}){
  return (
     <>
      <div className="card-movie">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{abstract}</p>
      </div>
      </>
)}