import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Flashcard() {
  const [ flashcard, setFlashcard ] = useState([]);
  const [ cardNumber, setCardnumber ] = useState(0);

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/flashcard/')
      .then((res) => {
        setFlashcard(res.data);
      });
    }, []);
  
  if(flashcard.length === 0){
      return(
        <div>

        </div>
      )
  }

  else{
    function goToNextCard() {
      let card = cardNumber;
      card++;
      if(card === flashcard.length){
        card = 0;
      }
      setCardnumber(card);
    }

    function goToPreviousCard() {
      let card = cardNumber;
      card--;
      if(card < 0)
      card = flashcard.length -1;
      setCardnumber(card)
    }

    function editFlashCard() {
      axios.put('http://127.0.0.1:8000/flashcard/')
      .then((res) => {
        setFlashcard(res.data);
      });
    }

    return(
      <div>
          <div>
            <h1>{flashcard[cardNumber].subject}</h1>
            <h2>{flashcard[cardNumber].word}</h2>
            <h3>{flashcard[cardNumber].definition}</h3>
          </div>
          <div>
            <button onClick={() => goToPreviousCard()}>Previous Card</button>
            <button onClick={() => goToNextCard()}>Next Card</button>
            <button onClick={() => editFlashCard()}>Edit</button>
          </div>
      </div>
    )
  }
}
 
export default Flashcard;