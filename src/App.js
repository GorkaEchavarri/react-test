import React from 'react';
import './App.css';
import NewGrocery from './components/NewGrocery';
import ListAllGroceries from './components/ListAllGroceries';


function App() {
  function onSaveGroceryDataHandler(enteredGroceryData) {
    const groceryData = {
      ...enteredGroceryData,
      id: Math.random().toString()
    };
    console.log(groceryData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>--My Groceries--</h1>
        <NewGrocery onSaveGroceryData={onSaveGroceryDataHandler} />
        <br />
        <ListAllGroceries />
      </header>
    </div>
  );
}

export default App;
