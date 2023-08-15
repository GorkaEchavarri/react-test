import './NewGrocery.css'

function NewGrocery() {

  function typeChangeHandler(event) {console.log(event.target.value)}
  function quantityChangeHandler(event) {console.log(event.target.value)}
  function ItemChangeHandler(event) {console.log(event.target.value)}

  return (
    <div>
      <form className='new-grocery'>
        <label>Type:</label>
        <input type='text' onChange={typeChangeHandler}/>
        <label> Quantity:</label>
        <input type='number' onChange={quantityChangeHandler}/>
        <label> Item:</label>
        <input type='text' onChange={ItemChangeHandler}/> <br></br>
        <button type='submit'>Add Item</button>
      </form>
    </div>
  );
}

export default NewGrocery;
