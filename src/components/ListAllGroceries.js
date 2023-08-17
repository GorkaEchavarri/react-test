import React from 'react';
import GroceryItem from './GroceryItem';
import './GroceryItem.css';
import './ListAllGroceries.css';


function ListAllGroceries(props) {

  return (
    <div>
      <ul>
        <div className="header">
      <div className="grocery-container">
        <div className="grocery-item">Type</div>
        <div className="grocery-item">Quantity</div>
        <div className="grocery-item">Item</div>
      </div>
    </div>
    {props.items.map((grocery) => (
      <GroceryItem
      key={grocery.key}
      type={grocery.type}
      quantity={grocery.quantity}
      item={grocery.item} />
      )
    )}
      </ul>
    </div>
  );
}

export default ListAllGroceries;
