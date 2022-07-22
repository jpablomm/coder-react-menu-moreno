import { useContext, useState } from "react";
import { ItemsContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const ItemCount = ({ product }) => {
  const { addItem } = useContext(ItemsContext);
  const [quantity, setQuantity] = useState(1);
  const [addBtnActive, setAddBtnActive] = useState(false);

  const increaseQuantity = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = (e) => {
    e.preventDefault();
    setQuantity(quantity - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({
      item: product,
      quantity: quantity,
    });
    setAddBtnActive(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="quantity">Quantity:</label>
        <button onClick={decreaseQuantity}>-</button>
        <input
          id="quantity"
          type="number"
          name="quantity"
          value={quantity}
          readOnly
        />
        <button onClick={increaseQuantity}>+</button>
        {addBtnActive ? (
          <button id="addButton">
            <Link to="/cart">Go to Cart</Link>
          </button>
        ) : (
          <button id="addButton">Add to Cart</button>
        )}
      </form>
    </div>
  );
};

export default ItemCount;
