import "./ItemDetail.css";
import { useContext, useState } from "react";
import { ItemsContext } from "../CartContext/CartContext";

export default function ItemDetail({ product }) {
  const { items, addItem } = useContext(ItemsContext);
  const [quantity, setQuantity] = useState(1);

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
  };
  return (
    <div className="detail col-1" key={product.id}>
      <img src={product.image_url} alt="placeholder" />
      <div id="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
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
          <button id="addButton">Add to Cart</button>
        </form>
      </div>
    </div>
  );
}
