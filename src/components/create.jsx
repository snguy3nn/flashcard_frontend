import React, { useState } from "react";
import axios from "axios";

export function CreateCard() {
  const [ card, setCard ] = useState("");
  
  const handleSubmit = event => {
      event.preventDefault();
      axios.post('http://127.0.0.1:8000/flashcard/')
      .then(res => {
          setCard(res.data)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Word:
        <input
          type="text"
          onChange={e => setCard(e.target.value)}
        />
      </label>
      <label>
          Definition:
          <input
            type="text"
            onChange={e => setCard(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}