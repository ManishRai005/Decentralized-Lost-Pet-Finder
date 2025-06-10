import React from 'react';
import PetForm from './PetForm';
import PetList from './PetList';

function App() {
  return (
    <div className="App">
      <h1>Lost Pet Finder</h1>
      <PetForm />
      <PetList />
    </div>
  );
}

export default App;
