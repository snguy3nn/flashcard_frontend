import React from 'react';
import Flashcard from './components/flashcard';
import Collection from './components/collection';
import { CreateCard } from './components/create';

function App() {

  return (
      <div>
        <Flashcard />
        <Collection />
        <h1>Create Flashcard</h1>
        <CreateCard />
        </div> 
  );
}

export default App;

