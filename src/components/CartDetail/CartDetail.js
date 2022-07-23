import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../CartContext/CartContext";

const CartDetail = () => {
  const { items, clear, removeItem } = useContext(ItemsContext);
  console.log(items);
  if (items.length === 0) {
    return (
      <div>
        <h1>No items in the cart yet</h1>
        <button>
          <Link to="/">Go back to Home page</Link>
        </button>
      </div>
    );
  }
  return (
    <div id="cartDetail">
      <h1 id="count">
        Cart:{" "}
        {items
          .map((item) => item.quantity)
          .reduce((sum, currValue) => sum + currValue)}{" "}
        items
      </h1>
      <button id="deleteBtn" onClick={clear}>
        Borrar todo el carrito
      </button>
      <ul>
        {items.map((item) => (
          <li className="cartItem" key={item.item.id}>
            {item.item.name} - {item.quantity} piezas
            <button onClick={() => removeItem(item.item.id)}>
              Quitar producto
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDetail;
