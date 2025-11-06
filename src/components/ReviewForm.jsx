import axios from 'axios';

import { useState } from 'react';

export default function ReviewForm({movies_id, reloadReviews}) {

  const initValues = {name: "", text:"", vote:"1"};

  const [formData, setFormData] = useState(initValues);

  const setValueField = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  }
   
  const apiEndPoint = `http://localhost:3000/api/movies/${movies_id}/reviews`;

  // funciton invio richiesta al submit del form
  const submitReview = (e) => {
    e.preventDefault();

    // inviare dati al form tramite http post
    axios.post(apiEndPoint, formData, { headers: { 'Content-Type': 'application/json' } })
    .then(
        () => {
            setFormData(initValues)
            reloadReviews()
        }
    )
    .catch(err => console.log(err)
    )

 }

 return (
  <>
    <div className="cnt-all-form">
        <form onSubmit={submitReview}>
          <h3>Add your review</h3>
            <div className="form-input">
            <label>Name</label>
            <input type="text" name="name" 
            value={formData.name} onChange={setValueField} />
            <label>Review</label>
            <textarea name="text"
            value={formData.text} onChange={setValueField} ></textarea>
            <label>Voto</label>
            <input type="number" min="1" max="5" name='vote'
            value={formData.vote} onChange={setValueField} />
          </div>
        <button type="submit" className="btn-submit-form">
          Send
        </button>
      </form>
    </div>
  </>
 )}
