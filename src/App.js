import React from 'react';
import './App.css';
import NewGrocery from './components/NewGrocery';
import ListAllGroceries from './components/ListAllGroceries';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Groceries</h1>
        <NewGrocery />
        <br />
        <ListAllGroceries />
      </header>
    </div>
  );
}

export default App;
