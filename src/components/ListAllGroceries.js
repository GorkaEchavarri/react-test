import React from 'react';
import GroceryItem from './GroceryItem';
import './GroceryItem.css'

let groceries = [
  {type: "Food", quantity: 3, item: "Potatoes"},
  {type: "Food", quantity: 8, item: "Mushrooms"},
  {type: "Cleaning", quantity: 1, item: "Bleach"},
  {type: "Food", quantity: 2, item: "Cookies"},
  {type: "Bathroom", quantity: 2, item: "Toilet Paper"},
]

function ListAllGroceries() {
  return (
    <div>
      <ul>
      <div class="grocery-container">
      <div class="grocery-item">Type</div>
    <div class="grocery-item">Quantity</div>
      <div class="grocery-item">Item</div>
    </div>
    <br></br>
      <GroceryItem type={groceries[0].type} quantity={groceries[0].quantity} item={groceries[0].item}/>
      <GroceryItem type={groceries[1].type} quantity={groceries[1].quantity} item={groceries[1].item}/>
      <GroceryItem type={groceries[2].type} quantity={groceries[2].quantity} item={groceries[2].item}/>
      <GroceryItem type={groceries[3].type} quantity={groceries[3].quantity} item={groceries[3].item}/>
      <GroceryItem type={groceries[4].type} quantity={groceries[4].quantity} item={groceries[4].item}/>
      </ul>
    </div>
  );
}

export default ListAllGroceries;
