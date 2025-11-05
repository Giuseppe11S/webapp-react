

export default function ReviewCard({ name, vote, text, image}) {
  

  return (
    <>
    <div className="card-review">
      {/* User che ha lasciato una review */}
      <span>{name}</span>
      <span>{vote}</span>
      {/* testo con la recensione */}
      <span>{text}</span>
    </div>
    </>
  )
  
}