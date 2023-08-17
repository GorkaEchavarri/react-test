import React, {useState} from 'react';
import './App.css';
import NewGrocery from './components/NewGrocery';
import ListAllGroceries from './components/ListAllGroceries';
import GroceryFilter from './components/GroceryFilter';

const first_groceries = [
  {key: 123, type: "Food", quantity: 3, item: "Potatoes"},
  {key: 236, type: "Food", quantity: 8, item: "Mushrooms"},
  {key: 456, type: "Cleaning", quantity: 1, item: "Bleach"},
  {key: 136,type: "Food", quantity: 2, item: "Cookies"},
  {key: 412,type: "Bathroom", quantity: 2, item: "Toilet Paper"},
  {key: 832,type: "Bathroom", quantity: 2, item: "Hair Wash"},
  {key: 375,type: "Bathroom", quantity: 2, item: "Toothbrush"},
]

function App() {

  const [groceries, setGroceries] = useState(first_groceries);

  function addGroceryHandler(item) {
    setGroceries((prevGroceries) => {
      return [item, ...prevGroceries];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>--My Groceries--</h1>
        <NewGrocery onSaveGroceryData={addGroceryHandler} />
        <GroceryFilter />
        <ListAllGroceries items={groceries}/>
      </header>
    </div>
  );
}

export default App;
