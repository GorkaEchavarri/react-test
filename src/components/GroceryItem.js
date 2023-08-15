import './GroceryItem.css'

function GroceryItem(props) {
  return (
    <div className="grocery-container">
      <div className="grocery-item">{props.type}</div>
      <div className="grocery-item">{props.quantity}</div>
      <div className="grocery-item">{props.item}</div>
    </div>
  );
}

export default GroceryItem;
