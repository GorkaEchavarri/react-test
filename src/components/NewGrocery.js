import React, { useState } from 'react';
import './NewGrocery.css'

function NewGrocery(props) {

  const [enteredType, setEnteredType] = useState('');
  const [enteredQuantity, setEnteredQuantity] = useState('');
  const [enteredItem, setEnteredItem] = useState('');

  function typeChangeHandler(event) {setEnteredType(event.target.value)};
  function quantityChangeHandler(event) {setEnteredQuantity(event.target.value)};
  function itemChangeHandler(event) {setEnteredItem(event.target.value)};

  function submitHandler(event) {
    event.preventDefault();

    const groceryData = {
      key: Math.random().toString(),
      type: enteredType,
      quantity: enteredQuantity,
      item: enteredItem
    };
    // console.log(groceryData);
    props.onSaveGroceryData(groceryData);
    setEnteredType('');
    setEnteredQuantity('');
    setEnteredItem('');
  }

  return (
    <div>
      <form className='new-grocery' onSubmit={submitHandler}>
        <label>Type:</label>
        <input type='text' value={enteredType} onChange={typeChangeHandler}/>
        <label> Quantity:</label>
        <input type='number' value={enteredQuantity} onChange={quantityChangeHandler}/>
        <label> Item:</label>
        <input type='text' value={enteredItem} onChange={itemChangeHandler}/> <br></br>
        <button className="cancel-button">Cancel</button> <button className="submit-button" type='submit'>Add Item</button>
      </form>
    </div>
  );
}

export default NewGrocery;
