import './GroceryFilter.css'

function GroceryItem(props) {
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Choose a type to filter: </label>
        <select >
          <option value='all'>All</option>
          <option value='food'>Food</option>
          <option value='cleaning'>Cleaning</option>
          <option value='bathroom'>Bathroom</option>
          <option value='kitchen'>Kitchen</option>
        </select>
      </div>
    </div>
  );
}

export default GroceryItem;
