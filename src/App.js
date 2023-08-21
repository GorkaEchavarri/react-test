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
  {key: 832,type: "Food", quantity: 2, item: "Oreos"},
  {key: 375,type: "Bathroom", quantity: 2, item: "Toothbrush"},
]

function App() {

  const [groceries, setGroceries] = useState(first_groceries);
  const [filteredType, setFilteredType] = useState("All");

  let showedInfo = "All";

  if (filteredType === "food") {
    showedInfo = "Food"
  } else if (filteredType === "cleaning") {
    showedInfo = "Cleaning"
  } else if (filteredType === "kitchen") {
    showedInfo = "Kitchen"
  } else if (filteredType === "bathroom") {
    showedInfo = "Bathroom"
  } else {
    showedInfo = "All"
  }

  const filtered_groceries = first_groceries.filter(expense => expense.type === filteredType.charAt(0).toUpperCase() + filteredType.slice(1))
  console.log(filtered_groceries)

  function addGroceryHandler(item) {
    setGroceries((prevGroceries) => {
      return [item, ...prevGroceries];
    });
  };

  function filterHandler(selectedType) {
    setFilteredType(selectedType);
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1>--My Groceries--</h1>
        <NewGrocery onSaveGroceryData={addGroceryHandler} />
        <GroceryFilter selected={filteredType} onFilterChange={filterHandler} />
        <p>Data for the type {showedInfo} is shown.</p>
        <ListAllGroceries items={groceries}/>
      </header>
    </div>
  );
}

export default App;
