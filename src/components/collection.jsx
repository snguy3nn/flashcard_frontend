import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Collection() {
  const [ collection, setCollection ] = useState([]);

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/collection/')
      .then((res) => {
        setCollection(res.data);
      });
    }, []);

    return (
        <div>
            <h1>Collections</h1>
                {collection.map((deck) => {
                  return (
                      <div key={deck.id}>
                          <ul><button>{deck.name}</button></ul>
                        </div>
                  )
              })}
        </div>
      );
}
 
export default Collection;