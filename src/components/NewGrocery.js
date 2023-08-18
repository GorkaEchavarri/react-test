import React, { useState } from 'react';
import './NewGrocery.css'

function NewGrocery(props) {

  const [enteredType, setEnteredType] = useState('');
  const [enteredQuantity, setEnteredQuantity] = useState('');
  const [enteredItem, setEnteredItem] = useState('');
  const [hideForm, setHideForm] = useState(false);

  function typeChangeHandler(event) {setEnteredType(event.target.value)};
  function quantityChangeHandler(event) {setEnteredQuantity(event.target.value)};
  function itemChangeHandler(event) {setEnteredItem(event.target.value)};

  function submitHandler(event) {
    event.preventDefault();
    setHideForm(true);


    const groceryData = {
      key: Math.random().toString(),
      type: enteredType,
      quantity: enteredQuantity,
      item: enteredItem
    };
    enteredItem? props.onSaveGroceryData(groceryData) : console.log("Please enter data")
    setEnteredType('');
    setEnteredQuantity('');
    setEnteredItem('');
  }

  function cancelButtonHandler(event) {
    event.preventDefault();
    setHideForm(false);

  }

  return (
    <div>
      <form className='new-grocery'>
        {hideForm? <div className="inputs">
        <label>Type: </label>
        <input type='text' value={enteredType} onChange={typeChangeHandler}/>
        <label> Quantity: </label>
        <input type='number' value={enteredQuantity} onChange={quantityChangeHandler}/>
        <br></br>
        <label> Item: </label>
        <input type='text' className="item-input" value={enteredItem} onChange={itemChangeHandler}/>
        </div> : ""}

        <button className="cancel-button" onClick={cancelButtonHandler}>Cancel</button>
        <button className="submit-button" type='submit' onClick={submitHandler}>Add Item</button>
      </form>
    </div>
  );
}

export default NewGrocery;
