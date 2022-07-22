import { useContext } from "react";
import { ItemsContext } from "../CartContext/CartContext";

const CartDetail = () => {
  const { items, clear, removeItem } = useContext(ItemsContext);
  return (
    <div id="cartDetail">
      <h1 id="count">Cart: {items.length} items</h1>
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
