

export default function ReviewCard({ name, vote, text, image}) {
  

  return (
    <>
      {/* User che ha lasciato una review */}
      <h2 className="user-review">{name}</h2>
      <span>Vote: {vote}</span>
      {/* testo con la recensione */}
      <p>{text}</p>
    </>
  )
  
}