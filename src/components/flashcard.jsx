import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Flashcard = () => {
  const [ flashcard, setFlashcard ] = useState([]);

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/flashcard/')
      .then((res) => {
        setFlashcard(res.data);
      });
    }, []);

    return (
      <div>
          {flashcard.map((card) => {
            return (
                <div key={card.id}>
                    <h1>{card.subject}</h1>
                    <h2>{card.question}</h2>
                    <h3>{card.answer}</h3>
                    <button>Next</button>
                    <button>Previous</button>
                  </div>
            )
        })}
      </div>
    );
}
 
export default Flashcard;