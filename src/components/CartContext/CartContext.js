import { createContext, useState } from "react";

export const ItemsContext = createContext();

const CartContext = (props) => {
  const [items, setItems] = useState([]);

  const isInCart = (id) => {
    return items.find((item) => {
      return item.item.id === id;
    });
  };

  const addItem = (product) => {
    if (isInCart(product.item.id)) {
      const originalQuantity = items.find(
        (item) => item.item.id === product.item.id
      ).quantity;
      const newItems = items.filter((item) => item.item.id !== product.item.id);
      setItems([
        { quantity: originalQuantity + product.quantity, item: product.item },
        ...newItems,
      ]);
    } else {
      setItems([product, ...items]);
    }
  };

  const removeItem = (productId) => {
    const newItems = items.filter((item) => item.item.id !== productId);
    setItems(newItems);
  };

  const clear = () => {
    setItems([]);
  };

  return (
    <ItemsContext.Provider
      value={{ items, addItem, removeItem, clear, isInCart }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};

export default CartContext;
