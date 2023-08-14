import './GroceryItem.css'

function GroceryItem(props) {
  return (
    <div class="grocery-container">
      <div class="grocery-item">{props.type}</div>
      <div class="grocery-item">{props.quantity}</div>
      <div class="grocery-item">{props.item}</div>
    </div>
  );
}

export default GroceryItem;
